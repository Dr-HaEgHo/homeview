import fb from "@/assets/icons/fb.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import ig from "@/assets/icons/ig.svg";
import wa from "@/assets/icons/wa.svg";
import yt from "@/assets/icons/yt.svg";
import heroBg from "@/assets/images/hero-bg.png";
import hbg1 from "@/assets/images/hbg1.png"
import hbg2 from "@/assets/images/hbg2.png"
import hbg3 from "@/assets/images/hbg3.png"
import hbg4 from "@/assets/images/hbg4.png"
import mera from "@/assets/icons/mera.svg";
import mira from "@/assets/icons/mira.svg";
import damac from "@/assets/icons/damac.svg";
import sobha from "@/assets/icons/sobha.svg";
import ora from "@/assets/icons/ora.svg";
import nakheel from "@/assets/icons/nakheel.svg";
import apartment from "@/assets/images/apartment.png";
import villa from "@/assets/images/villa.png";
import townhouse from "@/assets/images/townhouse.png";
import commercial from "@/assets/images/commercial.png";
import building from "@/assets/icons/building.svg";
import calc from "@/assets/icons/calc.svg";
import map from "@/assets/icons/map.svg";
import trust from "@/assets/icons/trust.svg";
import p1 from "@/assets/images/1.png";
import p2 from "@/assets/images/2.png";
import p3 from "@/assets/images/3.png";
import p4 from "@/assets/images/4.png";
import b0 from "@/assets/images/b0.png";
import b1 from "@/assets/images/b1.png";
import b2 from "@/assets/images/b2.png";
import b3 from "@/assets/images/b3.png";
import b4 from "@/assets/images/b4.png";
import b5 from "@/assets/images/b5.png";
import property from "@/assets/images/property.png";

