import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Seo } from "@/lib/seo";

// Gallery Images
import img1 from "@/assets/Primium Pest Control/image1.jpeg";
import img2 from "@/assets/Primium Pest Control/image2.jpeg";
import img3 from "@/assets/Primium Pest Control/image3.jpeg";
import img4 from "@/assets/Primium Pest Control/image4.jpeg";
import img5 from "@/assets/Primium Pest Control/image5.jpeg";
import img6 from "@/assets/Primium Pest Control/image6.jpeg";
import img7 from "@/assets/Primium Pest Control/image7.jpeg";
import img8 from "@/assets/Primium Pest Control/image8.jpeg";
import img9 from "@/assets/Primium Pest Control/image9.jpeg";
import img10 from "@/assets/Primium Pest Control/image10.jpeg";
import img11 from "@/assets/Primium Pest Control/image11.jpeg";
import img12 from "@/assets/Primium Pest Control/image12.jpeg";
import img13 from "@/assets/Primium Pest Control/image13.jpeg";
import img14 from "@/assets/Primium Pest Control/image14.jpeg";
import img15 from "@/assets/Primium Pest Control/image15.jpeg";
import img16 from "@/assets/Primium Pest Control/image16.jpeg";
import img17 from "@/assets/Primium Pest Control/image17.jpeg";

const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17
];

const Gallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <Seo
                title="Pest Control Service Gallery in Varanasi | PREEMIUM"
                description="View PREEMIUM Pest Management service photos, pest control operations and professional treatment work across Varanasi."
                path="/gallery"
            />
            <Header />
            <main className="pt-20">
                <section className="bg-gradient-primary section-padding text-center">
                    <div className="container mx-auto">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                            Our Gallery
                        </h1>
                        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                            A glimpse into our professional pest management operations and success stories.
                        </p>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="relative group overflow-hidden rounded-xl bg-accent aspect-[4/3] shadow-card border border-border/50"
                                >
                                    <img
                                        src={img}
                                        alt={`Pest Management Service ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default Gallery;
