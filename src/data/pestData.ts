// Dedicated pest images from assets/animals
import antImg from "@/assets/animals/ants.jpg";
import bedbugImg from "@/assets/animals/bed_bugs.jpg";
import cockroachImg from "@/assets/animals/cockroaches.png";
import crawlingInsectImg from "@/assets/animals/crawling_insects.png";
import fabricBeetleImg from "@/assets/animals/fabric_beetles.jpg";
import flyImg from "@/assets/animals/flies.jpg";
import grainBeetleImg from "@/assets/animals/grain_beetles.png";
import mouseImg from "@/assets/animals/mice.jpg";
import mosquitoImg from "@/assets/animals/mosquitos.jpg";
import silverfishImg from "@/assets/animals/silverfish.jpg";
import spiderImg from "@/assets/animals/spiders.jpg";
import termiteImg from "@/assets/animals/termites.jpg";
import woodBorerImg from "@/assets/animals/wood_borers.jpg";
import ratImg from "@/assets/animals/rats.png";
import bandicootRatImg from "@/assets/animals/bandicoot_rat.png";
import birdImg from "@/assets/animals/birds.png";

export interface PestData {
    id: string;
    title: string;
    image: string;
    shortDesc: string;
    content: string[];
    benefitsTitle?: string;
    benefits: string[];
}

