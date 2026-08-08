export type PlotOption = {
  label: string;
  unitType: string;
  dimensions?: string;
  areaGaj: string;
  price: string;
  availability: string;
};

export type FeatureGroup = {
  category: string;
  items: string[];
};

export type Landmark = {
  label: string;
  distance: string;
};

export type Project = {
  slug: string;
  name: string;
  developer: string;
  tagline: string;
  location: string;
  city: string;
  category: string;
  launchStatus: string;
  totalArea: string;
  possession: string;
  configurations: string;
  hrera: string;
  description: string[];
  highlights: string[];
  heroImage: string;
  videoUrl?: string;
  gallery: { src: string; caption: string }[];
  siteFeatures: FeatureGroup[];
  plotOptions: PlotOption[];
  investmentBenefits: string[];
  nearbyLandmarks: Landmark[];
  pricing: string;
  contactPhone?: string;
};

export const projects: Project[] = [
  {
    slug: "skynest-towers",
    name: "Skynest Towers",
    developer: "BPTP Realty",
    tagline: "Where the Sky Takes Root",
    location: "Sector 80, Faridabad",
    city: "Haryana",
    category: "Twin Tower Residences",
    launchStatus: "New Launch",
    totalArea: "~82,000 Sq. Ft. Amenities",
    possession: "Under Construction",
    configurations: "3 & 4 BHK",
    hrera: "HRERA-PKL-FBD-881-2026 (dated 09.04.2026, valid till 31.03.2033)",
    description: [
      "Skynest Towers is BPTP Realty's twin-tower residential development in Sector 80, Faridabad, rising to approximately 150 metres, among the tallest residential addresses the city has seen. The towers are designed around an integrated vertical garden concept, with 20 landscaped 'Sky Nest' pods woven directly into the facade across both towers.",
      "Homes are offered in 3 and 4 BHK configurations, each with a dedicated utility room, an additional powder room, and VRV air conditioning, opening onto wraparound balconies that extend up to 100 feet. The development is IGBC Platinum pre-certified and spread across roughly 82,000 sq. ft. of landscaped greens and amenities, from pools and fitness studios to a business centre, banquet hall, and multiple lifestyle spaces.",
      "GT Spaces represents Skynest Towers for buyers and investors across the NCR, assisting with site visits, unit selection, and the full booking process alongside BPTP Realty's sales team.",
    ],
    highlights: [
      "Twin Towers Rising to ~150 Metres, Faridabad's Tallest Residential Address",
      "20 Sky Nests: Vertical Garden Pods Integrated into the Facade",
      "IGBC Platinum Pre-Certified, Sustainable by Design",
      "Wraparound Balconies up to 100 Ft in Length",
      "9 High-Speed Lifts per Tower",
      "3 & 4 BHK Residences with Utility Room & Powder Room",
      "~82,000 Sq. Ft. of Landscaped Greens & Amenities",
      "By BPTP Realty: Over 50 Million Sq. Ft. Delivered Across NCR",
    ],
    heroImage:
      "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "/videos/skynest-towers-walkthrough.mp4",
    gallery: [
      {
        src: "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1400",
        caption: "Vertical garden facade concept, Skynest Towers",
      },
      {
        src: "https://images.pexels.com/photos/9683984/pexels-photo-9683984.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Sky Nest: garden pods along the tower facade",
      },
      {
        src: "https://images.pexels.com/photos/17383209/pexels-photo-17383209.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Twin tower exterior, evening view",
      },
      {
        src: "https://images.pexels.com/photos/18819119/pexels-photo-18819119.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Balcony greenery and city views",
      },
      {
        src: "https://images.pexels.com/photos/6934189/pexels-photo-6934189.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Living room, representative interior",
      },
      {
        src: "https://images.pexels.com/photos/6585628/pexels-photo-6585628.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Open living & kitchen layout",
      },
      {
        src: "https://images.pexels.com/photos/15994062/pexels-photo-15994062.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Poolside deck, representative view",
      },
      {
        src: "https://images.pexels.com/photos/29224211/pexels-photo-29224211.jpeg?auto=compress&cs=tinysrgb&w=1000",
        caption: "Fitness studio, representative interior",
      },
    ],
    siteFeatures: [
      {
        category: "Biophilic & Green Living",
        items: [
          "20 Sky Nests: vertical garden pods across both towers",
          "IGBC Platinum pre-certified development",
          "Wraparound balconies up to 100 ft in length",
          "~82,000 sq. ft. of landscaped greens across the project",
        ],
      },
      {
        category: "Wellness & Sports",
        items: [
          "Indoor all-weather pool & outdoor pool",
          "Outdoor kids' pool",
          "Gymnasium, Pilates, Spin & Yoga studios",
          "Padel court & Pickleball court",
        ],
      },
      {
        category: "Lifestyle & Entertainment",
        items: [
          "Fine-dining restaurant & private dining",
          "Banquet hall / ballroom",
          "Business centre & seating lounge",
          "Spa, salon & home theatre",
        ],
      },
      {
        category: "Family & Community",
        items: [
          "Kids' learning studio, library & Lego room",
          "Pottery, culinary & chess studios",
          "Senior citizens' lounge",
          "4 guest suites for visiting family",
        ],
      },
    ],
    plotOptions: [
      {
        label: "3 BHK Residence",
        unitType: "3 BHK",
        dimensions: "Utility room & powder room included",
        areaGaj: "Configuration on request",
        price: "Price on request",
        availability: "New Launch",
      },
      {
        label: "4 BHK Residence",
        unitType: "4 BHK",
        dimensions: "Utility room & powder room included",
        areaGaj: "Configuration on request",
        price: "Price on request",
        availability: "New Launch",
      },
    ],
    investmentBenefits: [
      "Faridabad's tallest residential twin towers at ~150 metres, a genuine first for the city's skyline",
      "IGBC Platinum pre-certified development built around sustainable, long-term efficiency",
      "Backed by BPTP Realty, a developer with over 50 million sq. ft. delivered and roughly 24,500 units handed over across NCR",
      "Direct access to the DND-KMP Expressway and NH-44, with the upcoming Jewar Airport and FNG Expressway further improving connectivity",
    ],
    nearbyLandmarks: [
      { label: "Delhi Public School", distance: "3 mins" },
      { label: "Shiv Nadar School", distance: "3 mins" },
      { label: "Accord Hospital", distance: "6 mins" },
      { label: "Amrita Hospital", distance: "15 mins" },
      { label: "South Delhi (via DND-KMP Expressway)", distance: "~25 mins" },
      { label: "Noida (via FNG Expressway)", distance: "~30 mins" },
      { label: "Noida International Airport", distance: "~45 mins" },
    ],
    pricing:
      "Pricing available on request. Connect with our team at GT Spaces for the latest rates, unit availability, and payment plans.",
    contactPhone: "9716164443",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
