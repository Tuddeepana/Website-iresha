import fuel from "@/assets/iresha-fuel-station.webp";
import supermarket from "@/assets/iresha-supermarket.webp";
import ricemill from "@/assets/iresha-rice-mill.webp";
import restaurant from "@/assets/iresha-restaurant-hospitality.webp";
import supercityMain from "@/assets/iresha-super-city-supermarket.webp";
import supercity1 from "@/assets/iresha-super-city-supermarket-interior-1.webp";
import supercity2 from "@/assets/iresha-super-city-supermarket-interior-2.webp";
import supercity3 from "@/assets/iresha-super-city-supermarket-interior-3.webp";
import supercity4 from "@/assets/iresha-super-city-supermarket-interior-4.webp";
import supercity5 from "@/assets/iresha-super-city-supermarket-exterior-5.webp";
import supercity6 from "@/assets/iresha-super-city-supermarket-exterior-6.webp";
import supercity7 from "@/assets/iresha-super-city-supermarket-products-7.webp";
<<<<<<< HEAD
import gallery1 from "@/assets/-super-city-supermarket-products-8.webp";
=======
import gallery1 from "@/assets/iresha-fuel-station-opens-tissamaharama8.webp";
>>>>>>> 82a907a1538e0e4e739bb3a9dd5b8199d07bc94a
import gallery2 from "@/assets/iresha-fuel-station-opens-tissamaharama7.webp";

export type Business = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  icon: "fuel" | "shopping" | "wheat" | "utensils";
  services: { title: string; description: string }[];
  achievements: { value: string; label: string }[];
  gallery: string[];
};

export const BUSINESSES: Business[] = [
  {
    slug: "fuel-station",
    title: "Iresha Fuel",
    tagline: "Powering the nation, mile by mile.",
    description:
      "A nationwide network of premium fuel retail outlets delivering quality fuel and modern forecourt services.",
    longDescription:
      "Iresha Fuel operates a growing network of modern fuel stations across Sri Lanka, combining international standards with local hospitality. Every station offers premium-grade fuel, certified meters, lounge-style convenience stores and 24/7 service.",
    image: fuel,
    icon: "fuel",
    services: [
      {
        title: "Premium Fuels",
        description: "Petrol, diesel and lubricants meeting international standards.",
      },
      {
        title: "Convenience Stores",
        description: "Modern forecourt retail with food, beverages and essentials.",
      },
      {
        title: "Fleet Solutions",
        description: "Corporate fuel cards, fleet refuelling and tank monitoring.",
      },
      { title: "Vehicle Care", description: "Express car wash, tyre and lubrication services." },
    ],
    achievements: [
      { value: "1", label: "Stations Nationwide" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "7AM - 10PM", label: "Operations" },
    ],
    gallery: [gallery1, gallery2, fuel],
  },
  {
    slug: "supermarket",
    title: "Iresha Super City",
    tagline: "Quality groceries for every Sri Lankan family.",
    description:
      "A modern supermarket chain offering fresh produce, household essentials and international brands.",
    longDescription:
      "Iresha Super City brings supermarket convenience to communities across the island. From farm-fresh produce to imported brands, our stores combine clean modern design, transparent pricing and a curated product range.",
    image: supercityMain,
    icon: "shopping",
    services: [
      {
        title: "Fresh Produce",
        description: "Daily-sourced vegetables, fruit and dairy from local farmers.",
      },
      {
        title: "Imported Brands",
        description: "International grocery and lifestyle brands under one roof.",
      },
      { title: "Bakery & Deli", description: "In-store bakery and ready-to-eat counters." },
      {
        title: "Loyalty Rewards",
        description: "A rewarding membership program for regular shoppers.",
      },
    ],
    achievements: [
      { value: "2", label: "Outlets" },
      { value: "12K+", label: "SKUs Stocked" },
      { value: "10K+", label: "Customers" },
    ],
    gallery: [supercity1, supercity2, supercity3, supercity4, supercity5, supercity6, supercity7],
  },
  {
    slug: "rice-mill",
    title: "Iresha Rice Mills",
    tagline: "From paddy field to dinner table.",
    description:
      "Modern rice processing facilities producing premium-grade rice for the local and export market.",
    longDescription:
      "Our rice milling operations integrate traditional Sri Lankan paddy varieties with modern processing technology. Through direct partnerships with farmers, we guarantee fair pricing, quality control and traceable production.",
    image: ricemill,
    icon: "wheat",
    services: [
      {
        title: "Paddy Procurement",
        description: "Direct partnerships with over 3,000 farmers across the island.",
      },
      {
        title: "Modern Milling",
        description: "Stainless-steel polishing, color sorting and packaging lines.",
      },
      {
        title: "Branded Rice",
        description: "Premium and value rice brands distributed nationwide.",
      },
      {
        title: "Export Programme",
        description: "Export-grade rice serving South Asia and the Middle East.",
      },
    ],
    achievements: [
      { value: "120K", label: "Tons / Year" },
      { value: "3,000+", label: "Partner Farmers" },
      { value: "8", label: "Export Markets" },
    ],
    gallery: [ricemill, ricemill, ricemill],
  },
  {
    slug: "restaurant",
    title: "Iresha Hospitality",
    tagline: "Where Sri Lankan flavours meet world-class hospitality.",
    description:
      "A curated portfolio of fine-dining and casual restaurants celebrating Sri Lankan and global cuisine.",
    longDescription:
      "From fine dining in Colombo to casual brand outlets in regional cities, Iresha Hospitality blends Sri Lankan heritage with contemporary hospitality, served by talented chefs and an exceptional team.",
    image: restaurant,
    icon: "utensils",
    services: [
      {
        title: "Fine Dining",
        description: "Signature restaurants showcasing Sri Lankan and global cuisine.",
      },
      { title: "Casual Brands", description: "Popular casual dining concepts in key cities." },
      {
        title: "Banquets & Events",
        description: "Custom event catering for weddings and corporate functions.",
      },
      {
        title: "Culinary Academy",
        description: "Training the next generation of Sri Lankan hospitality talent.",
      },
    ],
    achievements: [
      { value: "11", label: "Restaurants" },
      { value: "350+", label: "Team Members" },
      { value: "4.8★", label: "Guest Rating" },
    ],
    gallery: [restaurant, restaurant, restaurant],
  },
];

export const getBusiness = (slug: string) => BUSINESSES.find((b) => b.slug === slug);
