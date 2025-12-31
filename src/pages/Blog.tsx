import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const blogPosts = [
  {
    title: "10 SEO Trends That Will Dominate 2025",
    excerpt: "Stay ahead of the curve with these essential SEO strategies that will shape the digital landscape in the coming year.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    category: "SEO",
    author: "Emma Thompson",
    readTime: "8 min read",
    slug: "seo-trends-2025",
  },
  {
    title: "Building Brand Loyalty in the Digital Age",
    excerpt: "Discover how to create lasting connections with your audience through authentic branding and consistent messaging.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    category: "Branding",
    author: "David Park",
    readTime: "6 min read",
    slug: "brand-loyalty-digital-age",
  },
  {
    title: "The Complete Guide to Social Media ROI",
    excerpt: "Learn how to measure and maximize the return on your social media marketing investments with proven strategies.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    category: "Social Media",
    author: "Sarah Chen",
    readTime: "10 min read",
    slug: "social-media-roi-guide",
  },
  {
    title: "Web Performance: Why Speed Matters for Conversions",
    excerpt: "Explore the direct correlation between website speed and conversion rates, plus actionable tips to improve performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Development",
    author: "James Wilson",
    readTime: "7 min read",
    slug: "web-performance-conversions",
  },
  {
    title: "Email Marketing Automation Best Practices",
    excerpt: "Master the art of email automation with strategies that nurture leads and drive consistent revenue.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    category: "Email",
    author: "Emma Thompson",
    readTime: "5 min read",
    slug: "email-automation-best-practices",
  },
  {
    title: "Content Strategy for B2B Companies",
    excerpt: "A comprehensive guide to creating content that resonates with business buyers and drives qualified leads.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "Content",
    author: "David Park",
    readTime: "9 min read",
    slug: "b2b-content-strategy",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Digital Marketing Insights & Strategies | Nexera</title>
        <meta
          name="description"
          content="Explore expert insights on SEO, social media marketing, branding, and web development. Stay updated with the latest digital marketing trends and strategies."
        />
        <link rel="canonical" href="https://nexera.agency/blog" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative mx-auto max-w-7xl text-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Blog
              </span>
              <h1 className="heading-xl mt-4">
                Insights & <span className="gradient-text">Expertise</span>
              </h1>
              <p className="body-lg mx-auto mt-6 max-w-2xl">
                Stay informed with the latest trends, strategies, and insights in
                digital marketing from our team of experts.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding pt-0">
          <FadeIn className="mx-auto max-w-7xl">
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
              <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
                <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="heading-md mt-4 transition-colors group-hover:text-primary">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </section>

        {/* Blog Grid */}
        <section className="section-padding pt-0">
          <StaggerContainer className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <StaggerItem key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-sm font-medium backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-card">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="heading-lg">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="body-lg mt-4">
              Subscribe to our newsletter for weekly insights, tips, and
              strategies delivered straight to your inbox.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-border bg-background px-6 py-4 outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="btn-primary rounded-full px-8 py-4"
              >
                Subscribe
              </button>
            </form>
          </FadeIn>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
