export interface Product {
  id: string;
  itemNo?: number;
  name: string;
  category: 'confectionery' | 'disposable-cutlery' | 'promotional-toys' | 'moulds-dies' | 'candy-jelly' | 'kids-toys' | 'food-containers';
  categoryLabel: string;
  image: string;
  description: string;
  specs: {
    itemNo?: string;
    productType?: string;
    material?: string;
    capacity?: string;
    toyShape?: string;
    flavor?: string;
    ageGroup?: string;
    packSize?: string;
    length?: string;
    mouldMaterial?: string;
    usage?: string;
    origin?: string;
    moq?: string;
    [key: string]: string | undefined;
  };
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isEcoFriendly?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Products (122+ Items)' },
  { id: 'confectionery', label: 'Confectionery Toys' },
  { id: 'disposable-cutlery', label: 'Compostable & Eco Cutlery' },
  { id: 'food-containers', label: 'Food Containers & Moulds' },
  { id: 'promotional-toys', label: 'Promotional & Election Items' },
  { id: 'moulds-dies', label: 'Plastic Moulds & Dies' },
  { id: 'candy-jelly', label: 'Candy & Rotary Toys' },
  { id: 'kids-toys', label: 'Kids Games & Target Toys' },
];

export const COMPANY_DETAILS = {
  name: 'Kamal Moulds®',
  proprietor: 'Mafatlal Manchaji Paradiya',
  gst: '24AFSPP1287P1ZK',
  iso: 'ISO 20457:2018 Certified',
  responseRate: '87% Quick Response Rate',
  address: '136/137, Sahitya Industrial Hub, Gatrad Road, Bakrol, Ahmedabad-382430 (Guj.) (INDIA)',
  phones: [
    '+91 94260 09858',
    '+91 74058 27881',
    '+91 98752 77319'
  ],
  whatsapp: '919426009858',
  emails: [
    'kamalmoulds@gmail.com',
    'kamalmoulds@yahoo.co.in'
  ],
  website: 'www.kamalmoulds.com',
  gmaps: 'https://maps.google.com?q=22.98838000,72.72354000',
  tagline: 'Mfg. Of: All Kind Plastic Moulds, Dies & Specialist in Toys Mould & Food Container Mould'
};

