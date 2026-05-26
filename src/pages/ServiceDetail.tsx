import type { FormEvent } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { servicesData } from "@/data/servicesData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    CalendarCheck,
    CheckCircle2,
    ClipboardCheck,
    Clock,
    FileCheck,
    Mail,
    MapPin,
    Phone,
    Search,
    ShieldCheck,
    Star,
    Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { Seo, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import serviceImgOne from "@/assets/Primium Pest Control/image2.jpeg";
import serviceImgTwo from "@/assets/Primium Pest Control/image5.jpeg";
import serviceImgThree from "@/assets/Primium Pest Control/image8.jpeg";

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = servicesData.find((s) => s.id === id || s.seoSlug === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    if (id === service.id) {
        return <Navigate to={`/services/${service.seoSlug}`} replace />;
    }

    const Icon = service.icon;
    const servicePath = `/services/${service.seoSlug}`;
    const serviceFaqs = service.faqs ?? [
        {
            question: `Do you provide ${service.title.toLowerCase()} in Varanasi?`,
            answer: `Yes, PREEMIUM provides ${service.title.toLowerCase()} in Varanasi for homes, offices, industries and commercial spaces.`,
        },
        {
            question: "How can I book an inspection?",
            answer: "You can book an inspection by calling +91 70016 64727 or using the WhatsApp button on the website.",
        },
        {
            question: "Are the treatments safe for families and businesses?",
            answer: "Our technicians use approved treatment methods and explain all preparation and safety steps before service.",
        },
    ];
    const serviceImages = [serviceImgOne, serviceImgTwo, serviceImgThree];
    const serviceSections = service.detailedSections ?? [];
    const processSections = serviceSections
        .filter((section) => /phase|step|layer|track|system|method|d[1-4]/i.test(section.title))
        .slice(0, 4);
    const processTitles = new Set(processSections.map((section) => section.title));
    const detailSections = serviceSections.filter((section) => !processTitles.has(section.title));
    const benefitIcons = [Search, ShieldCheck, Target, CalendarCheck, FileCheck, CheckCircle2];
    const processIcons = [Search, ClipboardCheck, ShieldCheck, CalendarCheck];
    const isChecklistSection = (title: string) => /sign|checklist|what to do|identify|need|right now|prevention/i.test(title);

    const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const message = encodeURIComponent([
            `Hi, I want to book ${service.title} in Varanasi.`,
            `Name: ${form.get("name")}`,
            `Phone: ${form.get("phone")}`,
            `Area: ${form.get("area")}`,
            `Property: ${form.get("property")}`,
            `Message: ${form.get("message") || "Not provided"}`,
        ].join("\n"));

        window.open(`https://wa.me/917001664727?text=${message}`, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="min-h-screen bg-background">
            <Seo
                title={service.seoTitle}
                description={service.seoDescription}
                path={servicePath}
                jsonLd={[serviceJsonLd(service.title, service.seoDescription, servicePath), faqJsonLd(serviceFaqs)]}
            />
            <Header />
            <main className="pt-20">
                {/* Breadcrumb & Hero */}
                <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,hsl(var(--primary)/0.08),hsl(var(--background))_42%,hsl(var(--accent)))]">
                    <div className="absolute inset-x-0 top-0 h-24 bg-primary/5" aria-hidden="true" />
                    <div className="container relative z-10 mx-auto px-4 py-8 sm:py-10 md:py-14 lg:py-16">
                        <Link to="/services" className="mb-6 inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Services
                        </Link>

                        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-12">
                            <div className="min-w-0">
                                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                                    <MapPin className="h-4 w-4 shrink-0" />
                                    <span className="truncate">Varanasi pest control service</span>
                                </div>

                                <div className="flex gap-4">
                                    <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary sm:flex">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <div className="min-w-0">
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="max-w-full break-words font-heading text-2xl font-bold leading-tight text-foreground [overflow-wrap:anywhere] sm:text-4xl lg:text-5xl"
                                        >
                                            {service.title} in Varanasi
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
                                        >
                                            {service.shortDesc}
                                        </motion.p>
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-2 sm:grid-cols-3 sm:gap-3">
                                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-sm font-semibold text-foreground shadow-sm">
                                        <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
                                        4.9 rated locally
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-sm font-semibold text-foreground shadow-sm">
                                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                                        Same-day inspection
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-sm font-semibold text-foreground shadow-sm">
                                        <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                                        Approved methods
                                    </div>
                                </div>

                                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                    <a href="tel:+917001664727" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto">
                                        <Phone className="h-4 w-4" />
                                        Call Now
                                    </a>
                                    <a href="#book-inspection" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-background px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/5 sm:w-auto">
                                        Book Inspection
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="min-w-0">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                    <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-accent shadow-card">
                                        <img
                                            src={serviceImages[0]}
                                            alt={`${service.title} service in Varanasi`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    {serviceImages.slice(1).map((image, index) => (
                                        <div key={image} className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-accent shadow-sm">
                                            <img
                                                src={image}
                                                alt={`${service.title} treatment work in Varanasi ${index + 2}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-heading text-base font-bold text-foreground">Free inspection and quote</p>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Technicians check the site first, then recommend the right treatment plan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="px-4 py-8 sm:px-6 md:py-14 lg:px-8 lg:py-16">
                    <div className="mx-auto w-full max-w-[1400px]">
                        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">

                            <div className="min-w-0">
                                <div className="mb-8 rounded-lg border border-border bg-card p-4 shadow-card sm:p-5 md:mb-12 md:p-8">
                                    <div className="mb-4 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between md:mb-6 md:pb-5">
                                        <div>
                                            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                                                <ClipboardCheck className="h-4 w-4" />
                                                Service overview
                                            </div>
                                            <h2 className="break-words font-heading text-xl font-bold leading-tight text-foreground [overflow-wrap:anywhere] sm:text-2xl md:text-3xl">Comprehensive Treatment</h2>
                                        </div>
                                        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:flex">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <div className="grid gap-3 md:grid-cols-[1fr_1fr] md:gap-4">
                                        {service.content.map((paragraph, idx) => (
                                            <p
                                                key={idx}
                                                className={`rounded-lg border border-border/70 p-3 text-left text-sm leading-relaxed text-muted-foreground sm:p-4 sm:text-base ${idx === 0 ? "bg-primary/5 md:col-span-2 md:text-lg" : "bg-background"}`}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8 md:mb-12">
                                    <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary md:mb-6">
                                        <ShieldCheck className="h-4 w-4" />
                                        Key benefits
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3">
                                        {service.benefits.map((benefit, idx) => {
                                            const BenefitIcon = benefitIcons[idx % benefitIcons.length];
                                            return (
                                                <div key={benefit} className="flex gap-3 rounded-lg border border-border bg-card p-3 shadow-sm transition-colors hover:border-primary/40 sm:p-4 md:block md:p-5">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary md:mb-4 md:h-10 md:w-10">
                                                        <BenefitIcon className="h-5 w-5" />
                                                    </div>
                                                    <p className="break-words text-sm font-semibold leading-relaxed text-foreground">{benefit}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {processSections.length > 0 && (
                                    <div className="mb-8 rounded-lg bg-accent p-4 sm:p-5 md:mb-12 md:p-8">
                                        <div className="mx-auto mb-5 max-w-2xl text-left sm:text-center md:mb-8">
                                            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                                                <Target className="h-4 w-4" />
                                                Our process
                                            </div>
                                            <h3 className="break-words font-heading text-xl font-bold leading-tight text-foreground [overflow-wrap:anywhere] sm:text-2xl md:text-3xl">How We Handle {service.title}</h3>
                                        </div>
                                        <div className="space-y-3 md:space-y-4">
                                            {processSections.map((section, idx) => {
                                                const ProcessIcon = processIcons[idx % processIcons.length];
                                                return (
                                                    <div key={section.title} className="relative overflow-hidden rounded-lg border border-border bg-background p-3 shadow-sm transition-colors duration-200 hover:border-primary/35 sm:p-4 md:p-5">
                                                        <div className="grid gap-3 md:grid-cols-[92px_minmax(0,1fr)] md:items-start md:gap-4">
                                                            <div className="flex items-center gap-3 md:block">
                                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground md:mb-3">
                                                                    <ProcessIcon className="h-5 w-5" />
                                                                </div>
                                                                <span className="font-heading text-2xl font-bold leading-none text-primary/30 md:text-5xl">{String(idx + 1).padStart(2, "0")}</span>
                                                            </div>

                                                            <div className="min-w-0">
                                                                <h4 className="mb-2 break-words font-heading text-base font-bold leading-snug text-foreground [overflow-wrap:anywhere] sm:text-lg md:text-xl">{section.title}</h4>
                                                                {section.body && <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{section.body}</p>}
                                                            </div>

                                                        </div>
                                                        {section.items && (
                                                            <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:ml-[108px] md:mt-4">
                                                                {section.items.map((item) => (
                                                                    <li key={item} className="flex gap-2 rounded-lg border border-primary/10 bg-primary/5 p-3 text-sm leading-relaxed text-muted-foreground">
                                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                                        <span className="break-words">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8 space-y-4 md:mb-12 md:space-y-5">
                                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                                        <FileCheck className="h-4 w-4" />
                                        Treatment details
                                    </div>
                                    {detailSections.map((section) => {
                                        const checklist = Boolean(section.items?.length) && isChecklistSection(section.title);
                                        return (
                                            <div key={section.title} className="rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5 md:p-6">
                                                <div className="mb-4 flex gap-3">
                                                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-9 md:w-9">
                                                        {checklist ? <AlertTriangle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h3 className="break-words font-heading text-lg font-bold leading-snug text-foreground [overflow-wrap:anywhere] sm:text-xl md:text-2xl">{section.title}</h3>
                                                        {section.body && <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-3 md:text-lg">{section.body}</p>}
                                                    </div>
                                                </div>
                                                {section.items && (
                                                    checklist ? (
                                                        <div className="grid gap-2 sm:grid-cols-2 md:gap-3">
                                                            {section.items.map((item) => (
                                                                <div key={item} className="flex gap-2 rounded-lg border border-primary/15 bg-primary/5 p-3 text-sm leading-relaxed text-foreground md:gap-3">
                                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                                    <span className="break-words">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <ul className="space-y-2 md:space-y-3">
                                                            {section.items.map((item) => (
                                                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                                                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                                                    <span className="break-words">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {service.packages && (
                                    <div className="mb-8 overflow-hidden rounded-lg border border-border md:mb-12">
                                        <div className="bg-primary px-5 py-4">
                                            <h3 className="break-words font-heading text-lg font-bold text-primary-foreground sm:text-xl">Pricing and Packages</h3>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full min-w-[760px] text-sm">
                                                <thead className="bg-accent text-left">
                                                    <tr>
                                                        <th className="px-5 py-3 font-semibold">Package</th>
                                                        <th className="px-5 py-3 font-semibold">Frequency</th>
                                                        <th className="px-5 py-3 font-semibold">Best For</th>
                                                        <th className="px-5 py-3 text-right font-semibold">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {service.packages.map((pkg) => (
                                                        <tr key={pkg.name} className="border-t border-border">
                                                            <td className="px-5 py-4 font-semibold text-foreground">{pkg.name}</td>
                                                            <td className="px-5 py-4 text-muted-foreground">{pkg.frequency}</td>
                                                            <td className="px-5 py-4 text-muted-foreground">{pkg.bestFor}</td>
                                                            <td className="px-5 py-4 text-right">
                                                                <a href="#book-inspection" className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/5">
                                                                    Select
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8 rounded-lg bg-accent p-4 sm:p-5 md:mb-12 md:p-8">
                                    <div className="mx-auto mb-5 max-w-2xl text-left sm:text-center md:mb-6">
                                        <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">Frequently Asked Questions</h3>
                                    </div>
                                    <Accordion type="single" collapsible defaultValue="faq-0" className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-border bg-background">
                                        {serviceFaqs.map((faq, idx) => (
                                            <AccordionItem key={faq.question} value={`faq-${idx}`} className="border-border px-4">
                                                <AccordionTrigger className="gap-4 text-left font-heading text-sm font-semibold text-foreground hover:text-primary hover:no-underline sm:text-base">
                                                    <span className="break-words [overflow-wrap:anywhere]">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="break-words text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.answer}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>

                                <div id="book-inspection" className="scroll-mt-28 rounded-lg border border-primary/20 bg-primary/5 p-4 sm:p-5 md:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
                                        <div>
                                            <h4 className="mb-2 break-words font-heading text-xl font-bold text-foreground [overflow-wrap:anywhere] sm:text-2xl">Book {service.title} in Varanasi</h4>
                                            <p className="text-muted-foreground">Same-day service is available for urgent infestations.</p>
                                        </div>
                                        <a href="tel:+917001664727" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto">
                                            <Phone className="h-4 w-4" />
                                            Call Now
                                        </a>
                                    </div>
                                    <form onSubmit={handleBookingSubmit} className="grid md:grid-cols-2 gap-4">
                                        <input name="name" required placeholder="Name" className="min-w-0 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                                        <input name="phone" required placeholder="Phone number" className="min-w-0 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                                        <input name="area" required placeholder="Area in Varanasi" className="min-w-0 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                                        <select name="property" required className="min-w-0 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary">
                                            <option value="">Property type</option>
                                            <option>Apartment</option>
                                            <option>Independent House</option>
                                            <option>Office</option>
                                            <option>Restaurant / Shop</option>
                                            <option>Other</option>
                                        </select>
                                        <textarea name="message" placeholder="Tell us what pest activity you noticed" className="min-h-28 min-w-0 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary md:col-span-2" />
                                        <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:col-span-2">
                                            Send Booking Request
                                        </button>
                                    </form>
                                    <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap">
                                        <a href="mailto:info@preemiumpestmanagementservices.com" className="inline-flex min-w-0 items-center gap-2 break-all hover:text-primary">
                                            <Mail className="h-4 w-4 shrink-0" />
                                            <span>info@preemiumpestmanagementservices.com</span>
                                        </a>
                                        <a href="tel:+917460855879" className="inline-flex min-w-0 items-center gap-2 hover:text-primary">
                                            <Phone className="h-4 w-4 shrink-0" />
                                            +91 74608 55879
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <aside className="mt-10 space-y-6 lg:sticky lg:top-28 lg:mt-0 lg:self-start">
                                <div className="rounded-lg border border-border bg-background p-5 shadow-card sm:p-6">
                                    <h3 className="mb-4 break-words font-heading text-lg font-bold text-foreground">Related Services & Blogs</h3>
                                    <div className="space-y-3">
                                        {(service.relatedLinks ?? [
                                            { label: "All Pest Control Services", path: "/services", keyword: "pest control services" },
                                            { label: "Pest Control Blog", path: "/blog", keyword: "pest control blog" },
                                        ]).map((link) => (
                                            <Link key={link.path} to={link.path} className="block rounded-lg border border-border px-4 py-3 transition-colors hover:border-primary hover:text-primary">
                                                <span className="block break-words text-sm font-semibold">{link.label}</span>
                                                <span className="mt-1 block break-words text-xs text-muted-foreground">{link.keyword}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-lg bg-primary p-5 text-primary-foreground shadow-elevated sm:p-6">
                                    <h3 className="font-heading text-xl font-bold mb-3">Free Inspection</h3>
                                    <p className="text-sm text-primary-foreground/85 leading-relaxed mb-5">
                                        Stop sharing your home with uninvited pests. Call PREEMIUM for a Varanasi site inspection and quote.
                                    </p>
                                    <a href="tel:+917001664727" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-primary hover:bg-white/90 transition-colors">
                                        <Phone className="h-4 w-4" />
                                        +91 70016 64727
                                    </a>
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

export default ServiceDetail;
