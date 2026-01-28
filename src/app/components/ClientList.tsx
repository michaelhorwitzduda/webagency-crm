import { useState } from 'react';
import { Search, ChevronDown, Plus, Phone, Mail, Globe, Edit2, Trash2 } from 'lucide-react';

export interface Client {
  id: string;
  businessName: string;
  contactPerson: string;
  businessType: 'Plumbing' | 'Electrician' | 'HVAC' | 'Other';
  phone: string;
  email: string;
  websiteStatus: 'Live' | 'Development' | 'Design' | 'Planning' | 'Inactive';
  city: string;
  monthlyFee: string;
  // New fields for enhanced profile
  logo?: string;
  businessDescription?: string;
  industry?: string;
  brandGuidelines?: {
    toneOfVoice?: string;
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
    fonts?: {
      heading?: string;
      body?: string;
    };
  };
}

export const mockClients: Client[] = [
  {
    id: '1',
    businessName: "Mike's Plumbing Services",
    contactPerson: 'Mike Johnson',
    businessType: 'Plumbing',
    phone: '(555) 123-4567',
    email: 'mike@mikesplumbing.com',
    websiteStatus: 'Live',
    city: 'Austin, TX',
    monthlyFee: '$149'
  },
  {
    id: '2',
    businessName: 'Elite Electric Co.',
    contactPerson: 'Sarah Williams',
    businessType: 'Electrician',
    phone: '(555) 234-5678',
    email: 'sarah@eliteelectric.com',
    websiteStatus: 'Development',
    city: 'Dallas, TX',
    monthlyFee: '$199'
  },
  {
    id: '3',
    businessName: 'Cool Air HVAC',
    contactPerson: 'Robert Davis',
    businessType: 'HVAC',
    phone: '(555) 345-6789',
    email: 'rob@coolairhvac.com',
    websiteStatus: 'Live',
    city: 'Houston, TX',
    monthlyFee: '$179'
  },
  {
    id: '4',
    businessName: 'Fast Fix Plumbing',
    contactPerson: 'Jennifer Brown',
    businessType: 'Plumbing',
    phone: '(555) 456-7890',
    email: 'jen@fastfixplumbing.com',
    websiteStatus: 'Design',
    city: 'San Antonio, TX',
    monthlyFee: '$149'
  },
  {
    id: '5',
    businessName: 'Bright Light Electrical',
    contactPerson: 'Michael Chen',
    businessType: 'Electrician',
    phone: '(555) 567-8901',
    email: 'michael@brightlight.com',
    websiteStatus: 'Live',
    city: 'Phoenix, AZ',
    monthlyFee: '$199'
  },
  {
    id: '6',
    businessName: 'Climate Control Experts',
    contactPerson: 'Lisa Martinez',
    businessType: 'HVAC',
    phone: '(555) 678-9012',
    email: 'lisa@climatecontrol.com',
    websiteStatus: 'Development',
    city: 'Denver, CO',
    monthlyFee: '$179'
  },
  {
    id: '7',
    businessName: 'Pro Plumbing Solutions',
    contactPerson: 'David Anderson',
    businessType: 'Plumbing',
    phone: '(555) 789-0123',
    email: 'david@proplumbing.com',
    websiteStatus: 'Live',
    city: 'Seattle, WA',
    monthlyFee: '$149'
  },
  {
    id: '8',
    businessName: 'AllTemp HVAC Services',
    contactPerson: 'Amanda Taylor',
    businessType: 'HVAC',
    phone: '(555) 890-1234',
    email: 'amanda@alltempac.com',
    websiteStatus: 'Inactive',
    city: 'Portland, OR',
    monthlyFee: '$179'
  },
];

interface ClientListProps {
  onClientSelect: (client: Client) => void;
}

