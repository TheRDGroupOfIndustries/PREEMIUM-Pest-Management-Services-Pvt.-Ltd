import {
    Bug, Rat, TreeDeciduous, Bird, Flame, SprayCan,
    ShieldAlert, Snail, Flower2, Waves, Sparkles, Target
} from "lucide-react";

export type ServiceCategory = "Residential" | "Commercial";

export interface ServiceData {
    id: string;
    title: string;
    icon: any; // Lucide icon type
    shortDesc: string;
    category: ServiceCategory | "Both";
    content: string[];
    benefits: string[];
}

export const servicesData: ServiceData[] = [
    {
        id: "general-pest-management",
        title: "General Pest Management",
        icon: Bug,
        shortDesc: "Comprehensive treatment for ants, spiders, silverfish, cockroaches and common household pests using safe, approved chemicals.",
        category: "Both",
        content: [
            "Our General Pest Management service is designed to provide comprehensive, year-round protection against common household and commercial pests. We understand that a minor pest sighting can quickly escalate into a massive infestation, jeopardizing the health and safety of your environment.",
            "Using an Integrated Pest Management (IPM) approach, we focus on identifying the root causes of pest problems rather than simply treating the symptoms. Our licensed technicians conduct thorough inspections to locate nesting sites, entry points, and conducive conditions, before applying safe, targeted treatments.",
            "Whether it's ants trailing through your kitchen, silverfish damaging your documents, or occasional invaders disrupting your peace of mind, our customized treatment plans ensure rapid knockdown and long-lasting residual protection."
        ],
        benefits: [
            "Thorough interior and exterior inspections",
            "Safe, low-odor, and eco-friendly chemical applications",
            "Identification and sealing of potential entry points",
            "Customized treatment frequencies (monthly, bi-monthly, or quarterly)",
            "Detailed service reports with actionable prevention tips"
        ]
    },
    {
        id: "termite-management",
        title: "Termite Management",
        icon: Target,
        shortDesc: "Pre and post-construction anti-termite treatments to protect your property from structural damage.",
        category: "Both",
        content: [
            "Termites are known as 'silent destroyers' because they can severely damage the structural integrity of a building long before their presence is even noticed. Our Termite Management solutions offer robust, long-term protection for both residential homes and commercial complexes.",
            "For existing buildings, our post-construction termite treatment involves a specialized drill-fill-seal method. We inject advanced termiticides into the foundation and perimeter of your property, creating an impassable chemical barrier that eradicates existing colonies and prevents future invasions.",
            "If you are building a new property, our pre-construction anti-termite treatment is a crucial investment. We treat the soil prior to laying the foundation, ensuring that your building is safeguarded against subterranean termites from the ground up."
        ],
        benefits: [
            "Advanced drill-fill-seal methodology for existing structures",
            "Comprehensive soil treatment for pre-construction sites",
            "Use of highly effective, non-repellent termiticides",
            "Long-term warranties guaranteeing peace of mind",
            "Regular monitoring and follow-up inspections"
        ]
    },
    {
        id: "rodent-management",
        title: "Rodent Management",
        icon: Rat,
        shortDesc: "Strategic baiting, trapping, and exclusion to eliminate rodent infestations from residential premises.",
        category: "Both",
        content: [
            "Rodents, such as rats and mice, are not just a nuisance; they are severe health hazards and destructive pests. They can chew through electrical wiring, causing fire hazards, and contaminate food sources with dangerous pathogens. Our Rodent Management strategy is comprehensive and relies heavily on exclusion and intelligent baiting.",
            "Instead of merely scattering traps, our technicians perform a detailed structural analysis to identify how rodents are accessing your property. We employ a multi-line defense strategy consisting of exterior bait stations, interior trapping, and most importantly, rodent-proofing recommendations to deny them future entry.",
            "We strictly adhere to safety protocols to ensure that our baiting systems pose absolutely no risk to children, pets, or non-target wildlife. Our goal is swift eradication paired with permanent exclusion."
        ],
        benefits: [
            "Strategic placement of tamper-resistant bait stations",
            "Non-toxic trapping solutions for sensitive interior areas",
            "Comprehensive gap analysis and exclusion recommendations",
            "Safe disposal and sanitization of affected areas",
            "Proactive monitoring to prevent re-infestation"
        ]
    },
    {
        id: "fogging-service",
        title: "Fogging Service",
        icon: Sparkles,
        shortDesc: "Our proprietary 4D approach: Disrupt, Displace, Destroy, Defend for fast and long-lasting relief from flying pests.",
        category: "Both",
        content: [
            "Flying insects such as mosquitoes, flies, and gnats are more than just a nuisance—they are carriers of serious diseases like Dengue, Malaria, and Chikungunya. Conventional sprays provide only temporary relief and fail to address insects hiding in hard-to-reach areas. This is where our advanced fogging service delivers superior results.",
            "Our approach is built on four powerful pillars: Disrupt breeding and resting zones, Displace insects from concealed spaces, Destroy active adult populations, and Defend the area against reinfestation. Using ultra-low volume (ULV) fogging technology, we disperse fine mist particles that penetrate cracks, drains, vegetation, and enclosed spaces where insects thrive.",
            "The treatment is complemented by residual solutions that remain effective even after fogging, along with expert guidance on environmental hygiene and moisture control. Ideal for residential complexes, commercial spaces, warehouses, healthcare facilities, and outdoor areas, our fogging service ensures a safer, cleaner, and insect-free environment with rapid, visible results."
        ],
        benefits: [
            "Ultra-low volume (ULV) fogging for total penetration of hidden spaces",
            "Proprietary 4D approach: Disrupt, Displace, Destroy, and Defend",
            "Rapid eradication of mosquitoes, flies, and other disease-carrying insects",
            "Complementary application of residual solutions for extended protection",
            "Expert advice on moisture control and hygiene to prevent reinfestation"
        ]
    },
    {
        id: "mosquito-fly-control",
        title: "Mosquito & Fly Control",
        icon: Waves,
        shortDesc: "Larvicidal, adulticidal, and fogging treatments for effective mosquito and fly management.",
        category: "Both",
        content: [
            "Mosquitoes and flies are persistent vectors for serious diseases, including Dengue, Malaria, and Typhoid. Outbreaks of these flying insects can make outdoor spaces unusable and pose severe hygiene risks in commercial settings. Our dual-action Mosquito and Fly Control service tackles these pests at every stage of their lifecycle.",
            "We begin by identifying and treating breeding grounds with specialized larvicides, preventing the next generation of mosquitoes from ever taking flight. For adult insects, we utilize safe, targeted thermal fogging and cold cold-misting techniques.",
            "For commercial clients, specifically in the food and hospitality industries, we also integrate electronic fly killers (EFKs) and pheromone traps to maintain a fly-free environment continuously, ensuring compliance with strict health regulations."
        ],
        benefits: [
            "Source reduction through targeted larvicide application",
            "Indoor residual spraying for long-lasting protection",
            "Outdoor thermal fogging for immediate adult mosquito knockdown",
            "Installation and maintenance of Electronic Fly Killers (EFK)",
            "Customized schedules based on seasonal pest pressure"
        ]
    },
    {
        id: "bed-bug-management",
        title: "Bed Bug Management",
        icon: ShieldAlert,
        shortDesc: "Specialized heat and chemical treatments for complete elimination of bed bug infestations.",
        category: "Both",
        content: [
            "A bed bug infestation can cause immense psychological distress and physical discomfort. These elusive pests hide in the narrowest crevices of mattresses, furniture, and baseboards, emerging only at night to feed. Do-it-yourself methods are almost never effective against bed bugs.",
            "Our Bed Bug Management service employs a rigorous, multi-step process. We conduct a microscopic inspection of your premises to determine the full extent of the infestation. Depending on the severity, we deploy a combination of targeted chemical treatments and heat exposure to ensure total eradication.",
            "Because bed bug eggs are highly resistant to standard chemicals, our service inherently includes a mandatory follow-up treatment within 15 days. This guarantees that any newly hatched nymphs are destroyed, breaking the lifecycle permanently and restoring your peace of mind."
        ],
        benefits: [
            "Meticulous inspection of all potential hiding spots",
            "Synergistic use of deep-penetrating sprays and dusts",
            "Disruption of the bed bug lifecycle across all stages",
            "Mandatory follow-up treatments for guaranteed eradication",
            "Guidance on pre-treatment preparation to maximize effectiveness"
        ]
    },
    {
        id: "commercial-fumigation",
        title: "Commercial Fumigation",
        icon: Flame,
        shortDesc: "Warehouse, commodity, and container fumigation compliant with FSSAI and export standards.",
        category: "Commercial",
        content: [
            "In the world of global trade and bulk storage, pests like weevils, beetles, and moths can decimate stored commodities, leading to massive financial losses and regulatory penalties. Our Commercial Fumigation services provide rapid, total-penetration pest eradication for critical assets.",
            "We specialize in the fumigation of warehouses, silos, shipping containers, and wooden packaging materials (ISPM-15 compliance). Using highly controlled lethal gases under strict supervision, we ensure that every life stage of the pest—from egg to adult—is destroyed without leaving harmful residues.",
            "Safety is our paramount concern. Our highly trained, certified fumigators adhere to international safety standards, utilizing state-of-the-art monitoring equipment to ensure the complete aeration of the site before it is declared safe for re-entry, guaranteeing compliance with FSSAI and export regulations."
        ],
        benefits: [
            "Total eradication of all life stages of stored product insects",
            "ISPM-15 compliant treatments for wooden packaging and exports",
            "Zero pesticide residue left on treated commodities",
            "Strict adherence to international safety protocols",
            "Comprehensive certification and documentation for regulatory compliance"
        ]
    },
    {
        id: "bird-management",
        title: "Bird Management Solutions",
        icon: Bird,
        shortDesc: "Humane bird deterrent systems including netting, spikes, wire systems, and ultrasonic devices.",
        category: "Commercial",
        content: [
            "Pigeons and other nuisance birds can cause significant damage to building facades, HVAC systems, and solar panels. Furthermore, bird droppings are highly acidic and harbor hazardous fungi that can cause severe respiratory diseases. Our Bird Management Solutions safely and humanely resolve these conflicts.",
            "We do not harm the birds; instead, we alter the environment to make it inhospitable for roosting and nesting. Our technicians install nearly invisible, high-tensile polyethylene netting to block access to balconies and ducts, and utilize humane anti-roosting spikes on ledges and parapets.",
            "For complex architectural structures, we also offer electric track deterrents and localized ultrasonic devices. Every installation is customized to the specific contours of your building, ensuring an aesthetically pleasing result that provides permanent relief from avian pests."
        ],
        benefits: [
            "Installation of UV-stabilized, high-durability bird netting",
            "Strategic placement of humane, blunt-tipped polycarbonate spikes",
            "Aesthetic integration that doesn't ruin your building's facade",
            "Prevention of acidic damage and health hazards from droppings",
            "Long-term, maintenance-free solutions"
        ]
    },
    {
        id: "snake-bee-management",
        title: "Snake & Bee Management",
        icon: SprayCan,
        shortDesc: "Safe capture, relocation, and preventive measures for snakes, bees, and wasps.",
        category: "Commercial",
        content: [
            "The sudden appearance of a venomous snake or the formation of a large beehive poses an immediate emergency that requires highly specialized intervention. Attempting to handle these situations without professional training can lead to severe injury or fatal consequences.",
            "Our rapid-response Emergency Management team is equipped with specialized protective gear and handling tools. For bees and wasps, we perform safe hive removals, usually during the evening when the insects are less active, using targeted knockdown sprays and meticulous physical removal of the comb to prevent secondary infestations.",
            "For snakes, our trained handlers employ secure capture techniques to safely secure the reptile without harming it. Whenever possible, captured native snakes and bees are relocated to natural habitats away from human populations, balancing safety with ecological responsibility."
        ],
        benefits: [
            "Rapid response teams for emergency situations",
            "Use of professional-grade protective equipment",
            "Safe, physical removal of entire hives to prevent re-establishment",
            "Humane capture and relocation of snakes and wildlife",
            "Application of repellents to heavily trafficked perimeter areas"
        ]
    },
    {
        id: "spider-lizard-control",
        title: "Spider & Lizard Control",
        icon: Snail,
        shortDesc: "Targeted treatment programs for spider web removal and lizard habitation prevention.",
        category: "Commercial",
        content: [
            "While mostly harmless, an abundance of spiders and lizards can make a property look unkempt and trigger intense phobias among employees, customers, or family members. These predators are often drawn to a property by an underlying insect problem.",
            "Our targeted control program addresses both the predators and their food source. We begin with the physical removal of all spider webs and egg sacs using specialized extending equipment. This is followed by a perimeter spray utilizing micro-encapsulated insecticides that provide a long-lasting barrier.",
            "For lizards, we focus heavily on habitat modification—sealing structural cracks, advising on lighting changes to reduce the insects that lizards feed on, and applying specific repellents in high-activity areas to encourage them to migrate away from your premises."
        ],
        benefits: [
            "Thorough physical removal of existing spider webs and egg sacs",
            "Treatment of high-ceiling and hard-to-reach commercial areas",
            "Application of perimeter barriers to deter entry",
            "Eradication of the primary food sources attracting lizards",
            "Long-lasting residual treatments for ongoing protection"
        ]
    },
    {
        id: "weed-control",
        title: "Weed Control & Vegetation",
        icon: TreeDeciduous,
        shortDesc: "Industrial vegetation management for factories, railways, solar farms, and open areas.",
        category: "Commercial",
        content: [
            "Overgrown vegetation and invasive weeds are more than just an eyesore; they are operational hazards. In industrial settings, weeds can obscure visibility, restrict access to vital equipment, pose severe fire risks during dry seasons, and provide ideal harborage for rodents and snakes.",
            "Our Industrial Weed Control service utilizes powerful, industrial-grade herbicides. Depending on the requirement, we apply selective herbicides to manage broadleaf weeds without harming adjacent grasses, or non-selective, long-residual herbicides for total vegetation control (bare-ground treatments) in crucial operational areas like substations or railway tracks.",
            "We design customized, season-long vegetation management schedules. Our licensed applicators ensure that all chemical treatments are applied strictly according to environmental safety standards, preventing runoff and protecting local water sources while maintaining a safe, clean industrial site."
        ],
        benefits: [
            "Total vegetation control (bare-ground) for critical infrastructure",
            "Drastic reduction in fire hazards and pest harborage",
            "Use of advanced, rain-fast industrial herbicides",
            "Improved visibility and safety for site operations",
            "Long-lasting residual control requiring fewer applications"
        ]
    },
    {
        id: "garden-pest-management",
        title: "Garden Pest Management",
        icon: Flower2,
        shortDesc: "Landscape and horticultural pest treatments for corporate campuses and residential societies.",
        category: "Commercial",
        content: [
            "Maintaining a pristine landscape in a corporate campus or premium residential society is a significant investment. However, ornamental plants, lawns, and shade trees are constantly under threat from a variety of horticultural pests, including aphids, mealybugs, whiteflies, and fungal diseases.",
            "Our Garden Pest Management service goes beyond simple spraying. We employ an Integrated Landscape Management approach. Our horticulturally trained technicians identify specific plant pathogens and insect species, enabling us to prescribe highly targeted treatments that eradicate the pests while preserving the health of the plants and beneficial insects like bees and butterflies.",
            "We offer systemic root treatments, foliar sprays, and specialized soil conditioning to boost the natural immunity of your landscape. By keeping your gardens lush, healthy, and pest-free, we protect the aesthetic and financial value of your property assets."
        ],
        benefits: [
            "Targeted treatments for specific horticultural pests and diseases",
            "Preservation of beneficial insects and soil health",
            "Systemic treatments for long-term plant protection",
            "Customized care plans for ornamental plants and large turf areas",
            "Expert diagnosis of complex plant pathogens by trained professionals"
        ]
    }
];
