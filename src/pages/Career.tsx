import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Briefcase } from "lucide-react";
import { Seo } from "@/lib/seo";

const Career = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Seo
                title="Careers at PREEMIUM Pest Management"
                description="Career opportunities at PREEMIUM Pest Management Services. This page is being prepared and will be updated with open roles."
                path="/career"
                noIndex
            />
            <Header />
            <main className="flex-1 pt-20 flex items-center justify-center">
                <section className="section-padding text-center w-full">
                    <div className="container mx-auto max-w-2xl">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Career
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            We're currently working on this page. Check back soon for exciting opportunities!
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold tracking-wide border border-border">
                            Coming Soon
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default Career;
