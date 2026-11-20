export type ServiceCategory = 'cctv' | 'gates';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  iconName:
    | 'cctv'
    | 'wrench'
    | 'camera'
    | 'monitor'
    | 'door'
    | 'sliders'
    | 'shield'
    | 'settings';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cctv' | 'gates' | 'barriers';
  categoryLabel: string;
  locationContext: string;
  description: string;
  image: string;
  alt: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Krish Technology Solutions',
  shortName: 'Krish Technology Solutions',
  category: 'CCTV Sales & Service, Automatic Gate and Boom Barrier Solutions',
  address: 'Achunthanvayal, Ramanathapuram, Tamil Nadu, India',
  district: 'Ramanathapuram, Tamil Nadu',
  primaryPhoneDisplay: '9025691764',
  primaryPhoneFormatted: '+91 90256 91764',
  primaryTelHref: 'tel:+919025691764',
  alternativePhoneDisplay: '7904401290',
  alternativePhoneFormatted: '+91 79044 01290',
  alternativeTelHref: 'tel:+917904401290',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Achunthanvayal%2C+Ramanathapuram%2C+Tamil+Nadu%2C+India',
};

export function getWhatsAppUrl(
  phoneDigits: '9025691764' | '7904401290',
  message?: string
): string {
  const defaultMsg =
    'Hello Krish Technology Solutions, I would like to enquire about your CCTV and gate automation services.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/91${phoneDigits}?text=${text}`;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_security_command_1795156917832.jpg',
  cctvSurveillance: '/src/assets/images/service_cctv_surveillance_1795156920213.jpg',
  automaticGate: '/src/assets/images/service_automatic_gate_1795156920451.jpg',
  boomBarrier: '/src/assets/images/service_boom_barrier_1795156920250.jpg',
  aboutInstallation: '/src/assets/images/about_tech_installation_1795156920123.jpg',
  indoorDomeCctv: '/src/assets/images/gallery_indoor_dome_cctv_1795156920599.jpg',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'cctv-sales-installation',
    number: '01',
    title: 'CCTV Camera Sales and Installation',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    description:
      'End-to-end supply and site-tailored installation of surveillance cameras for homes, shops, schools, and commercial facilities across Ramanathapuram.',
    highlights: [
      'Site survey for optimal camera angles',
      'Weatherproof cabling & concealed conduit routing',
      'Mobile app & remote viewing setup',
    ],
    image: IMAGES.cctvSurveillance,
    imageAlt: 'Commercial 4K IP turret and bullet CCTV cameras installed on a concrete exterior wall',
    iconName: 'cctv',
  },
  {
    id: 'cctv-service-repair',
    number: '02',
    title: 'CCTV Camera Service and Repair',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    description:
      'Prompt diagnostic troubleshooting, cable replacement, DVR/NVR servicing, hard drive health checks, and power supply repairs to keep existing cameras operational.',
    highlights: [
      'No-signal & blurry feed troubleshooting',
      'DVR / NVR firmware & storage recovery',
      'SMPS, BNC & PoE connector replacement',
    ],
    iconName: 'wrench',
  },
  {
    id: 'hd-ip-camera-systems',
    number: '03',
    title: 'HD and IP Camera Systems',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    description:
      'High-definition analog HD and PoE IP network camera deployments with low-light night vision, wide dynamic range, and crisp license-plate or doorway clarity.',
    highlights: [
      'Bullet, dome & turret camera options',
      'Color night vision & infrared illumination',
      'PoE network switching & structured Cat6 cabling',
    ],
    image: IMAGES.indoorDomeCctv,
    imageAlt: 'Low-profile indoor dome CCTV security cameras installed in a modern commercial interior',
    iconName: 'camera',
  },
  {
    id: 'complete-video-surveillance',
    number: '04',
    title: 'Complete Video Surveillance Solutions',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    description:
      'Multi-camera NVR monitoring systems, central display configuration, backup power planning, and perimeter coverage designed for warehouses, institutions, and offices.',
    highlights: [
      'Multi-channel NVR & monitor wall setup',
      'Custom storage retention planning',
      'Perimeter & entry-exit blind-spot elimination',
    ],
    iconName: 'monitor',
  },
  {
    id: 'automatic-gate-installation',
    number: '05',
    title: 'Automatic Gate Installation and Automation',
    category: 'gates',
    categoryLabel: 'Gates & Barriers',
    description:
      'Motorized gate automation engineered for residential compounds, villas, factories, and commercial premises with remote transmitters, safety sensors, and manual release.',
    highlights: [
      'Remote keyfob, push-button & keypad control',
      'Photocell obstacle-detection safety beams',
      'Manual key override during power outages',
    ],
    image: IMAGES.automaticGate,
    imageAlt: 'Modern automatic sliding gate with motorized rack-and-pinion drive and photocell sensors',
    iconName: 'door',
  },
  {
    id: 'sliding-swing-gates',
    number: '06',
    title: 'Automatic Sliding and Swing Gates',
    category: 'gates',
    categoryLabel: 'Gates & Barriers',
    description:
      'Heavy-duty rack-and-pinion motors for sliding gates and articulated or linear actuators for single and double-leaf swing gates built for smooth daily operation.',
    highlights: [
      'Precision gear-rack sliding gate motors',
      'Single & dual-leaf swing gate operators',
      'Weather-sealed motor housings',
    ],
    iconName: 'sliders',
  },
  {
    id: 'boom-barrier-installation',
    number: '07',
    title: 'Automatic Boom Barrier Installation',
    category: 'gates',
    categoryLabel: 'Gates & Barriers',
    description:
      'Reliable electro-mechanical boom barriers for parking lots, industrial estates, hospitals, apartments, and toll/security checkpoints requiring controlled vehicle flow.',
    highlights: [
      'Fast-acting barrier arms with reflective strips',
      'Loop detector & RFID / push-button integration',
      'High-cycle duty for busy entry lanes',
    ],
    image: IMAGES.boomBarrier,
    imageAlt: 'Automatic boom barrier arm and RFID access post controlling a commercial vehicle lane',
    iconName: 'shield',
  },
  {
    id: 'gate-barrier-repair',
    number: '08',
    title: 'Gate and Barrier Repair and Maintenance',
    category: 'gates',
    categoryLabel: 'Gates & Barriers',
    description:
      'Dedicated mechanical and electronic servicing for gate motors, control boards, remote receivers, limit switches, and boom barrier springs or arms.',
    highlights: [
      'Control board & limit-switch calibration',
      'Motor gear, rack & arm alignment checks',
      'Scheduled preventive maintenance visits',
    ],
    iconName: 'settings',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Professional Service',
    description:
      'Clean wiring, accurate camera placement, and properly aligned gate and barrier hardware installed with attention to site aesthetics and safety.',
  },
  {
    number: '02',
    title: 'Dependable Solutions',
    description:
      'Practical surveillance and access-control setups tailored to actual site conditions, entry traffic, and daily operating requirements.',
  },
  {
    number: '03',
    title: 'Quality Products',
    description:
      'Durable HD and IP cameras, weather-resistant enclosures, and proven gate motor and boom barrier mechanisms selected for long-term operation.',
  },
  {
    number: '04',
    title: 'Technical Support',
    description:
      'Direct phone and WhatsApp technical assistance for troubleshooting, mobile viewing setup, remote programming, and routine servicing.',
  },
  {
    number: '05',
    title: 'Customer Satisfaction',
    description:
      'Clear communication from initial site visit through handover, ensuring you and your team know how to operate every system confidently.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-perimeter-command',
    title: 'Commercial Entry Surveillance & Gate Control',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    locationContext: 'Commercial Facility',
    description:
      'Exterior bullet and dome IP cameras paired with perimeter entrance monitoring for clear day and night coverage.',
    image: IMAGES.hero,
    alt: 'Commercial building entrance with mounted bullet and dome IP cameras and automated perimeter gate',
  },
  {
    id: 'gal-outdoor-4k',
    title: 'Outdoor Weatherproof Turret & Bullet Cameras',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    locationContext: 'Exterior Perimeter',
    description:
      'Sealed junction boxes and flexible conduit routing protecting outdoor HD/IP camera connections against rain and dust.',
    image: IMAGES.cctvSurveillance,
    alt: 'Weatherproof outdoor turret and bullet CCTV cameras mounted on concrete wall with conduit',
  },
  {
    id: 'gal-sliding-gate',
    title: 'Motorized Sliding Gate Automation',
    category: 'gates',
    categoryLabel: 'Automatic Gates',
    locationContext: 'Residential & Commercial Compound',
    description:
      'Heavy-duty sliding gate drive unit with gear rack, pillar-mounted safety photocell sensors, and smooth remote operation.',
    image: IMAGES.automaticGate,
    alt: 'Dark navy automatic sliding gate with ground-mounted drive motor and safety photocell',
  },
  {
    id: 'gal-boom-barrier',
    title: 'Vehicle Lane Boom Barrier System',
    category: 'barriers',
    categoryLabel: 'Boom Barriers',
    locationContext: 'Parking & Campus Entry',
    description:
      'Automated electro-mechanical boom barrier with high-visibility arm and access control pedestal for controlled vehicle entry.',
    image: IMAGES.boomBarrier,
    alt: 'Automatic boom barrier system installed at a modern commercial vehicle entry lane',
  },
  {
    id: 'gal-nvr-rack',
    title: 'NVR Monitoring & Structured Cabling',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    locationContext: 'Control Room Setup',
    description:
      'Multi-camera NVR display calibration and labeled PoE network rack cabling for organized, serviceable surveillance.',
    image: IMAGES.aboutInstallation,
    alt: 'Security technician configuring multi-channel NVR surveillance monitor and structured rack cabling',
  },
  {
    id: 'gal-indoor-dome',
    title: 'Indoor Commercial Dome Camera Grid',
    category: 'cctv',
    categoryLabel: 'CCTV & Surveillance',
    locationContext: 'Showroom & Office Interior',
    description:
      'Discreet ceiling-mounted dome cameras providing wide-angle coverage across reception areas, aisles, and billing counters.',
    image: IMAGES.indoorDomeCctv,
    alt: 'Indoor commercial showroom and office ceiling equipped with low-profile dome CCTV cameras',
  },
];
