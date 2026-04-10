import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "@portabletext/react";

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data: post, isLoading, error } = useQuery({
        queryKey: ['post', id],
        queryFn: async () => {
            const query = `*[_type == "post" && _id == $id][0] {
                _id,
                title,
                slug,
                author,
                mainImage,
                categories,
                publishedAt,
                body,
                "related": *[_type == "post" && _id != $id] | order(publishedAt desc) [0...2] {
                    _id,
                    title,
                    mainImage,
                    publishedAt,
                    categories
                }
            }`;
            return await client.fetch(query, { id });
        },
        enabled: !!id
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
            </div>
        );
    }

    const relatedPosts = post.related || [];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                    {post.mainImage && (
                        <img
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="max-w-4xl"
                            >
                                {post.categories && post.categories.length > 0 && (
                                    <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest mb-6">
                                        {post.categories[0]}
                                    </span>
                                )}
                                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-white/20">
                                            <User className="h-4 w-4 text-white" />
                                        </div>
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date'}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="section-padding bg-background relative -mt-10 md:-mt-16 z-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                            {/* Main Content */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="lg:w-2/3"
                            >
                                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border/50">
                                    <Link 
                                        to="/blog" 
                                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium group"
                                    >
                                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                        Back to all articles
                                    </Link>

                                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                                        <PortableText value={post.body} />
                                    </div>

                                </div>
                            </motion.div>

                            {/* Sidebar */}
                            <aside className="lg:w-1/3 flex flex-col gap-8">
                                {/* Related Posts */}
                                <div className="bg-accent/30 rounded-3xl p-8 border border-border/50">
                                    <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                                        Related Articles
                                    </h3>
                                    <div className="flex flex-col gap-6">
                                        {relatedPosts.map((rp: any) => (
                                            <Link 
                                                key={rp._id} 
                                                to={`/blog/${rp._id}`}
                                                className="group flex gap-4"
                                            >
                                                <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                                    {rp.mainImage && (
                                                        <img src={urlFor(rp.mainImage).url()} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h4 className="text-sm font-bold line-clamp-2 group-hover:text-primary transition-colors leading-tight mb-1">
                                                        {rp.title}
                                                    </h4>
                                                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                                                        {rp.publishedAt ? new Date(rp.publishedAt).toLocaleDateString() : ''}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Newsletter / Contact Card */}
                                <div className="bg-primary rounded-3xl p-8 text-primary-foreground shadow-lg overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <MessageCircle className="h-24 w-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="font-heading text-xl font-bold mb-4">Have a Pest Problem?</h3>
                                        <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                                            Get a free inspection and customized quote from our experts.
                                        </p>
                                        <Link 
                                            to="/contact" 
                                            className="block w-full py-4 bg-white text-primary text-center rounded-2xl font-bold text-sm hover:bg-opacity-90 transition-all hover:shadow-lg"
                                        >
                                            Book Free Consultation
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default BlogDetail;
