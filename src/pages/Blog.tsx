import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import { useQuery } from "@tanstack/react-query";
import { Seo } from "@/lib/seo";

const toPlainText = (blocks: any[] = []) => {
    if (!blocks) return "";
    return blocks
        .map((block) => {
            if (block._type !== "block" || !block.children) {
                return "";
            }
            return block.children.map((child: any) => child.text).join("");
        })
        .join(" ");
};

const getPostSlug = (post: any) => post?.slug?.current || post?._id;

const Blog = () => {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const query = `*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                author,
                mainImage,
                categories,
                publishedAt,
                body
            }`;
            return await client.fetch(query);
        }
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <h2 className="text-xl font-bold mb-4">Error loading blog posts</h2>
                <p className="text-muted-foreground mb-6">Failed to fetch data from Sanity CMS.</p>
                <button 
                    onClick={() => window.location.reload()}
                    className="bg-primary text-white px-6 py-2 rounded-full font-bold"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Seo
                title="Pest Control Blog in Varanasi | Expert Tips & Guides"
                description="Read expert pest control articles for Varanasi homes and businesses, including termite treatment, mosquito management, cockroach control, rodent prevention and bed bug removal."
                path="/blog"
            />
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-primary section-padding text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-4 backdrop-blur-sm border border-white/20">
                                INSIGHTS & UPDATES
                            </span>
                            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Our <span className="text-secondary-foreground">Blog</span>
                            </h1>
                            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                                Expert advice, pest prevention tips, and the latest trends in professional pest management.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="section-padding bg-background">
                    <div className="container mx-auto">
                        {posts && posts.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post: any, index: number) => (
                                    <motion.article
                                        key={post._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            {post.mainImage && (
                                                <img
                                                    src={urlFor(post.mainImage).url()}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                            <div className="absolute top-4 left-4">
                                                {post.categories && post.categories.length > 0 && (
                                                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                                        {post.categories[0]}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date'}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <User className="h-3.5 w-3.5" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h2>

                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                                                {toPlainText(post.body)}
                                            </p>

                                            <div className="mt-auto">
                                                <Link
                                                    to={`/blog/${getPostSlug(post)}`}
                                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:gap-3 transition-all"
                                                >
                                                    Read More
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <h3 className="text-2xl font-bold text-muted-foreground">No blog posts found.</h3>
                                <p className="mt-4">Check back soon for latest insights!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter/CTA Section */}
                <section className="section-padding bg-accent/30 overflow-hidden relative">
                    <div className="container mx-auto relative z-10">
                        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full"></div>
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full"></div>
                            
                            <div className="relative z-10">
                                <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-80" />
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                    Need professional help?
                                </h2>
                                <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                                    Our experts are ready to help you with any pest-related issues. Get a free consultation today.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
                                >
                                    Contact Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default Blog;