export const pestData: PestData[] = [
    {
        id: "termites",
        title: "Termites",
        image: termiteImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate termites from your premises.",
        content: [
            "Termites, often referred to as \"silent destroyers,\" can cause significant damage to your home or workplace by thriving discreetly in hidden areas. DIY methods, such as sprays, often fail to address termite infestations at their root, especially when dealing with large colonies. That’s why professional termite treatment from a trusted expert, such as PREEMIUM Pest Management, is essential.",
            "We offer safe, advanced, and highly effective termite treatment services across India. Our solutions are designed to eliminate Deemak (commonly known as white ants) at their source, providing long-lasting protection for your property. Using cutting-edge techniques tailored to your specific needs, our trained specialists ensure comprehensive termite removal and future prevention.",
            "Termites are social insects that live in colonies, much like ants. They are often mistaken for ants, but they belong to a different order (Isoptera). These fascinating yet destructive pests primarily feed on cellulose, an organic fiber found in wood and plant matter. This makes the wooden components of your home – such as framing, flooring, and furniture – their primary food source.",
            "There are several types of termites found in India, the most common being subterranean termites. These termites live in underground colonies and build intricate tunnel systems to reach food sources above ground. They require moisture to survive, which is why they often thrive in damp or humid environments.",
            "Termites work silently and methodically, often consuming wood from the inside out, leaving the outer surface intact. This makes infestations difficult to detect in their early stages, allowing significant damage to occur before their presence becomes apparent. Trust PREEMIUM's proven expertise to protect your valuable belongings and maintain a termite-free environment with minimal disruption."
        ],
        benefitsTitle: "Why Choose PREEMIUM for Termite Control?",
        benefits: [
            "A Legacy of Excellence in pest management bringing unmatched expertise and innovation.",
            "Adherence to Standards: We use only government-approved chemicals (CIB) and set industry standards for safe and effective control.",
            "Expert Surveys: Our technicians conduct thorough inspections using advanced technology to accurately assess infestations.",
            "Customized & Eco-Friendly Solutions tailored to your property with minimal environmental impact.",
            "Comprehensive Service & Assurance: Highly trained technicians deliver preventive and curative solutions backed by service warranties."
        ],
    },
    {
        id: "flies",
        title: "Flies",
        image: flyImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate flies from your premises.",
        content: [
            "Flies can be a nuisance when buzzing around your premise, particularly if in large numbers. However, some species of fly also pose health risks to humans. House flies transmit a wide range of diseases including salmonella, dysentery, tuberculosis, cholera and parasitic worms. In India, there is a high risk of disease transmission through flies.",
            "During emergency situations, when hygiene conditions are less than optimal, flies often are the main reason for cholera and dysentery epidemics. But even under normal conditions, children and elderly are at a greater risk of contracting more common diseases such as salmonella food poisoning from fly contaminated food.",
            "Flies spread diseases because of their breeding and feeding habits. Bacteria from where the fly usually feed on would get stuck on their mouth parts and footpads eventually spreading onto places they land on. Imagine if it’s exposed food that you are about to eat.",
            "However, there are simple ways you can identify signs of a fly infestation and take simple precautions because it has the potential to turn into a serious infestation if left uncontrolled. PREEMIUM provides effective treatments to manage and eradicate fly populations safely."
        ],
        benefitsTitle: "Fly Control Benefits",
        benefits: [
            "Prevention of severe diseases like salmonella and dysentery.",
            "Protection for vulnerable groups such as children and the elderly.",
            "Targeting of breeding and feeding sources to prevent disease transmission.",
            "Comprehensive residential and commercial hygiene protection."
        ]
    },
    {
        id: "mosquitos",
        title: "Mosquitos",
        image: mosquitoImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate mosquitos from your premises.",
        content: [
            "At best, mosquitoes can be a real nuisance, leaving itching bite marks and keeping us awake at night. The irritation caused by the bites can be quite distressing particularly for children. At worst, mosquitoes transmit a range of potentially fatal diseases. In India, the most prominent diseases spread by mosquitoes are malaria, dengue and Chikungunya as well as Japanese B encephalitis.",
            "The risk of mosquito-borne diseases is especially high in humid areas. In the more arid regions of India, mosquito infestation commonly peaks during and after the annual monsoon rainfalls. In the more tropic and humid regions, the peak of mosquito activity normally falls into the summers when high temperatures faster the reproductive cycle of mosquitoes.",
            "Mosquitoes have been in existence since the dinosaur era which is 400 million years ago. They are found close to still water, where their larvae feed and develop. They seem to be attracted to dark colours.",
            "Mosquitoes will normally bite you at dawn or dusk – mostly nocturnal. That’s when their internal clocks tell them it is feeding time. They are attracted to heat and find lactic acid alluring, thus would tend to bite people who had just exercised. Bigger people tend to attract more mosquitoes because they produce higher Carbon Dioxide and lactic acid."
        ],
        benefitsTitle: "Mosquito Management Benefits",
        benefits: [
            "Protection from dangerous diseases such as Dengue, Malaria, and Chikungunya.",
            "Disruption of the mosquito reproductive cycle and larvae development.",
            "Targeted fogging and treating of standing nearby water sources.",
            "A peaceful, bite-free environment for you and your family."
        ]
    },
    {
        id: "ants",
        title: "Ants",
        image: antImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate ants from your premises.",
        content: [
            "Ants are incredibly capable and intelligent creatures. Though generally harmless, they can be a severe nuisance when they get into your home or business premises. Their complex and cooperative societies allow them to survive and thrive in conditions that would be otherwise challenging.",
            "Did you know the total weight of all the ants in the world is the same, if not larger than all humans added together? They are capable of carrying objects 50 times their own body weight. Foraging worker ants can travel up to 200 metres from their nest and find their way back by following scent trails left by others.",
            "Each colony can hold up to half a million ants. They can all get up and go very quickly if the colony is threatened. Worker ants can live for up to 7 years, while a queen can live for up to 15 years.",
            "Having an ant infestation has several negative impacts. It can lead to food poisoning, as ants can contaminate food after foraging in unsanitary places. Ant bites, though mostly harmless, can be itchy and cause discomfort. In business premises, ant infestations look unsightly to customers, potentially leading to lost trading revenue in food-related businesses."
        ],
        benefitsTitle: "Ant Control Highlights",
        benefits: [
            "Total eradication of complex colonies and queen ants.",
            "Prevention of food contamination in kitchens and pantries.",
            "Elimination of unsightly trails in commercial and residential areas.",
            "Disruption of pheromone scent trails to prevent return."
        ]
    },
    {
        id: "cockroaches",
        title: "Cockroaches",
        image: cockroachImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate cockroaches from your premises.",
        content: [
            "Cockroach infestations in homes and businesses can lead to significant health concerns, as they are known to spread diseases such as salmonellosis and typhoid. Their droppings may trigger asthma and eczema, and the unpleasant odor they produce can contaminate food and surfaces.",
            "Cockroaches thrive in urban settings, where they feed on food, moisture, and organic materials like cardboard, glue, and even decaying animals. They can carry diseases from unsanitary conditions and transfer them to food and surfaces. For effective cockroach pest control, hiring a professional service is the best option.",
            "PREEMIUM Pest Management offers comprehensive cockroach control treatments that address all stages of their lifecycle, providing long-lasting protection. We offer expert solutions, starting from our advanced Gel treatments to complete 360-degree defense strategies. Our cockroach bait gel is placed in key areas with state-of-the-art technologies in cracks, crevices, and appliances.",
            "Our experienced and professionally trained service technicians deal with cockroaches as part of our Integrated Pest Management programme. Do not hesitate—reach out to PREEMIUM at the first sign of an infestation."
        ],
        benefitsTitle: "Why PREEMIUM for Cockroaches?",
        benefits: [
            "A legacy of excellence and innovation in urban pest management.",
            "Adherence to industry standards using only government (CIB) approved safe chemicals.",
            "Expert surveying with advanced technology and thorough initial inspections.",
            "Value-added 4D strategies (Deny Entry, Deny Shelter, Deny Food, Eliminate).",
            "Highly trained, verified, and certified service technicians."
        ]
    },
    {
        id: "bed-bugs",
        title: "Bed Bugs",
        image: bedbugImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate bed bugs from your premises.",
        content: [
            "Bed bugs are a significant problem both locally and globally. They are easily spread and difficult to treat, resulting in a rapid growth in the number of bed bug outbreaks. The key to beating this problem is to raise awareness of what to look for and to ensure bed bugs are dealt with quickly once discovered.",
            "Bed bugs feed on the blood of humans and other mammals. The primary concern is the irritation and distress caused by bed bug bites. Bed bug bites do not hurt initially; it is the itchiness that results from the body’s reaction to them that causes discomfort. Treating the bites soothes the irritation, but it can still be very distressing when there are multiple bites, which can also lead to an itchy rash or eczema.",
            "Adult Bed bugs are 5mm long. Before feeding they are a flattened oval shape and light brown, but become rounder and darker after feeding. They come out at night and are attracted to the warmth of our bodies and carbon dioxide in our breath.",
            "The most common shelter of Bed bugs is in the seams of mattresses, in crevices in the bed frame, behind furniture surrounding the bed, or where the wall meets the floor. A more established infestation is associated with dark staining of the mattress from excreta and an unpleasant scent.",
            "Bed bugs are an objectionable pest and one of the most difficult to eradicate. High levels of hygiene, deep cleaning, and the use of amateur insecticides will help to keep Bed bug numbers under control. However, professional treatment from PREEMIUM using fast, effective, and safe methods will be strictly required to eradicate the infestation completely."
        ],
        benefitsTitle: "Bed Bug Eradication Features",
        benefits: [
            "Comprehensive inspection of mattresses, seams, and furniture crevices.",
            "Targeted multi-stage treatments that break the stubborn bed bug reproductive cycle.",
            "Safe procedures protecting the health of your family and pets.",
            "Expert advice on preventing bed bugs from traveling home with luggage."
        ]
    },
    {
        id: "silverfish",
        title: "Silverfish",
        image: silverfishImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate silverfish from your premises.",
        content: [
            "Besides being a nuisance in your home, silverfish have destructive feeding habits. They can cause extensive problems by damaging valuable books, photographs, paintings, plaster, and other household items containing starch or cellulose.",
            "This nocturnal and discreet pest can cause an infestation to go unnoticed for a long period of time until substantial damage has been done. Silverfish can also survive in most environments but thrive in conditions of high humidity and can often be found in dark, damp areas such as kitchens, bathrooms, basements, and attics.",
            "In small numbers, silverfish bugs do not really cause a problem, but a large infestation can lead to a serious issue for your property or business. PREEMIUM targets these pests at their source, managing humidity conditions and deploying specialized targeted treatments."
        ],
        benefitsTitle: "Silverfish Control Benefits",
        benefits: [
            "Protection of valuable documents, books, paintings, and cellulose materials.",
            "Targeted treatment in high-humidity areas like basements and bathrooms.",
            "Elimination of discreet, nocturnal populations before damage occurs.",
            "Long-term moisture and environmental management advice."
        ]
    },
    {
        id: "grain-beetles",
        title: "Grain Beetles",
        image: grainBeetleImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate grain beetles from your premises.",
        content: [
            "Grain beetles are technically known as stored product insects, often found damaging and contaminating raw materials used in food at homes or businesses. Some common foods infested by them are grains, cereals, dried fruits, and seeds.",
            "These pests are a health hazard to both homes and businesses like food processing plants, restaurants, and stores. They can cause enormous economic losses through their damage and contamination of food products.",
            "Identifying and removing the source of the infestation is a critical part of effectively controlling these pests. In particular, businesses like food processing or food storage can greatly benefit from PREEMIUM's ongoing professional integrated pest management programme for effective and long term protection against grain beetles."
        ],
        benefitsTitle: "Grain Beetle Solutions",
        benefits: [
            "Protection of commercial and residential stored food products.",
            "Prevention of massive economic loss and raw material contamination.",
            "Ongoing, integrated pest management programs for food processing plants.",
            "Strict adherence to food safety and hygiene regulations."
        ]
    },
    {
        id: "fabric-beetles",
        title: "Fabric Beetles",
        image: fabricBeetleImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate fabric beetles from your premises.",
        content: [
            "Fabric beetles feed on natural protein (keratin). This can be found in any fabric material with animal origin, including wool, silk, cotton, leather, and feathers.",
            "When these pests are left untreated in your property, they can cause serious damages to historic artefacts, clothing, carpets, and trigger the contamination of foodstuffs and fabric-based goods.",
            "The presence of a fabric beetle infestation in a business can lead to product recalls, loss of valuable assets, and a damaged reputation. PREEMIUM offers dedicated treatments to protect your textiles and valuable fabrics safely."
        ],
        benefitsTitle: "Fabric Pest Control Highlights",
        benefits: [
            "Prevention of irreversible damage to carpets, clothing, and historic artifacts.",
            "Protection of valuable business assets against keratin-feeding pests.",
            "Use of safe treatments that will not damage delicate textiles or fabrics.",
            "Comprehensive facility auditing and proactive protective measures."
        ]
    },
    {
        id: "crawling-insects",
        title: "Crawling Insects",
        image: crawlingInsectImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate crawling insects from your premises.",
        content: [
            "Insects are thought to represent around 90% of the diversity of animal life on earth. There are over a million currently described species and an estimated 10 million species in total.",
            "The majority of insects have wings in the adult stage and move around mainly by flying. Some insects, such as cockroaches, have wings but are reluctant flyers, preferring to crawl to find food and shelter. Termites and ants are mainly wingless, so most of their behaviour involves crawling, and they only produce temporary winged reproductives during a short breeding season.",
            "Other insects, such as fleas and lice, are completely wingless and can only crawl or jump to move around. Crawling insects are perceived as pests mainly due to their creeping behaviour into our living spaces, contaminating surfaces, and inducing fear.",
            "PREEMIUM Pest Management provides wide-spectrum treatments designed to build a protective barrier around your property, keeping all types of nuisance crawling insects definitively out."
        ],
        benefitsTitle: "Broad Spectrum Crawling Insect Control",
        benefits: [
            "Establishment of robust indoor and outdoor perimeter protective barriers.",
            "Elimination of overlapping pest infestations.",
            "Prevention of surface contamination and hygienic disruption.",
            "Long-lasting residual effects to keep pests out continuously."
        ]
    },
    {
        id: "ticks",
        title: "Ticks",
        image: bedbugImg, // Using same macro image per original setup
        shortDesc: "Professional eradication and prevention services tailored to eliminate ticks from your premises.",
        content: [
            "Ticks are parasites found on pets' bodies and survive by feeding on the blood of other living beings. Ticks can latch onto your pet’s fur, and your pet can carry them back to your home. After this, ticks are capable of multiplying rapidly in your house.",
            "They pose a severe threat to you and your pet. Ticks can transmit numerous diseases to humans, including Kyasanur forest disease (KFD), Crimean-congo hemorrhagic fever (CCHF), Lyme disease (LD), and Rickettsial infections.",
            "PREEMIUM’s Integrated Tick Management (ITM) can help you eliminate ticks in your home. Effective tick management essentially requires an integrated approach based on Exclusion, Restriction, Destruction, and Monitoring.",
            "Our ITM service involves inspecting the infested areas, scanning the spread, and applying humane spray treatments. It is done for the structure while working alongside veterinary care for the animals. ITM is entirely safe for humans and animals, ensuring no harm while providing complete eradication."
        ],
        benefitsTitle: "Integrated Tick Management (ITM) Features",
        benefits: [
            "Protection from dangerous diseases like Lyme disease and KFD.",
            "Total structural scanning to eliminate ticks multiplying inside your home.",
            "Humane spray treatments completely safe for humans and beloved pets.",
            "Comprehensive multi-step process: Exclusion, Restriction, Destruction, Monitoring."
        ]
    },
    {
        id: "rats",
        title: "Rats",
        image: ratImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate rats from your premises.",
        content: [
            "Rats cause an immense amount of damage. As the teeth of rodents continue to grow over their lifetime, they need to gnaw on hard substances such as lead, plastic pipes, insulation material, and electric wiring. This habit increases the risk of short circuits and devastating structural fires.",
            "In addition to this, they transmit a number of dangerous diseases such as Salmonella, Leptospirosis (Weil's disease), Tuberculosis, and even tapeworms. One single rat equals more than 25,000 droppings per year, which contain allergens that can cause acute allergic reactions.",
            "Rats are also known to introduce secondary pests, such as fleas, mites, and ticks into the premise, causing compounded issues. PREEMIUM offers highly effective eradication and exclusion plans to completely secure your environment against these agile rodents."
        ],
        benefitsTitle: "Rat Control Benefits",
        benefits: [
            "Prevention of structural fires by stopping rodents from chewing electrical wiring.",
            "Eradication of disease-carrying pests preventing Salmonella and Leptospirosis.",
            "Prevention of secondary pest introductions like fleas and mites.",
            "Total exclusion and sealing of entry points for long-term security."
        ]
    },
    {
        id: "mice",
        title: "Mice",
        image: mouseImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate mice from your premises.",
        content: [
            "Mice can multiply quickly and will do significant damage to your home, business, and furniture through their constant gnawing activities. They will also contaminate food and other materials through the droppings they leave behind.",
            "Their droppings have even been implicated as potential asthma triggers in children. Not only are mice destructive, but they have also been known to cause house fires after chewing through electrical cables.",
            "At PREEMIUM, we understand the concerns to your home, family, or business from the presence of mice. As expert controllers, we provide quick and effective services to help your property stay pest-free. With ongoing training on the latest pest control technology, treatments, and innovation, we offer the most efficient mouse control services available."
        ],
        benefitsTitle: "Mouse Control Strategies",
        benefits: [
            "Rapid population knockdown to prevent exponential breeding.",
            "Prevention of food contamination and droppings-related asthma triggers.",
            "Application of the latest trapping and tracking mechanisms.",
            "Implementation of structural defensive modifications."
        ]
    },
    {
        id: "bandicoot-rat",
        title: "Bandicoot Rat",
        image: bandicootRatImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate bandicoot rats from your premises.",
        content: [
            "The Bandicoot rat is a giant rat of southern Asia and can be up to 40cm long, including the tail. Bandicoot rats pose a significant health risk to humans, both adults and babies, as well as to our pets.",
            "The spread of many common diseases, such as Salmonella, Weil’s disease, E.coli, and TB, is attributed to Bandicoot rats. They also carry fleas, mites, and ticks and can cause acute allergic reactions.",
            "In a business context, they cause immediate loss of trust from customers, damage goods and equipment such as computers and pipes, and can lead to business closure or legal fines due to failing hygiene compliance.",
            "While amateur Do-It-Yourself (DIY) products are sometimes attempted, professional pest control is strictly required for such high-risk pests. PREEMIUM offers a free site inspection to assess the source of attraction, breeding sites, and implement targeted control solutions."
        ],
        benefitsTitle: "Bandicoot Rat Eradication",
        benefits: [
            "Specialized handling for large-scale and aggressive rodent species.",
            "Protection of industrial equipment, reputation, and operational legality.",
            "Disruption of high-risk disease and secondary parasite transmission.",
            "Rigorous inspection and targeted control across high-risk environments."
        ]
    },
    {
        id: "birds",
        title: "Birds",
        image: birdImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate birds from your premises.",
        content: [
            "Your home or business premises can make an ideal habitat for pest birds as it provides them with shelter, food, water, and a place to roost on. Once they turn your property into their home, it is quite a challenge to remove them and stop them from coming back.",
            "For example, pigeons are gregarious creatures living in flocks of anywhere between 50 and 500 birds, so a few pigeons here and there have the potential to turn into a large, uncontrollable infestation. Birds, like many other animals, are drawn to the odor of their own waste, which encourages their return.",
            "Prevent bird droppings and disturbances with our Bird Pro solutions—perfect for balconies and decorated spaces. Don't let birds damage your premises. PREEMIUM provides comprehensive, customized bird management solutions. We address all pest bird species with humane methods, preventing nesting and protecting your property from destruction.",
            "Backed by decades of expertise, our bird control specialists undergo regular training on the best technologies and processes. We prioritize safety in all our services, ensuring efficient execution with zero disruption using durable, high-quality, long-lasting materials."
        ],
        benefitsTitle: "Why Preemium For Bird Control?",
        benefits: [
            "Humane prevention methods that protect properties without harming birds.",
            "Installation of customized, durable nesting deterrents.",
            "Prevention of highly acidic and disease-carrying bird droppings.",
            "Aesthetic and discreet solutions perfect for business facades and home balconies."
        ]
    },
    {
        id: "wood-borers",
        title: "Wood Borers",
        image: woodBorerImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate wood borers from your premises.",
        content: [
            "The term ‘wood borer’ covers many types of wood boring beetles, some with wonderful names like Auger, Jewel, Stag, and Pinhole Borers. But whatever they are called, you’ll want to say goodbye to them to protect your property.",
            "Wood borers are wood-damaging insects that invade and damage structural and furniture wood based on the type and moisture content of the wood. All homes or businesses constructed of natural wood are at risk of a wood borer infestation.",
            "Adult beetles lay their eggs in wood cracks. They infest floorboards, furniture, wooden beams, and other wooden objects. Larvae burrow deep into the wood where they feed, making a maze of tunnels over several years. If left untreated, timbers within a building weaken and may lead to structural failure.",
            "Using a professional pest control service is the most effective way to address wood borer problems. PREEMIUM offers targeted injections and treatments to halt the damage instantly and preserve your wooden assets."
        ],
        benefitsTitle: "Wood Borer Treatment Benefits",
        benefits: [
            "Protection of structural timbers, preventing catastrophic building failures.",
            "Preservation of antique wooden furniture and floorboards.",
            "Deep penetrating treatments targeting larvae hiding miles inside tunnels.",
            "Expert moisture assessment to reduce future borer attractiveness."
        ]
    },
    {
        id: "spiders",
        title: "Spiders",
        image: spiderImg,
        shortDesc: "Professional eradication and prevention services tailored to eliminate spiders from your premises.",
        content: [
            "There are over 35,000 known spider species worldwide, but only a handful are considered to be dangerous, and very few species are known to cause human fatalities.",
            "Spiders are attracted to warm, dark, small spaces, like wall cracks, corners, air vents, and washrooms. However, some species prefer to stay closer to the outdoors, weaving their webs in your garden or near your outside lighting.",
            "Although most common spiders at home are not really harmful, they can be a severe nuisance because of their webbing and can induce intense fear in some people. In fact, fear of spiders (arachnophobia) can cause people to experience excessive sweating or heart trouble when they come in contact with an area near spiders or their webs.",
            "PREEMIUM Pest Management provides thorough de-webbing services alongside targeted residual sprays that deter spiders from entering and establishing nests within your property."
        ],
        benefitsTitle: "Spider Control Benefits",
        benefits: [
            "Elimination of unsightly webs providing a cleaner presentation of your home or business.",
            "Peace of mind for individuals suffering from arachnophobia.",
            "Treatment of high-ceiling and hard-to-reach commercial or residential areas.",
            "Application of long-lasting perimeter barriers to deter future entry."
        ]
    }
];