export function ClientList({ onClientSelect }: ClientListProps) {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || client.websiteStatus === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClients = filteredClients.slice(startIndex, startIndex + itemsPerPage);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-[rgba(22,192,152,0.38)] text-[#008767] border border-[#00b087]';
      case 'Development':
        return 'bg-[#fef4e6] text-[#f59e0b] border border-[#f59e0b]';
      case 'Design':
        return 'bg-[#eef2ff] text-[#5932ea] border border-[#5932ea]';
      case 'Planning':
        return 'bg-[#e0f2fe] text-[#0284c7] border border-[#0284c7]';
      case 'Inactive':
        return 'bg-[#ffc5c5] text-[#df0404] border border-[#df0404]';
      default:
        return 'bg-[#f5f5f5] text-[#404b52] border border-[#eee]';
    }
  };

  return (
    <div className="p-[40px]">
      <div className="flex items-center justify-between mb-[32px]">
        <div>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
            Clients
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#757575] mt-1">
            Manage your website clients
          </p>
        </div>
        <button className="flex items-center gap-[8px] bg-[#5932ea] text-white px-[20px] py-[12px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] hover:bg-[#4a28c9] transition-colors">
          <Plus className="w-[18px] h-[18px]" strokeWidth={2} />
          Add Client
        </button>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)] p-[38px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[32px]">
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              All Clients
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#16c098] tracking-[-0.14px] mt-[4px]">
              Active Members
            </p>
          </div>

          <div className="flex items-center gap-[16px]">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#f9fbff] h-[38px] w-[216px] rounded-[10px] pl-[16px] pr-[40px] font-['Poppins:Regular',sans-serif] text-[12px] text-black placeholder:text-[#b5b7c0] outline-none border-none"
              />
              <Search className="absolute right-[12px] top-[50%] -translate-y-1/2 w-[18px] h-[18px] text-[#7e7e7e]" strokeWidth={2} />
            </div>

            {/* Filter */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#f9fbff] h-[38px] w-[154px] rounded-[10px] px-[12px] font-['Poppins:Regular',sans-serif] text-[12px] text-[#7e7e7e] appearance-none outline-none border-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="Live">Live</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Planning">Planning</option>
                <option value="Inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-[12px] top-[50%] -translate-y-1/2 w-[18px] h-[18px] text-[#3d3c42] pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#eee]">
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Business Name
                </th>
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Contact Person
                </th>
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Type
                </th>
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Phone
                </th>
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Email
                </th>
                <th className="text-left pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  City
                </th>
                <th className="text-center pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Status
                </th>
                <th className="text-center pb-[16px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedClients.map((client) => (
                <tr key={client.id} className="border-b border-[#eee] last:border-0">
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    <button
                      onClick={() => onClientSelect(client)}
                      className="text-[#5932ea] hover:underline text-left"
                    >
                      {client.businessName}
                    </button>
                  </td>
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    {client.contactPerson}
                  </td>
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    {client.businessType}
                  </td>
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    {client.phone}
                  </td>
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    {client.email}
                  </td>
                  <td className="py-[20px] font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] tracking-[-0.14px]">
                    {client.city}
                  </td>
                  <td className="py-[20px] text-center">
                    <span className={`inline-block px-[12px] py-[4px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[14px] tracking-[-0.14px] ${getStatusStyle(client.websiteStatus)}`}>
                      {client.websiteStatus}
                    </span>
                  </td>
                  <td className="py-[20px]">
                    <div className="flex items-center justify-center gap-[8px]">
                      <button className="p-[6px] hover:bg-[#f9fbff] rounded-[6px] transition-colors">
                        <Edit2 className="w-[16px] h-[16px] text-[#5932ea]" strokeWidth={2} />
                      </button>
                      <button className="p-[6px] hover:bg-[#ffc5c5] rounded-[6px] transition-colors">
                        <Trash2 className="w-[16px] h-[16px] text-[#df0404]" strokeWidth={2} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-[32px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#b5b7c0] tracking-[-0.14px]">
            Showing data {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredClients.length)} of {filteredClients.length} entries
          </p>
          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="bg-[#f5f5f5] border border-[#eee] px-[9px] py-[6px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] text-[#404b52] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: Math.min(4, totalPages) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-[10px] py-[6px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] ${
                  currentPage === page
                    ? 'bg-[#5932ea] text-white border border-[#5932ea]'
                    : 'bg-[#f5f5f5] text-[#404b52] border border-[#eee]'
                }`}
              >
                {page}
              </button>
            ))}
            {totalPages > 4 && (
              <>
                <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-black">...</span>
                <button
                  className="bg-[#f5f5f5] border border-[#eee] px-[5px] py-[6px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] text-[#404b52]"
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="bg-[#f5f5f5] border border-[#eee] px-[9px] py-[6px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] text-[#404b52] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}