export const links = [
  { name: "Home", href: "/" },
  { name: "News and Insights", href: "/news" },
  { name: "Luxury Properties", href: "/properties" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export const socialLinks = [
  { name: "fb", image: fb, link: "https://www.facebook.com/share/1EeKqyMh5T/?mibextid=wwXIfr" },
  { name: "ig", image: ig, link: "https://www.instagram.com/homeviewdubai?igsh=N3l6NmV1azU1NXJp" },
  { name: "tiktok", image: tiktok, link: "https://www.tiktok.com/@homeviewdubai?_t=ZS-8yJuA214dcL&_r=1" },
  { name: "wa", image: wa, link: "https://wa.me/0557303207" },
  { name: "yt", image: yt, link: "https://youtube.com/@homeviewdubai?si=5MMJ0wt9G4Zw4lDl" },
];

export const slides = [
  { image: heroBg }, 
  { image: hbg1 }, 
  { image: hbg2 },
  { image: hbg3 },
  { image: hbg4 },
];

export const partners = [
  { image: mira },
  { image: damac },
  { image: mera },
  { image: nakheel },
  { image: sobha },
  { image: ora },
];

export const propertyTypes = [
  { name: "Apartments", filter: "apartments", image: apartment, count: 57 },
  { name: "Villas", filter: "villas", image: villa, count: 32 },
  { name: "Town House", filter: "town_houses", image: townhouse, count: 14 },
  { name: "Commercial", filter: "commercial", image: commercial, count: 20 },
];

export const whychoose = [
  {
    title: "Trusted by Thousands",
    description:
      "Our reputation is built on trust, with thousands of satisfied clients who have chosen us for their real estate needs.",
    filter: "apartment",
    image: trust,
  },
  {
    title: "Premium Properties",
    description:
      "Explore a diverse selection of properties, from luxury homes to commercial spaces, tailored to fit every preference",
    filter: "villa",
    image: building,
  },
  {
    title: "Financing Made Easy",
    description:
      "Simplified financing solutions and flexible options to help you secure your dream property without the hassle.",
    filter: "townhouse",
    image: calc,
  },
  {
    title: "Prime Locations",
    description:
      "Access the best neighborhoods and thriving communities with unmatched investment opportunities.",
    filter: "commercial",
    image: map,
  },
];

export const metrics = [
  { title: "15+", description: "YEARS OF EXPERIENCE" },
  { title: "15%", description: "PROPERTY VALUE GROWTH" },
  { title: "120+", description: "SUCCESSFUL INVESTMENTS" },
  { title: "500+", description: "PROPERTIES SOLD" },
];

export const priceOptions = [
  "< 500K AED",
  "500K - 1M AED",
  "1M - 5M AED",
  "5M - 10M AED",
  "10M - 20M AED",
  "> 20M AED",
];
export const timeline = [
  "< 3 months",
  "3 - 6 months",
  "6 - 12 months",
  "> 12 months",
];
export const propertyTypeOptions = [
  "Apartments",
  "Villas",
  "Town Houses",
  "Commercial",
];

export const testimonials = [
  {
    image: p1, // Replace with actual image import or path
    text: "I had an amazing experience with Homeview Dubai. The team was professional, transparent, and extremely helpful throughout my property search. They found me the perfect apartment in Downtown Dubai within my budget. Highly recommend them to anyone looking for a hassle-free real estate experience!",
    name: "Sarah Ahmed",
    location: "Dubai, Home Owner",
  },
  {
    image: p2,
    text: "Homeview Dubai made buying my first home so easy and stress-free. They guided me from the very first viewing to final paperwork. What stood out most was their honesty and knowledge of the Dubai market. I couldn’t be happier with my new villa in Arabian Ranches!",
    name: "Fatima Al Mansoori",
    location: "Dubai, Home Owner",
  },
  {
    image: p3,
    text: "I was relocating to Dubai for work and needed a place quickly. Homeview Dubai not only helped me find a lovely apartment in Business Bay but also handled everything remotely. Their communication was excellent, and the process was super smooth. Thank you for your professionalism!",
    name: "Aisha Al-Farsi",
    location: "Dubai, Home Owner",
  },
  {
    image: p4,
    text: "The team at Homeview Dubai truly goes above and beyond! They understood my needs right away and showed me great options across Dubai Marina. Within a week, I had my dream home with a sea view. I’m so grateful for their efficiency and kindness!",
    name: "Maria Fernandez",
    location: "Dubai, Home Owner",
  },
];

// FAQ data array
export const faqItems = [
  {
    question: "What documents do I need for property purchase?",
    answer:
      "For property purchase in Dubai, you'll need a valid passport, Emirates ID (for residents), salary certificate, bank statements, and no-objection certificate from your employer. We'll guide you through the complete documentation process.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "You can schedule a property viewing by contacting us via our website, phone, or email. Our team will arrange a convenient time for you.",
  },
  {
    question: "Do you offer financing assistance?",
    answer:
      "Yes, we offer financing assistance and can connect you with trusted financial partners to help you secure your property.",
  },
  {
    question: "What are the fees involved in property purchase?",
    answer:
      "Fees typically include registration, agency commission, and government charges. We'll provide a detailed breakdown for your specific case.",
  },
  {
    question: "What markets do your indicators cover?",
    answer:
      "Our indicators cover Dubai and other major UAE real estate markets.",
  },
];

export const newsLinks = [
  { name: "All", route: "all" },
  { name: "Blogs", route: "blog" },
  { name: "Podcasts", route: "podcast" },
  { name: "Careers", route: "career" },
];

export const newsItems = [
  {
    id: 0,
    image: b0,
    title: "Dubai Real Estate Market Outlook 2025: Record Growth Expected",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Sep 12 2025",
  },
  {
    id: 1,
    image: b1,
    title: "Golden Visa Investment Guide: Everything You Need to Know",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Sep 7 2025",
  },
  {
    id: 2,
    image: b2,
    title: "Off-Plan Properties: A Smart Investment Strategy",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 3,
    image: b3,
    title: "Luxury Property Market Sees Unprecedented Demand",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 4,
    image: b4,
    title: "New Mortgage Rules Make Property Investment More Attractive",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 5,
    image: b5,
    title: "Sustainable Living: Green Buildings Shape Dubai’s Future",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Sep 7 2025",
  },
  {
    id: 6,
    image: b2,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 7,
    image: b1,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 8,
    image: b3,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 9,
    image: b3,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 10,
    image: b1,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 11,
    image: b4,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
  {
    id: 12,
    image: b2,
    title:
      "Unlocking Success Episode 16: Why Adrian Chabada left and came back to host & host",
    content:
      "Dubai's real estate sector is poised for exceptional growth in 2025, with new developments and foreign investment driving unprecedented demand. Industry experts predict a 15% increase in property values across key areas.",
    date: "Aug 27 2025",
  },
];

export const properties = [
  {
    id: 1,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 2,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Aljazeera Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 3,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Shayhir Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 4,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 5,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 6,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 7,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
  {
    id: 8,
    image: property,
    featured: true,
    tags: ["1 BHK", "TOWN HOUSE"],
    title: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
    subtitle: "Nad Al Sheba Gardens Phase 8",
    beds: 3,
    baths: 3,
    garages: 3,
    price: 5000000,
    currency: "AED",
  },
];

export const features = [
  "3 spacious bedrooms, 4 bathrooms",
  "Brand new, vacant on transfer",
  "Balcony & covered parking",
  "Townhouse layout, low floor",
  "Secure and family-friendly community",
  "Shared Pool, Gym, and Club House Access",
  "Nearby Retail and Dining Options",
  "Property reference code: LEA252986",
];

const propertyData = {
  price: 150000,
  currency: "AED",
  tags: ["Vacant Now", "Brand New", "Bright and Spacious"],
  title: "3 bedroom townhouse to rent in Nara, The Valley, Dubai",
  subtitle: "Nad Al Sheba Gardens Phase 8",
  type: "Town House",
  location: "Nad Al Sheba Gardens Phase 8 by Meraas in Dubai",
  community: "The Valley",
  isFeatured: true,
  city: "Dubai",
  class: "3 BHK",
  details: {
    bua: 1904,
    plot: 1904,
    bedrooms: 3,
    bathrooms: 4,
    garage: 1,
  },
  description: `haus & haus is proud to present this brand new 3 bed plus maids modern townhouse. 
It features a spacious living area, a contemporary open kitchen, 4 bathrooms, and a balcony that extends the living space outdoors. 
Residents enjoy covered parking, security, and clubhouse access featuring a shared pool and gym. Retail and dining options are also conveniently located nearby. 
Vacant now, it is the perfect family home for those seeking comfort and connectivity.`,
  brokerFee: "5% + VAT",
  securityDeposit: "5%",
  features: [
    "3 spacious bedrooms, 4 bathrooms",
    "Brand new, vacant on transfer",
    "Balcony & covered parking",
    "Townhouse layout, low floor",
    "Secure and family-friendly community",
    "Shared Pool, Gym, and Club House Access",
    "Nearby Retail and Dining Options",
  ],
  referenceCode: "LEA252986",
  image: "Nad Al Sheba Gardens property image",
  createdAt: "2024-09-15T10:00:00Z",
  updatedAt: "2024-09-15T10:00:00Z",
};

export const dummyProp = {
  project: 'Selvara Phase 2 By Emaar',
  launch_price: '6.2M AED',
  key_information: {
    location:
      'Dubai, Dubai Investment Park (DIP), Grand Polo Club and Resort, Selvara 2',
    property_types: ['Villa'],
    payment_plan: ['Option 1'],
    number_of_buildings: 1,
    government_fee: '4%',
    delivery_date: 'April 2029',
    sale_starts: 'November 2, 2025',
  },
  payment_plans: [
    {
      option: 'Option 1',
      plan: [
        {
          percentage: '10%',
          stage: 'Down payment',
          note: 'At sales launch',
        },
        {
          percentage: '70%',
          stage: 'During construction',
          note: null,
        },
        {
          percentage: '20%',
          stage: 'On handover',
          note: null,
        },
      ],
    },
    {
      option: 'Option 2',
      plan: [
        {
          percentage: '10%',
          stage: 'Down payment',
          note: 'At sales launch',
        },
        {
          percentage: '70%',
          stage: 'During construction',
          note: 'In 35 equal quarterly installments',
        },
        {
          percentage: '20%',
          stage: 'On handover',
          note: null,
        },
      ],
    },
  ],
  project_timeline: {
    project_announcement: '-',
    booking_started: 'November 2, 2025',
    construction_started: 'November 3, 2025',
    construction_progress: '0%',
    expected_completion: 'April 30, 2029',
  },
  units: {
    apartment: [
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
    ],
    townhouse: [],
    commercial: [
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
    ],
    duplex: [],
    penthouse: [],
    villa: [
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
      {
        bedrooms: 4,
        price_from: '6.2M AED',
        size_range: '3,638-3,819 sq.ft',
      },
    ],
  },
  about_project: `


**Palace Villas Ostra** by **Emaar Properties** is a prestigious villa community located in **The Oasis, Dubai**. Designed for luxury living, this development offers an exclusive collection of high-end villas with elegant architecture, spacious layouts, and premium finishes.  

Residents can enjoy a harmonious blend of nature and sophistication, with beautifully landscaped surroundings and world-class amenities.<br />

<br />

### **Prime Location**

Nestled in *The Oasis, Dubai*, **Palace Villas Ostra** enjoys a prime location with excellent connectivity to major highways, key business hubs, and lifestyle destinations — ensuring convenience and accessibility for residents.

<br />

## **Amenities**

- Resort-style swimming pools  
- Fully equipped fitness center  
- Lush green parks and open spaces  
- High-end retail outlets and dining options  
- Exclusive clubhouse and community centers  

<br />

## **Unit Types**

**Palace Villas Ostra** features a selection of luxurious villas with spacious interiors, premium finishes, and modern architectural designs — catering to families seeking upscale living in a serene environment.

<br />

### **Available Villas**

- 4 Bedrooms  
- 5 Bedrooms  
- 6 Bedrooms  

<br />

##  **Delivery Date**

The delivery date for **Palace Villas Ostra** is **September 30, 2029**.

<br />

## Starting Price

The starting price for **Palace Villas Ostra** is **AED 13,130,000**.

<br />

**Palace Villas Ostra** by *Emaar Properties* offers an unmatched blend of luxury, exclusivity, and investment potential in one of Dubai’s most sought-after communities.  
With its prime location, world-class amenities, and elegantly designed villas, this development is perfect for those seeking an exceptional lifestyle in a prestigious setting.
<br />
`,
    
  location_nearby_attractions: [
    'Al Maktoum International Airport – 10 minutes',
    'Dubai Marina – 20 minutes',
    'Palm Jumeirah – 20 minutes',
    'Dubai Outlet Mall – 20 minutes',
    'The Sevens Stadium Cricket Ground – 20 minutes',
  ],
  features: [
    'Clubhouse',
    'Basketball court',
    'Banquet hall',
    'Dog park',
    'Fitness centre',
    'Forest landscape',
    'Lush gardens & parks',
    'Tennis court',
    'Volleyball courts',
    'Community view',
    'Picnic area',
  ],
  amenities: [
    'Landscaped Gardens',
    'Gymnasium',
    'Restaurants',
    'Indoor Swimming Pool',
    'CCTV Security',
    'Children"s Play Area',
    'Shared Pool',
  ],
  images: [
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/RljiP2ryRQtVKRBLB52tW4N4VynY-NUKW0RYkWG__uQ=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/TiF79Jo5MdVm878POM7u7wGPc1sEEo7h66k9reIjn4A=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/WQVD3bnMmhP8kbksvqAC3HsFBqOPQGtLRjpTByF057Q=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/FA7jvQUUSWD_SrzhgrHPQqhL4hEerrFaIEXtVYqIsnQ=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/BVJmRFRwj_r2sCTGUbAh8jn-GUcb6WpliwkxpzoyPDI=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/OBFJ6J_XPl-gVqDjBhb67N6D41gIp7XNaAF5IPZXwuQ=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/gallery/image/KZV_2NX3gFHRfYl0Airs2YUAUg1GtIJRbt-uLKwJ-6o=/original.webp',
    'https://new-projects-media.propertyfinder.com/project/44e0b87f-cd9f-4061-92a8-85019044555e/master_plan/image/Yrdta8DxV7jlUDXK08-fVSOrxD5g24ilZ9KjThiuUH0=/original.webp',
  ],
};
