export interface Provider {
  id: string;
  name: string;
  compoundName: string;
  phone: string;
  whatsapp: string;
  email: string;
  verified: boolean;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  totalListings: number;
  rating: number;
  joinedDate: string;
  avatar: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  comment: string;
  date: string;
  verifiedStay: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  campus: string;
  location: string;
  city: string;
  price: number;
  type: 'shared' | 'private' | 'en-suite' | 'studio';
  genderPreference: 'male' | 'female' | 'mixed';
  distanceFromCampus: string;
  available: boolean;
  availableSpots: number;
  totalSpots: number;
  images: {src: string;alt: string;}[];
  amenities: string[];
  provider: Provider;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured: boolean;
  verified: boolean;
  createdAt: string;
}

export const providers: Provider[] = [
{
  id: 'prov-001',
  name: 'Chanda Mwale',
  compoundName: 'Mwale Student Residences',
  phone: '+260 97 123 4567',
  whatsapp: '+260971234567',
  email: 'chanda@mwaleresidences.zm',
  verified: true,
  verificationStatus: 'verified',
  totalListings: 3,
  rating: 4.9,
  joinedDate: '2024-01-15',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9a3e041-1768577277093.png"
},
{
  id: 'prov-002',
  name: 'Bwalya Mutale',
  compoundName: 'Copperbelt Student Homes',
  phone: '+260 96 234 5678',
  whatsapp: '+260962345678',
  email: 'bwalya@cbshomes.zm',
  verified: true,
  verificationStatus: 'verified',
  totalListings: 2,
  rating: 4.7,
  joinedDate: '2024-03-10',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae4dcd08-1774432739808.png"
},
{
  id: 'prov-003',
  name: 'Mutinta Haambote',
  compoundName: 'Haambote Properties',
  phone: '+260 95 345 6789',
  whatsapp: '+260953456789',
  email: 'mutinta@haambote.zm',
  verified: true,
  verificationStatus: 'verified',
  totalListings: 3,
  rating: 4.8,
  joinedDate: '2023-11-20',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_110d2be67-1772145092576.png"
},
{
  id: 'prov-004',
  name: 'Kelvin Phiri',
  compoundName: 'Phiri Accommodation Services',
  phone: '+260 97 456 7890',
  whatsapp: '+260974567890',
  email: 'kelvin@phiriaccommodation.zm',
  verified: false,
  verificationStatus: 'pending',
  totalListings: 1,
  rating: 4.3,
  joinedDate: '2025-01-05',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1806a4f-1769407166543.png"
},
{
  id: 'prov-005',
  name: 'Grace Banda',
  compoundName: 'Banda Student Lodge',
  phone: '+260 96 567 8901',
  whatsapp: '+260965678901',
  email: 'grace@bandalodge.zm',
  verified: true,
  verificationStatus: 'verified',
  totalListings: 2,
  rating: 4.6,
  joinedDate: '2024-06-01',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6170a29-1777070208986.png"
},
{
  id: 'prov-006',
  name: 'Moses Tembo',
  compoundName: 'Tembo Hostels Zambia',
  phone: '+260 95 678 9012',
  whatsapp: '+260956789012',
  email: 'moses@tembohostels.zm',
  verified: true,
  verificationStatus: 'verified',
  totalListings: 3,
  rating: 4.5,
  joinedDate: '2023-09-14',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd6de8cb-1777377854819.png"
}];


