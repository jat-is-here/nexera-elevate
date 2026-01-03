import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export default function ShapeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.4));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;

    containerRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.3,
        0.22,
        0.25
      )
    );

    /* ---------------- Camera Parallax ---------------- */
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const velocity = { x: 0, y: 0 };
    const PARALLAX_FORCE = 0.25;
    const DAMPING = 0.85;

    window.addEventListener("mousemove", (e) => {
      const mx = (e.clientX / window.innerWidth) * 2 - 1;
      const my = -(e.clientY / window.innerHeight) * 2 + 1;
      target.x = mx * PARALLAX_FORCE;
      target.y = my * PARALLAX_FORCE;
    });

    /* ---------------- Materials (LOD) ---------------- */
    const nearMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const farMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });

    /* ---------------- Geometry LOD ---------------- */
    const HIGH: THREE.BufferGeometry[] = [
      new THREE.BoxGeometry(1.2, 1.2, 1.2, 16, 16, 16),
      new THREE.SphereGeometry(1, 40, 40),
      new THREE.TorusGeometry(0.85, 0.3, 32, 100),
    ];

    const LOW: THREE.BufferGeometry[] = [
      new THREE.BoxGeometry(1.2, 1.2, 1.2, 6, 6, 6),
      new THREE.SphereGeometry(1, 16, 16),
      new THREE.TorusGeometry(0.85, 0.3, 10, 40),
    ];

    const buildCylinder = (radial: number, height: number) => {
      const body = new THREE.CylinderGeometry(0.6, 0.6, 1.6, radial, height, true);
      const top = new THREE.CircleGeometry(0.6, radial);
      const bottom = new THREE.CircleGeometry(0.6, radial);
      top.rotateX(-Math.PI / 2);
      top.translate(0, 0.8, 0);
      bottom.rotateX(Math.PI / 2);
      bottom.translate(0, -0.8, 0);
      return mergeGeometries([body, top, bottom], true)!;
    };

    HIGH.push(buildCylinder(32, 12));
    LOW.push(buildCylinder(12, 4));

    const buildHalf = (seg: number) => {
      const half = new THREE.SphereGeometry(1, seg, seg, 0, Math.PI * 2, 0, Math.PI / 2);
      const cap = new THREE.CircleGeometry(1, seg);
      cap.rotateX(Math.PI / 2);
      return mergeGeometries([half, cap], true)!;
    };

    HIGH.push(buildHalf(40));
    LOW.push(buildHalf(16));

    /* ---------------- Placement ---------------- */
    const area = window.innerWidth * window.innerHeight;
    const TOTAL = Math.min(20, Math.max(12, Math.floor(area / 120000)));
    const PER_QUAD = Math.floor(TOTAL / 4);

    const MIN_DIST = 3.2;
    const MAX_X = 8;
    const MAX_Y = 5;
    const MAX_Z = 3;

    type Shape = {
      mesh: THREE.Points;
      baseY: number;
      depth: number;
      floatSpeed: number;
      rotSpeed: number;
    };

    const shapes: Shape[] = [];
    const used: THREE.Vector3[] = [];

    const valid = (p: THREE.Vector3) => used.every((o) => o.distanceTo(p) > MIN_DIST);

    const quads = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];

    quads.forEach(([qx, qy], qi) => {
      let count = 0;
      let tries = 0;
      while (count < PER_QUAD && tries < 2000) {
        tries++;
        const pos = new THREE.Vector3(
          THREE.MathUtils.randFloat(1, MAX_X) * qx,
          THREE.MathUtils.randFloat(1, MAX_Y) * qy,
          THREE.MathUtils.randFloat(-MAX_Z, MAX_Z)
        );
        if (!valid(pos)) continue;
        used.push(pos);

        const depth = 1 - THREE.MathUtils.clamp((pos.z + MAX_Z) / (2 * MAX_Z), 0, 1);
        const isNear = depth > 0.55;
        const geoSet = isNear ? HIGH : LOW;
        const mat = isNear ? nearMaterial : farMaterial;
        const geo = geoSet[(qi + count) % geoSet.length];
        const points = new THREE.Points(geo, mat);

        points.position.copy(pos);
        points.scale.setScalar(THREE.MathUtils.lerp(0.85, 1.2, depth));
        points.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(points);

        shapes.push({
          mesh: points,
          baseY: pos.y,
          depth,
          floatSpeed: THREE.MathUtils.lerp(0.8, 1.5, depth),
          rotSpeed: THREE.MathUtils.lerp(0.003, 0.01, depth),
        });

        count++;
      }
    });

    /* ---------------- Resize ---------------- */
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    });

    /* ---------------- Adaptive Animate ---------------- */
    const clock = new THREE.Clock();
    let lastFrameTime = performance.now();
    let renderSkip = 0;

    const animate = () => {
      const now = performance.now();
      const delta = now - lastFrameTime;
      lastFrameTime = now;

      // Simple FPS check
      const fps = 1000 / delta;

      // Reduce load if FPS < 50
      if (fps < 50) {
        renderSkip++;
      } else if (fps > 55 && renderSkip > 0) {
        renderSkip--;
      }

      if (renderSkip % 2 === 0) {
        const t = clock.getElapsedTime();

        velocity.x += target.x - current.x;
        velocity.y += target.y - current.y;
        velocity.x *= DAMPING;
        velocity.y *= DAMPING;
        current.x += velocity.x;
        current.y += velocity.y;

        camera.position.x = current.x * 3;
        camera.position.y = current.y * 2;
        camera.lookAt(0, 0, 0);

        shapes.forEach((s, i) => {
          // Fade out far shapes if FPS low
          const effectiveDepth = s.depth * (fps < 45 ? 0.7 : 1);

          s.mesh.rotation.y += s.rotSpeed * effectiveDepth + 0.002;
          s.mesh.rotation.x += s.rotSpeed * effectiveDepth + 0.002;
          s.mesh.position.y =
            s.baseY + Math.sin(t * s.floatSpeed + i) * 0.25 * effectiveDepth;
          s.mesh.visible = fps > 35 || s.depth > 0.5; // hide far objects if FPS too low
        });

        composer.render();
      }

      requestAnimationFrame(animate);
    };

    animate();

    /* ---------------- Cleanup ---------------- */
    return () => {
      renderer.dispose();
      composer.dispose();
      nearMaterial.dispose();
      farMaterial.dispose();
      [...HIGH, ...LOW].forEach((g) => g.dispose());
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}