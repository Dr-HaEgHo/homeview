import fb from "@/assets/icons/fb.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import ig from "@/assets/icons/ig.svg";
import wa from "@/assets/icons/wa.svg";
import yt from "@/assets/icons/yt.svg";
import heroBg from "@/assets/images/hero-bg.png";
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
  { name: "fb", image: fb, link: "/" },
  { name: "ig", image: ig, link: "/news" },
  { name: "tiktok", image: tiktok, link: "/properties" },
  { name: "wa", image: wa, link: "/about-us" },
  { name: "yt", image: yt, link: "/contact-us" },
];

export const slides = [{ image: heroBg }, { image: heroBg }, { image: heroBg }];

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

export const testimonials = [
  {
    image: p1, // Replace with actual image import or path
    text: "Our reputation is built on trust, with thousands of satisfied clients who have chosen us for their real estate needs.",
    name: "Aisha Al-Farsi",
    location: "Dubai, Home Owner",
  },
  {
    image: p2,
    text: "Our reputation is built on trust, with thousands of satisfied clients who have chosen us for their real estate needs.",
    name: "Aisha Al-Farsi",
    location: "Dubai, Home Owner",
  },
  {
    image: p3,
    text: "Our reputation is built on trust, with thousands of satisfied clients who have chosen us for their real estate needs.",
    name: "Aisha Al-Farsi",
    location: "Dubai, Home Owner",
  },
  {
    image: p4,
    text: "Our reputation is built on trust, with thousands of satisfied clients who have chosen us for their real estate needs.",
    name: "Aisha Al-Farsi",
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
  { name: "Blog", route: "blog" },
  { name: "Podcasts", route: "podcasts" },
  { name: "Careers", route: "careers" },
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