export const properties: Property[] = [
{
  id: 'prop-001',
  title: 'Northmead Student Lodge — En-Suite Rooms',
  description:
  'Premium en-suite rooms located just minutes from UNZA main gate. Each room comes fully furnished with a study desk, wardrobe, and private bathroom. The compound is gated with 24/7 security and CCTV. High-speed WiFi is available throughout. Ideal for serious students who value comfort and security.',
  campus: 'UNZA',
  location: 'Northmead, Lusaka',
  city: 'Lusaka',
  price: 2800,
  type: 'en-suite',
  genderPreference: 'mixed',
  distanceFromCampus: '0.8 km',
  available: true,
  availableSpots: 3,
  totalSpots: 10,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_199470cc0-1777377987405.png", alt: 'Modern en-suite student room with white walls and study desk near window' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1424caa00-1772145093180.png", alt: 'Bright student room interior with wooden furniture and natural lighting' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Furnished', 'CCTV'],
  provider: providers[0],
  rating: 4.9,
  reviewCount: 47,
  reviews: [
  { id: 'rev-001', authorName: 'Chipo Mwanza', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1943d7c62-1770125569792.png", rating: 5, comment: 'Best accommodation near UNZA. Very clean and secure. The landlord is responsive and professional.', date: '2025-03-15', verifiedStay: true },
  { id: 'rev-002', authorName: 'Mulenga Kapata', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae4dcd08-1774432739808.png", rating: 5, comment: 'WiFi is fast and reliable. Room is exactly as shown in photos. Highly recommend!', date: '2025-02-20', verifiedStay: true }],

  featured: true,
  verified: true,
  createdAt: '2024-08-01'
},
{
  id: 'prop-002',
  title: 'Riverside Shared Rooms — CBU Campus',
  description:
  'Affordable shared rooms near Copperbelt University. Each room accommodates 2 students with individual study areas. The compound has a communal kitchen, laundry facilities, and a study lounge. Water and electricity are included in the monthly rent.',
  campus: 'CBU',
  location: 'Riverside, Kitwe',
  city: 'Kitwe',
  price: 1500,
  type: 'shared',
  genderPreference: 'male',
  distanceFromCampus: '1.2 km',
  available: true,
  availableSpots: 5,
  totalSpots: 20,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1277fe566-1777377987430.png", alt: 'Shared student room with two beds and organized storage in Kitwe' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7047b5-1768397087598.png", alt: 'Communal study area with desks and chairs for students' }],

  amenities: ['WiFi', 'Water', 'Kitchen', 'Laundry', 'Electricity'],
  provider: providers[1],
  rating: 4.7,
  reviewCount: 31,
  reviews: [
  { id: 'rev-003', authorName: 'Bupe Chanda', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_110d2be67-1772145092576.png", rating: 5, comment: 'Great value for money. The kitchen is well-equipped and the compound is clean.', date: '2025-01-10', verifiedStay: true }],

  featured: true,
  verified: true,
  createdAt: '2024-07-15'
},
{
  id: 'prop-003',
  title: 'Mukuba Heights — Private Studio',
  description:
  'Self-contained studio apartments near MUKUBA University in Kitwe. Each unit has a private kitchenette, bathroom, and living area. Perfect for postgraduate students or those who prefer complete privacy. Parking available on-site.',
  campus: 'MUKUBA',
  location: 'Parklands, Kitwe',
  city: 'Kitwe',
  price: 3500,
  type: 'studio',
  genderPreference: 'mixed',
  distanceFromCampus: '0.5 km',
  available: false,
  availableSpots: 0,
  totalSpots: 8,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_17bf7e44e-1777377987686.png", alt: 'Compact studio apartment with kitchenette and modern furniture near MUKUBA' }],

  amenities: ['WiFi', 'Water', 'Kitchen', 'Parking', 'Security', 'Electricity'],
  provider: providers[2],
  rating: 4.8,
  reviewCount: 28,
  reviews: [
  { id: 'rev-004', authorName: 'Natasha Phiri', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a132f334-1764788576909.png", rating: 5, comment: 'The studio is perfect for studying. Very quiet and private. Worth every kwacha.', date: '2025-02-05', verifiedStay: true }],

  featured: true,
  verified: true,
  createdAt: '2024-06-20'
},
{
  id: 'prop-004',
  title: 'Mulungushi View — Female Hostel',
  description:
  'Safe and comfortable female-only hostel near Mulungushi University in Kabwe. The hostel has a matron on duty, CCTV, and a secure gate. Rooms are furnished and include study desks. Communal bathrooms are cleaned daily.',
  campus: 'Mulungushi',
  location: 'Kabwe Central',
  city: 'Kabwe',
  price: 1800,
  type: 'shared',
  genderPreference: 'female',
  distanceFromCampus: '0.3 km',
  available: true,
  availableSpots: 8,
  totalSpots: 30,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_19db6f9d8-1777377988913.png", alt: 'Female student hostel room with neat beds and study area in Kabwe' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Furnished', 'CCTV'],
  provider: providers[4],
  rating: 4.6,
  reviewCount: 19,
  reviews: [
  { id: 'rev-005', authorName: 'Thandiwe Mwale', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6170a29-1777070208986.png", rating: 4, comment: 'Very safe and clean. The matron is strict but caring. Good for first-year students.', date: '2025-03-01', verifiedStay: true }],

  featured: false,
  verified: true,
  createdAt: '2024-09-10'
},
{
  id: 'prop-005',
  title: 'Kwame Nkrumah Annexe Rooms',
  description:
  'Budget-friendly rooms near Kwame Nkrumah University in Kabwe. Shared rooms available for 2-3 students. Basic amenities included. Close to campus and local markets.',
  campus: 'Kwame Nkrumah',
  location: 'Kabwe North',
  city: 'Kabwe',
  price: 1200,
  type: 'shared',
  genderPreference: 'mixed',
  distanceFromCampus: '1.5 km',
  available: true,
  availableSpots: 12,
  totalSpots: 24,
  images: [
  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12c936ae9-1772145093120.png', alt: 'Budget shared student room with basic furnishings near Kwame Nkrumah University' }],

  amenities: ['Water', 'Electricity', 'Security'],
  provider: providers[3],
  rating: 4.3,
  reviewCount: 14,
  reviews: [],
  featured: false,
  verified: false,
  createdAt: '2025-01-20'
},
{
  id: 'prop-006',
  title: 'UNILUS Garden Flats — Private Rooms',
  description:
  'Modern private rooms in a garden setting near UNILUS in Lusaka. Each room has a private entrance, en-suite bathroom, and study area. The compound has a swimming pool, gym, and braai area. Premium student living at its finest.',
  campus: 'UNILUS',
  location: 'Longacres, Lusaka',
  city: 'Lusaka',
  price: 4200,
  type: 'private',
  genderPreference: 'mixed',
  distanceFromCampus: '0.6 km',
  available: true,
  availableSpots: 2,
  totalSpots: 12,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_102b09c72-1777377853866.png", alt: 'Premium private student room with garden view near UNILUS Lusaka' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Parking', 'Gym', 'Pool'],
  provider: providers[5],
  rating: 4.9,
  reviewCount: 54,
  reviews: [
  { id: 'rev-006', authorName: 'Luyando Banda', authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb1a7038-1777377987614.png", rating: 5, comment: 'This is the best student accommodation in Lusaka. The pool and gym are a bonus!', date: '2025-03-20', verifiedStay: true }],

  featured: true,
  verified: true,
  createdAt: '2024-05-01'
},
{
  id: 'prop-007',
  title: 'Ndola Student Quarters — CBU Annex',
  description:
  'Comfortable rooms near CBU in Ndola. Shared and private options available. The compound has a communal lounge, kitchen, and laundry. Water and electricity included.',
  campus: 'CBU',
  location: 'Ndola Central',
  city: 'Ndola',
  price: 1600,
  type: 'shared',
  genderPreference: 'mixed',
  distanceFromCampus: '2.0 km',
  available: true,
  availableSpots: 6,
  totalSpots: 18,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_12c936ae9-1772145093120.png", alt: 'Student shared room in Ndola with clean furnishings and study space' }],

  amenities: ['WiFi', 'Water', 'Kitchen', 'Electricity', 'Laundry'],
  provider: providers[1],
  rating: 4.4,
  reviewCount: 22,
  reviews: [],
  featured: false,
  verified: true,
  createdAt: '2024-10-05'
},
{
  id: 'prop-008',
  title: 'Great East Road Hostel — UNZA',
  description:
  'Affordable hostel accommodation on Great East Road, walking distance to UNZA. Rooms for 2-4 students. Communal facilities include kitchen, bathrooms, and a TV lounge. Security guard on duty 24/7.',
  campus: 'UNZA',
  location: 'Great East Road, Lusaka',
  city: 'Lusaka',
  price: 1400,
  type: 'shared',
  genderPreference: 'male',
  distanceFromCampus: '1.0 km',
  available: true,
  availableSpots: 10,
  totalSpots: 40,
  images: [
  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18ba03398-1771488812434.png', alt: 'Affordable student hostel room near UNZA on Great East Road Lusaka' }],

  amenities: ['Water', 'Security', 'Electricity', 'Kitchen'],
  provider: providers[0],
  rating: 4.2,
  reviewCount: 38,
  reviews: [],
  featured: false,
  verified: true,
  createdAt: '2024-04-15'
},
{
  id: 'prop-009',
  title: 'Parklands En-Suite — MUKUBA',
  description:
  'Modern en-suite rooms in Parklands, Kitwe, close to MUKUBA University. Each room has a private bathroom, study desk, wardrobe, and bed. High-speed internet and DSTV included.',
  campus: 'MUKUBA',
  location: 'Parklands, Kitwe',
  city: 'Kitwe',
  price: 2500,
  type: 'en-suite',
  genderPreference: 'female',
  distanceFromCampus: '0.7 km',
  available: true,
  availableSpots: 4,
  totalSpots: 15,
  images: [
  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d6bb2b9-1773665075955.png', alt: 'Modern en-suite student room in Parklands Kitwe near MUKUBA University' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Furnished', 'DSTV'],
  provider: providers[2],
  rating: 4.7,
  reviewCount: 16,
  reviews: [],
  featured: false,
  verified: true,
  createdAt: '2024-11-01'
},
{
  id: 'prop-010',
  title: 'Kabwe Student Village — Mulungushi',
  description:
  'Large student village near Mulungushi University. Various room types available from shared to private. On-site tuck shop, laundry, and study rooms. Shuttle service to campus available.',
  campus: 'Mulungushi',
  location: 'Kabwe West',
  city: 'Kabwe',
  price: 2000,
  type: 'private',
  genderPreference: 'mixed',
  distanceFromCampus: '1.8 km',
  available: true,
  availableSpots: 15,
  totalSpots: 50,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1534b89f2-1777377852502.png", alt: 'Student village accommodation near Mulungushi University in Kabwe' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Laundry', 'Shuttle'],
  provider: providers[4],
  rating: 4.5,
  reviewCount: 29,
  reviews: [],
  featured: false,
  verified: true,
  createdAt: '2024-03-20'
},
{
  id: 'prop-011',
  title: 'Lusaka West Boarding House — UNILUS',
  description:
  'Clean and affordable boarding house near UNILUS. Rooms available for 1-2 students. Meals can be arranged with the landlady. Safe neighborhood with good transport links.',
  campus: 'UNILUS',
  location: 'Lusaka West',
  city: 'Lusaka',
  price: 1900,
  type: 'shared',
  genderPreference: 'female',
  distanceFromCampus: '1.3 km',
  available: true,
  availableSpots: 3,
  totalSpots: 10,
  images: [
  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12c936ae9-1772145093120.png', alt: 'Clean boarding house room near UNILUS in Lusaka West' }],

  amenities: ['Water', 'Security', 'Electricity', 'Kitchen'],
  provider: providers[5],
  rating: 4.3,
  reviewCount: 11,
  reviews: [],
  featured: false,
  verified: true,
  createdAt: '2025-02-01'
},
{
  id: 'prop-012',
  title: 'Kamwala Student Flats — UNZA',
  description:
  'Self-contained flats in Kamwala, close to UNZA. Each flat has a bedroom, sitting room, kitchen, and bathroom. Ideal for couples or students who want more space. Secure parking available.',
  campus: 'UNZA',
  location: 'Kamwala, Lusaka',
  city: 'Lusaka',
  price: 3200,
  type: 'studio',
  genderPreference: 'mixed',
  distanceFromCampus: '1.1 km',
  available: true,
  availableSpots: 2,
  totalSpots: 8,
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9777336-1777377852284.png", alt: 'Self-contained student flat in Kamwala Lusaka near UNZA campus' }],

  amenities: ['WiFi', 'Water', 'Security', 'Electricity', 'Kitchen', 'Parking'],
  provider: providers[0],
  rating: 4.6,
  reviewCount: 23,
  reviews: [],
  featured: true,
  verified: true,
  createdAt: '2024-12-10'
}];


export const universities = [
{ id: 'unza', name: 'UNZA', fullName: 'University of Zambia', city: 'Lusaka', color: 'bg-green-100 text-green-700' },
{ id: 'cbu', name: 'CBU', fullName: 'Copperbelt University', city: 'Kitwe', color: 'bg-blue-100 text-blue-700' },
{ id: 'mukuba', name: 'MUKUBA', fullName: 'Mukuba University', city: 'Kitwe', color: 'bg-amber-100 text-amber-700' },
{ id: 'mulungushi', name: 'Mulungushi', fullName: 'Mulungushi University', city: 'Kabwe', color: 'bg-purple-100 text-purple-700' },
{ id: 'kwame', name: 'Kwame Nkrumah', fullName: 'Kwame Nkrumah University', city: 'Kabwe', color: 'bg-red-100 text-red-700' },
{ id: 'unilus', name: 'UNILUS', fullName: 'University of Lusaka', city: 'Lusaka', color: 'bg-teal-100 text-teal-700' }];