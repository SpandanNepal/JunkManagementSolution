import { VendorProps } from "../pages/Vendor";

function generateRandomCompanyName(): string {
    const companies = [
      "Tech Solutions Inc.",
      "GreenEarth Recycling",
      "QuickFix Junk Removal",
      "Prime Disposal Co.",
      "EcoWaste Solutions",
      "CityWide Hauling",
      "RapidWaste Removal",
      "FastTrack Services",
      "TotalWaste Management",
      "Smart Disposal",
      "Urban Junk Removal",
      "ProGreen Disposal",
      "JunkBusters",
      "EasyClean Waste",
      "EnviroWaste Solutions",
      "MaxRemoval Co.",
      "AllPro Junk Pickup",
      "CleanSweep Disposal",
      "GreenLeaf Haulers",
      "ZeroWaste Solutions",
      "Rapid Recycling Solutions",
      "CleanWaste Corp.",
      "Efficient Disposal Services",
      "WasteNot Solutions",
      "EcoService Junk Removal",
      "FastClean Services",
      "WastePro Industries",
      "TotalWaste Disposal",
      "ProWaste Removal",
      "CleanSweep Junk Co.",
      "EcoFriendly Hauling",
      "Speedy Junk Removal",
      "CleanIt Up Inc.",
      "Quickhaul Waste Solutions",
      "RecycleMax",
      "ReNew Waste Management",
      "FastJunk Haulers",
      "SolidWaste Solutions",
      "Green Disposal Pros",
      "WasteKlean"
    ];
  
    return companies[Math.floor(Math.random() * companies.length)];
  }

// Generate random data for a vendor
const generateVendorData = (index: number): VendorProps => {
  // Generate a vendor's data based on the index
  return {
    vendorId: index.toString(),  // Unique ID for the vendor (string)
    name: generateRandomCompanyName(),  // Example: Vendor 1, Vendor 2, etc.
    company: `Company ${index}`,  // Company name
    rating: Math.floor(Math.random() * 5) + 1,  // Random rating between 1 and 5
    state: ['NY', 'CA', 'TX', 'FL', 'IL', 'WA', 'OR', 'NV', 'AZ', 'CO'][index % 10],  // Random state
    zipcode: `9${Math.floor(Math.random() * 90000) + 10000}`,  // Random zipcode starting with 9
    bio: `This is a bio for Vendor ${index}. They offer a variety of services such as junk removal, recycling, and waste disposal.`,  // Vendor bio
    email: `vendor${index}@example.com`,  // Email in the format vendor1@example.com
    phone: `(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,  // Random phone number
    address: `${Math.floor(Math.random() * 1000) + 100} Vendor St, City ${index}, ${['NY', 'CA', 'TX', 'FL', 'IL', 'WA', 'OR', 'NV', 'AZ', 'CO'][index % 10]}`,  // Random address
    imageUrl: `https://randomuser.me/api/portraits/men/${(index % 10) + 1}.jpg`,  // Random profile picture from randomuser.me
    description: `Vendor ${index} offers high-quality junk removal and disposal services. They are well known for their fast, reliable, and affordable services.`,  // Vendor description
    services: ['Junk Pickup', 'Recycling', 'Demolition', 'Yard Waste Removal'].slice(index % 4),  // Random service type (wrap in array)
    availability: `Mon-Fri: 9 AM to 6 PM`,  // Vendor availability
  };
};

// Generate 10,000 dummy vendors
const dummyVendors: VendorProps[] = [];
for (let i = 1; i <= 10000; i++) {
  dummyVendors.push(generateVendorData(i));
}

export default dummyVendors;