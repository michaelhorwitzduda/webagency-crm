import type { Client } from './ClientList';

// Sample client with complete brand guidelines
export const sampleClientWithBranding: Client = {
  id: '1',
  businessName: "Mike's Plumbing Services",
  contactPerson: 'Mike Johnson',
  businessType: 'Plumbing',
  phone: '(555) 123-4567',
  email: 'mike@mikesplumbing.com',
  websiteStatus: 'Live',
  city: 'Austin, TX',
  monthlyFee: '$149',
  address: '123 Main Street',
  websiteUrl: 'https://www.mikesplumbing.com',
  joinDate: 'November 2025',
  totalPaid: '$2,980',
  logo: 'https://images.unsplash.com/photo-1649959738547-5327b51ca2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  businessDescription: 'Family-owned plumbing service providing residential and commercial solutions in the Austin area for over 15 years. Specializing in emergency repairs, installations, and maintenance.',
  industry: 'Home Services - Plumbing',
  brandGuidelines: {
    toneOfVoice: 'Professional yet friendly. We speak directly to homeowners with warmth and expertise. Avoid jargon, be reassuring, and emphasize our reliability and quick response times.',
    colors: {
      primary: '#2563eb',
      secondary: '#1e40af',
      accent: '#f59e0b'
    },
    fonts: {
      heading: 'Montserrat Bold',
      body: 'Open Sans Regular'
    }
  },
  notes: 'Prefers communication via email. Very responsive to project updates. Plans to add blog content in Q2 2026.'
};

export const sampleClientElectric: Client = {
  id: '2',
  businessName: 'Elite Electric Co.',
  contactPerson: 'Sarah Williams',
  businessType: 'Electrician',
  phone: '(555) 234-5678',
  email: 'sarah@eliteelectric.com',
  websiteStatus: 'Development',
  city: 'Dallas, TX',
  monthlyFee: '$199',
  address: '456 Oak Avenue',
  joinDate: 'December 2025',
  totalPaid: '$3,200',
  logo: 'https://images.unsplash.com/flagged/photo-1587096472434-8b65b343980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  businessDescription: 'Licensed electrical contractors serving the Dallas-Fort Worth metroplex. We handle everything from simple repairs to complete rewiring and commercial installations.',
  industry: 'Home Services - Electrical',
  brandGuidelines: {
    toneOfVoice: 'Confident and safety-focused. Emphasize our licensed expertise and commitment to code compliance. Use clear, straightforward language that builds trust.',
    colors: {
      primary: '#eab308',
      secondary: '#ca8a04',
      accent: '#1f2937'
    },
    fonts: {
      heading: 'Roboto Bold',
      body: 'Roboto Regular'
    }
  }
};

export const sampleClientHVAC: Client = {
  id: '3',
  businessName: 'Cool Air HVAC',
  contactPerson: 'Robert Davis',
  businessType: 'HVAC',
  phone: '(555) 345-6789',
  email: 'rob@coolairhvac.com',
  websiteStatus: 'Live',
  city: 'Houston, TX',
  monthlyFee: '$179',
  address: '789 Climate Drive',
  websiteUrl: 'https://www.coolairhvac.com',
  joinDate: 'October 2025',
  totalPaid: '$4,120',
  logo: 'https://images.unsplash.com/photo-1706696951283-04927dfe50a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  businessDescription: 'Houston\'s trusted HVAC specialists providing installation, repair, and maintenance of heating and cooling systems for residential and commercial properties.',
  industry: 'Home Services - HVAC',
  brandGuidelines: {
    toneOfVoice: 'Knowledgeable and helpful. We educate customers about their HVAC systems while maintaining a comfortable, approachable tone. Focus on energy efficiency and comfort.',
    colors: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#ec4899'
    },
    fonts: {
      heading: 'Inter Bold',
      body: 'Inter Regular'
    }
  },
  notes: 'Very active on social media. Prefers monthly performance reports. Interested in adding a customer portal.'
};