export const PRODUCTS: Product[] = [
  // SECTION 1: CONFECTIONERY TOYS (Catalog #1 to #25)
  {
    id: 'item-1-umbrella-cone-toy',
    itemNo: 1,
    name: 'Umbrella Cone Toy',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=800',
    description: 'Item #1: Elegant umbrella cone shaped plastic candy filling toy with top hanger loop and crystal body.',
    specs: { itemNo: '#1', productType: 'Candy Toy', material: 'Virgin Food Grade PP', toyShape: 'Umbrella Cone', moq: '5,000 Pcs' },
    features: ['Crystal Transparency', 'Snap Fit Seal Lid', 'Ideal for Gems & Sugar Balls'],
    isPopular: true
  },
  {
    id: 'item-2-umbrella-whistle-toy',
    itemNo: 2,
    name: 'Umbrella Whistle Toy',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1532117892862-ff7b63750058?auto=format&fit=crop&q=80&w=800',
    description: 'Item #2: Dual function umbrella shaped toy with integrated whistle sound stem.',
    specs: { itemNo: '#2', productType: 'Whistle Toy', material: 'PP Plastic', toyShape: 'Whistle Umbrella', moq: '5,000 Pcs' },
    features: ['Functional Whistle Sound', 'Vibrant Color Caps', 'Easily Refillable'],
    isPopular: true
  },
  {
    id: 'item-3-umbrella-stand',
    itemNo: 3,
    name: 'Umbrella Stand Tray',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800',
    description: 'Item #3: Multi-slot display stand tray designed to hold umbrella candy toys securely during filling & retail sales.',
    specs: { itemNo: '#3', productType: 'Display Stand', material: 'HDPE Black Plastic', capacity: '36 Slots', moq: '500 Pcs' },
    features: ['High Stability Grid', 'Bulk Filling Friendly', 'Durable Tooling']
  },
  {
    id: 'item-4-whistle-dabbi',
    itemNo: 4,
    name: 'Whistle Dabbi',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800',
    description: 'Item #4: Compact cylindrical candy jar dabbi with sound whistle top lid.',
    specs: { itemNo: '#4', productType: 'Candy Jar', material: 'Food Grade PP', capacity: '15g Candy', moq: '5,000 Pcs' },
    features: ['Leak Proof Thread', 'Bright Whistle Cap', 'Impulse Purchase Item']
  },
  {
    id: 'item-7-small-egg-toy',
    itemNo: 7,
    name: 'Small Egg Toy',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    description: 'Item #7: Classic surprise egg toy container for small jelly beans, candies, and promotional gifts.',
    specs: { itemNo: '#7', productType: 'Surprise Egg', material: 'PP Plastic', toyShape: 'Egg Shell', moq: '10,000 Pcs' },
    features: ['Easy Snap Center Lock', 'High Volume Yield', 'Non-Toxic Polymer'],
    isPopular: true
  },
  {
    id: 'item-8-big-egg-toy',
    itemNo: 8,
    name: 'Big Egg Toy',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800',
    description: 'Item #8: Large volume surprise egg shell toy suitable for chocolate balls and toy surprises.',
    specs: { itemNo: '#8', productType: 'Surprise Egg Big', material: 'PP Plastic', toyShape: 'Large Egg', moq: '5,000 Pcs' },
    features: ['Large Internal Volume', 'Smooth Edges', 'Multiple Vibrant Colors']
  },
  {
    id: 'item-9-heart-toy',
    itemNo: 9,
    name: 'Heart Candy Toy',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
    description: 'Item #9: Heart-shaped translucent candy container ideal for chocolate gems and gift packs.',
    specs: { itemNo: '#9', productType: 'Gift Container', material: 'Crystal PP', toyShape: 'Heart', moq: '5,000 Pcs' },
    features: ['High Aesthetic Appeal', 'Tight Snap Fit', 'Bestselling Gift Item']
  },
  {
    id: 'item-13-lipstick-set',
    itemNo: 13,
    name: 'Lipstick Candy Toy Set',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
    description: 'Item #13: Realistic twist-up cosmetic lipstick toy container for sweet gel and hard candy.',
    specs: { itemNo: '#13', productType: 'Novelty Toy', material: 'PS/PP', toyShape: 'Lipstick Tube', moq: '5,000 Pcs' },
    features: ['Smooth Twist Mechanism', 'Clear Cap Cover', 'High Demand with Kids'],
    isPopular: true
  },
  {
    id: 'item-15-rocket-lipstick-stand',
    itemNo: 15,
    name: 'Rocket Lipstick With Stand',
    category: 'confectionery',
    categoryLabel: 'Confectionery Toys',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800',
    description: 'Item #15: Rocket ship shaped lipstick candy container equipped with detachable launch pad stand.',
    specs: { itemNo: '#15', productType: 'Novelty Rocket', material: 'PP Plastic', toyShape: 'Rocket Stand', moq: '5,000 Pcs' },
    features: ['Detachable Launch Base', 'Collectible Toy', 'Food Safe Plastic']
  },

  // SECTION 2: ROTARY & FURFURI PIPES (Catalog #16 to #30)
  {
    id: 'item-16-whistle-pipe',
    itemNo: 16,
    name: 'Whistle Pipe',
    category: 'candy-jelly',
    categoryLabel: 'Candy & Rotary Toys',
    image: 'https://images.unsplash.com/photo-1532117892862-ff7b63750058?auto=format&fit=crop&q=80&w=800',
    description: 'Item #16: Long candy filling whistle pipe with clear chamber stem.',
    specs: { itemNo: '#16', productType: 'Whistle Stem', material: 'Food Grade PP', length: '6 inch', moq: '5,000 Pcs' },
    features: ['Loud Sound Whistle', 'Candy Filling Pipe', 'Multi Color Pack']
  },
  {
    id: 'item-18-rotary-pipe',
    itemNo: 18,
    name: 'Rotary Pipe Toy',
    category: 'candy-jelly',
    categoryLabel: 'Candy & Rotary Toys',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800',
    description: 'Item #18: Interactive spinning rotary wheel attached to candy pipe stem.',
    specs: { itemNo: '#18', productType: 'Rotary Toy', material: 'PP Plastic', operation: 'Finger Spin', moq: '5,000 Pcs' },
    features: ['Smooth Wheel Rotation', 'Dual Color Blades', 'Candy Chamber'],
    isPopular: true
  },
  {
    id: 'item-19-furfuri-pipe',
    itemNo: 19,
    name: 'Furfuri Windmill Pipe Toy',
    category: 'candy-jelly',
    categoryLabel: 'Candy & Rotary Toys',
    image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&q=80&w=800',
    description: 'Item #19: Famous Furfuri windmill fan toy. Blow air or spin with finger for spinning action.',
    specs: { itemNo: '#19', productType: 'Windmill Toy', material: 'Virgin PP', toyShape: 'Furfuri Windmill', moq: '5,000 Pcs' },
    features: ['Action Fan Blades', 'Bestselling Market Item', 'Lightweight Construction'],
    isPopular: true
  },
  {
    id: 'item-30-furfuri-ring',
    itemNo: 30,
    name: 'Furfuri Jelly Ring',
    category: 'candy-jelly',
    categoryLabel: 'Candy & Rotary Toys',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=800',
    description: 'Item #30: Wearable ring toy with miniature spinning Furfuri fan top for jelly cups.',
    specs: { itemNo: '#30', productType: 'Jelly Ring', material: 'Food Grade PP', toyShape: 'Ring Windmill', moq: '5,000 Pcs' },
    features: ['Adjustable Soft Ring', 'Spinning Fan Action', 'Great Retail Counter Seller']
  },

  // SECTION 3: STICKS, INJECTIONS & SPINNER TOYS (Catalog #31 to #75)
  {
    id: 'item-37-injection-toy',
    itemNo: 37,
    name: 'Injection Syringe Candy Toy',
    category: 'kids-toys',
    categoryLabel: 'Kids Games & Toys',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Item #37: Syringe injection toy container for sour candy gel, liquid candy & jellies.',
    specs: { itemNo: '#37', productType: 'Syringe Gel Toy', material: 'PP Plastic', capacity: '10ml', moq: '5,000 Pcs' },
    features: ['Smooth Plunger Push', 'No Leak Rubber Seal', 'Popular Sour Gel Container'],
    isPopular: true
  },
  {
    id: 'item-59-gun-goli-target-set',
    itemNo: 59,
    name: 'Gun-Goli Target Game Set',
    category: 'kids-toys',
    categoryLabel: 'Kids Games & Toys',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Item #59: Target shooting game set with spring action pistol and plastic targets.',
    specs: { itemNo: '#59', productType: 'Target Game', material: 'Durable PP/ABS', ageGroup: '5+ Yrs', moq: '1,000 Sets' },
    features: ['Includes Target Stand & Bullets', 'Safe Spring Mechanism', 'High Play Value']
  },
  {
    id: 'item-60-motu-patlu-whistle',
    itemNo: 60,
    name: 'Motu - Patlu Character Whistle',
    category: 'kids-toys',
    categoryLabel: 'Kids Games & Toys',
    image: 'https://images.unsplash.com/photo-1532117892862-ff7b63750058?auto=format&fit=crop&q=80&w=800',
    description: 'Item #60: Cartoon themed whistle candy toy with high clarity sound.',
    specs: { itemNo: '#60', productType: 'Character Whistle', material: 'Food Grade PP', moq: '5,000 Pcs' },
    features: ['High Kid Demand', 'Loud Clear Whistle', 'Safe Round Corners']
  },
  {
    id: 'item-66-bullet-bike-toy',
    itemNo: 66,
    name: 'Bullet Bike Toy',
    category: 'kids-toys',
    categoryLabel: 'Kids Games & Toys',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
    description: 'Item #66: Free wheel motorcycle toy with internal candy storage chamber.',
    specs: { itemNo: '#66', productType: 'Free Wheel Bike', material: 'PP Plastic', operation: 'Free Wheel', moq: '3,000 Pcs' },
    features: ['Free Rolling Axles', 'Detailed Mold Design', 'Sweet Box Dual Function'],
    isPopular: true
  },

  // SECTION 4: ELECTION & PROMOTIONAL ITEMS (Catalog #86 to #98)
  {
    id: 'item-86-big-kamal-foil',
    itemNo: 86,
    name: 'Big Kamal Symbol With Foil',
    category: 'promotional-toys',
    categoryLabel: 'Promotional & Election Items',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Item #86: High precision lotus emblem badge with premium metallic foil finish.',
    specs: { itemNo: '#86', productType: 'Election Emblem', material: 'Metallic Foil Plastic', usage: 'Promotional Campaign', moq: '5,000 Pcs' },
    features: ['Mirror Metallic Shine', 'Sturdy Backing', 'Precision Dies']
  },
  {
    id: 'item-90-hand-fan',
    itemNo: 90,
    name: 'Election Hand Fan',
    category: 'promotional-toys',
    categoryLabel: 'Promotional & Election Items',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Item #90: Handheld campaign fan with custom party logo sticker frame.',
    specs: { itemNo: '#90', productType: 'Campaign Fan', material: 'Flexible PP', usage: 'Rally & Campaign', moq: '2,000 Pcs' },
    features: ['Lightweight & Durable', 'Large Custom Sticker Space', 'Comfort Grip Handle']
  },
  {
    id: 'item-91-capsule-billa',
    itemNo: 91,
    name: 'Capsule Election Billa / Badge',
    category: 'promotional-toys',
    categoryLabel: 'Promotional & Election Items',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Item #91: Oval capsule shape election badge with pin backing for clothing.',
    specs: { itemNo: '#91', productType: 'Election Badge', material: 'PP Plastic + Pin', moq: '5,000 Pcs' },
    features: ['Secure Safety Pin', 'High Print Clarity', 'Mass Campaign Essential']
  },

  // SECTION 5: COMPOSTABLE & BIODEGRADABLE CUTLERY (Catalog #99 to #118)
  {
    id: 'item-99-compostable-spoon-1',
    itemNo: 99,
    name: 'PLA Compostable Bio Spoon (Heavy Duty)',
    category: 'disposable-cutlery',
    categoryLabel: 'Compostable & Eco Cutlery',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800',
    description: 'Item #99: 100% biodegradable and compostable PLA spoon made from plant starches.',
    specs: { itemNo: '#99', productType: 'Bio Spoon', material: '100% PLA Bioplastic', length: '6.5 inch', moq: '20,000 Pcs' },
    features: ['100% Compostable in 90 Days', 'Heat Resistant up to 85°C', 'BPA & Plastic Free'],
    isPopular: true,
    isEcoFriendly: true
  },
  {
    id: 'item-102-compostable-fork',
    itemNo: 102,
    name: 'PLA Compostable Bio Fork',
    category: 'disposable-cutlery',
    categoryLabel: 'Compostable & Eco Cutlery',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Item #102: Premium compostable PLA fork designed for catering and eco dining.',
    specs: { itemNo: '#102', productType: 'Bio Fork', material: 'PLA Plant Fiber', length: '6.5 inch', moq: '20,000 Pcs' },
    features: ['Sturdy Tines', 'Smooth Edge Finish', 'Zero Environmental Impact'],
    isEcoFriendly: true
  },
  {
    id: 'item-105-compostable-food-box',
    itemNo: 105,
    name: 'Sugarcane Bagasse Meal Box / Tray',
    category: 'disposable-cutlery',
    categoryLabel: 'Compostable & Eco Cutlery',
    image: 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&q=80&w=800',
    description: 'Item #105: Compostable sugarcane fiber bagasse container box for hot meals.',
    specs: { itemNo: '#105', productType: 'Bagasse Food Box', material: 'Sugarcane Pulp', capacity: '750ml', moq: '5,000 Pcs' },
    features: ['Microwave & Freezer Safe', 'Oil & Water Resistant', 'Fully Decomposes'],
    isEcoFriendly: true
  },
  {
    id: 'item-118-compostable-cups',
    itemNo: 118,
    name: 'Eco Bio Paper / Corn Starch Cups Stack',
    category: 'disposable-cutlery',
    categoryLabel: 'Compostable & Eco Cutlery',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Item #118: Compostable eco cups suitable for cold & hot beverages.',
    specs: { itemNo: '#118', productType: 'Bio Cup', material: 'PLA Lined Paper / Starch', capacity: '250ml', moq: '10,000 Pcs' },
    features: ['Leak Proof Lining', 'Sturdy Rim', 'Eco Certified'],
    isEcoFriendly: true
  },

  // SECTION 6: FOOD CONTAINERS & INJECTION MOULDS (Catalog #119 to #122)
  {
    id: 'item-119-round-plastic-container-set',
    itemNo: 119,
    name: 'Round Food Containers (110ml to 3000ml)',
    category: 'food-containers',
    categoryLabel: 'Food Containers & Moulds',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Item #119: Full series of round food storage containers (110ml, 300ml, 400ml, 450ml, 650ml, 750ml, 1000ml, 1250ml, 1500ml, 2000ml, 2500ml, 3000ml) with snap lock lids.',
    specs: { itemNo: '#119', productType: 'Food Container Set', material: 'Virgin Food Grade PP', capacities: '110ml - 3000ml', moq: '5,000 Sets' },
    features: ['100% Air-Tight Snap Lid', 'Microwaveable & Reusable', 'High Clarity PP Plastic'],
    isPopular: true
  },
  {
    id: 'item-120-rectangular-container-set',
    itemNo: 120,
    name: 'Rectangular Food Containers (250ml to 4800ml)',
    category: 'food-containers',
    categoryLabel: 'Food Containers & Moulds',
    image: 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?auto=format&fit=crop&q=80&w=800',
    description: 'Item #120: Heavy duty rectangular food packaging boxes for meal deliveries, sweets, and restaurant takeaways.',
    specs: { itemNo: '#120', productType: 'Rectangular Container', material: 'Food Grade PP', capacities: '250ml - 4800ml', moq: '5,000 Pcs' },
    features: ['Stackable Rim Design', 'Spill Proof Hermetic Seal', 'Ideal for Meal Prep & Sweets']
  },

  // SECTION 7: PLASTIC INJECTION MOULDS & DIES
  {
    id: 'mould-plastic-spoon-die',
    name: 'Plastic Injection Spoon Mould (Multi-Cavity)',
    category: 'moulds-dies',
    categoryLabel: 'Plastic Moulds & Dies',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    description: 'High-precision multi-cavity injection mould for producing disposable cutlery and spoons with high speed cycle times.',
    specs: { mouldMaterial: 'Aluminium / P20 Mold Steel', surfaceFinishing: 'Mirror Polish', bodyMaterial: 'P20 Steel Core & Cavity', guarantee: '1,000,000 Shots Life' },
    features: ['Balanced Hot Runner System Available', 'Optimal Water Cooling Channels', 'Ultra Fast Cycle Time (< 8s)'],
    isPopular: true
  },
  {
    id: 'mould-food-container-die',
    name: 'Plastic Food Container & Lid Injection Mould',
    category: 'moulds-dies',
    categoryLabel: 'Plastic Moulds & Dies',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    description: 'Custom engineered injection moulding dies for round and rectangular food containers with leak-proof lid fitment.',
    specs: { mouldMaterial: 'P20 / H13 Hardened Steel', usage: 'High Speed Injection Press', hardness: '32 HRC Steel Hardness' },
    features: ['3D CAD/CAM CNC Machined', 'Minimal Flash Edges', 'High Volume Output']
  }
];
