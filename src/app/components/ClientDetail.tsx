import { ArrowLeft, Phone, Mail, MapPin, Calendar, DollarSign, Globe, Edit2, ExternalLink, Clock, TrendingUp, Palette, Type, MessageSquare, Building2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Client {
  id: string;
  businessName: string;
  contactPerson: string;
  businessType: 'Plumbing' | 'Electrician' | 'HVAC' | 'Other';
  phone: string;
  email: string;
  websiteStatus: 'Live' | 'Development' | 'Design' | 'Planning' | 'Inactive';
  city: string;
  monthlyFee: string;
  address?: string;
  websiteUrl?: string;
  joinDate?: string;
  totalPaid?: string;
  notes?: string;
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

interface Project {
  id: string;
  projectType: 'New Website' | 'Redesign' | 'Maintenance' | 'SEO';
  status: 'Planning' | 'Design' | 'Development' | 'Testing' | 'Live' | 'On Hold';
  startDate: string;
  completedDate?: string;
  progress: number;
  budget: string;
  description: string;
}

interface ClientDetailProps {
  client: Client;
  onBack: () => void;
}

export function ClientDetail({ client, onBack }: ClientDetailProps) {
  // Mock projects for this client
  const clientProjects: Project[] = [
    {
      id: '1',
      projectType: 'New Website',
      status: 'Live',
      startDate: '2025-11-15',
      completedDate: '2026-01-15',
      progress: 100,
      budget: '$2,500',
      description: 'Full website design and development with contact forms, service pages, and SEO optimization'
    },
    {
      id: '2',
      projectType: 'SEO',
      status: 'Development',
      startDate: '2026-01-20',
      progress: 45,
      budget: '$800',
      description: 'Local SEO optimization and Google My Business setup'
    },
  ];

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
      case 'Testing':
        return 'bg-[#f3e8ff] text-[#a855f7] border border-[#a855f7]';
      case 'Inactive':
      case 'On Hold':
        return 'bg-[#ffc5c5] text-[#df0404] border border-[#df0404]';
      default:
        return 'bg-[#f5f5f5] text-[#404b52] border border-[#eee]';
    }
  };

  const websiteUrl = client.websiteUrl || `https://www.${client.businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

  // Default logo based on business type
  const getDefaultLogo = () => {
    switch (client.businessType) {
      case 'Plumbing':
        return 'https://images.unsplash.com/photo-1649959738547-5327b51ca2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400';
      case 'Electrician':
        return 'https://images.unsplash.com/flagged/photo-1587096472434-8b65b343980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400';
      case 'HVAC':
        return 'https://images.unsplash.com/photo-1706696951283-04927dfe50a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400';
      default:
        return 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400';
    }
  };

  return (
    <div className="p-[40px]">
      {/* Header */}
      <div className="mb-[32px]">
        <button
          onClick={onBack}
          className="flex items-center gap-[8px] text-[#5932ea] mb-[16px] hover:underline"
        >
          <ArrowLeft className="w-[20px] h-[20px]" strokeWidth={2} />
          <span className="font-['Poppins:Medium',sans-serif] text-[14px]">Back to Clients</span>
        </button>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-[20px] flex-1">
            {/* Logo */}
            <div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden bg-white border-2 border-[#eee] flex items-center justify-center shrink-0">
              <ImageWithFallback
                src={client.logo || getDefaultLogo()}
                alt={`${client.businessName} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
                {client.businessName}
              </h1>
              <div className="flex items-center gap-[12px] mt-[8px]">
                <span className={`px-[12px] py-[4px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[14px] ${getStatusStyle(client.websiteStatus)}`}>
                  {client.websiteStatus}
                </span>
                <span className="px-[12px] py-[4px] rounded-[4px] bg-[#f9fbff] font-['Poppins:Medium',sans-serif] text-[14px] text-[#757575]">
                  {client.businessType}
                </span>
                {client.industry && (
                  <span className="px-[12px] py-[4px] rounded-[4px] bg-[#f9fbff] font-['Poppins:Medium',sans-serif] text-[14px] text-[#757575]">
                    {client.industry}
                  </span>
                )}
              </div>
              {client.businessDescription && (
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575] mt-[12px] max-w-[600px]">
                  {client.businessDescription}
                </p>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-[12px]">
            {client.websiteStatus === 'Live' && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[8px] bg-white border-2 border-[#5932ea] text-[#5932ea] px-[24px] py-[12px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] hover:bg-[#5932ea] hover:text-white transition-colors"
              >
                <Globe className="w-[18px] h-[18px]" strokeWidth={2} />
                View Website
                <ExternalLink className="w-[14px] h-[14px]" strokeWidth={2} />
              </a>
            )}
            <button className="flex items-center gap-[8px] bg-[#5932ea] text-white px-[24px] py-[12px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] hover:bg-[#4a28c9] transition-colors">
              <Edit2 className="w-[18px] h-[18px]" strokeWidth={2} />
              Edit Website
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-[20px] mb-[32px]">
        {[
          { 
            label: 'Total Projects', 
            value: clientProjects.length.toString(), 
            icon: Clock,
            color: 'bg-[#eef2ff]', 
            iconColor: 'text-[#5932ea]' 
          },
          { 
            label: 'Active Projects', 
            value: clientProjects.filter(p => p.status !== 'Live').length.toString(), 
            icon: TrendingUp,
            color: 'bg-[#fef4e6]', 
            iconColor: 'text-[#f59e0b]' 
          },
          { 
            label: 'Monthly Fee', 
            value: client.monthlyFee, 
            icon: DollarSign,
            color: 'bg-[#e8f5f1]', 
            iconColor: 'text-[#16c098]' 
          },
          { 
            label: 'Total Paid', 
            value: client.totalPaid || '$8,945', 
            icon: DollarSign,
            color: 'bg-[#f9fbff]', 
            iconColor: 'text-[#757575]' 
          },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.color} rounded-[12px] p-[20px]`}>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <Icon className={`w-[20px] h-[20px] ${stat.iconColor}`} strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                  {stat.label}
                </p>
              </div>
              <p className={`font-['Poppins:SemiBold',sans-serif] text-[28px] ${stat.iconColor}`}>
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-[24px] mb-[24px]">
        {/* Business Details */}
        <div className="col-span-1 bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black mb-[24px]">
            Business Details
          </h2>

          <div className="space-y-[24px]">
            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <Phone className="w-[18px] h-[18px] text-[#757575]" strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                  Phone
                </p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                {client.phone}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <Mail className="w-[18px] h-[18px] text-[#757575]" strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                  Email
                </p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                {client.email}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <MapPin className="w-[18px] h-[18px] text-[#757575]" strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                  Location
                </p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                {client.address || '123 Main Street'}
              </p>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#757575]">
                {client.city}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <Calendar className="w-[18px] h-[18px] text-[#757575]" strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                  Client Since
                </p>
              </div>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                {client.joinDate || 'November 2025'}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[8px] mb-[8px]">
                <Globe className="w-[18px] h-[18px] text-[#757575]" strokeWidth={2} />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                  Website URL
                </p>
              </div>
              {client.websiteStatus === 'Live' ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#5932ea] hover:underline break-all"
                >
                  {websiteUrl}
                </a>
              ) : (
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#757575]">
                  Coming soon
                </p>
              )}
            </div>
          </div>

          <div className="mt-[24px] pt-[24px] border-t border-[#eee]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-[12px]">
              Contact Person
            </h3>
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
              {client.contactPerson}
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#757575] mt-[4px]">
              Owner
            </p>
          </div>

          {client.notes && (
            <div className="mt-[24px] pt-[24px] border-t border-[#eee]">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-[12px]">
                Notes
              </h3>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                {client.notes}
              </p>
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="col-span-2 bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Projects
            </h2>
            <button className="flex items-center gap-[8px] bg-[#5932ea] text-white px-[16px] py-[8px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[12px] hover:bg-[#4a28c9] transition-colors">
              <ExternalLink className="w-[14px] h-[14px]" strokeWidth={2} />
              New Project
            </button>
          </div>

          <div className="space-y-[20px]">
            {clientProjects.map((project) => (
              <div key={project.id} className="border border-[#eee] rounded-[12px] p-[24px] hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-[16px]">
                  <div>
                    <div className="flex items-center gap-[12px] mb-[8px]">
                      <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
                        {project.projectType}
                      </h3>
                      <span className={`px-[12px] py-[4px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] ${getStatusStyle(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                      {project.description}
                    </p>
                  </div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#292d32]">
                    {project.budget}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-[16px]">
                  <div className="flex items-center justify-between mb-[8px]">
                    <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0]">
                      Progress
                    </span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#292d32]">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-[8px] bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#5932ea] rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-[24px] text-[12px]">
                  <div className="flex items-center gap-[6px]">
                    <Calendar className="w-[14px] h-[14px] text-[#757575]" strokeWidth={2} />
                    <span className="font-['Poppins:Regular',sans-serif] text-[#b5b7c0]">Started:</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[#292d32]">
                      {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  {project.completedDate && (
                    <div className="flex items-center gap-[6px]">
                      <Calendar className="w-[14px] h-[14px] text-[#16c098]" strokeWidth={2} />
                      <span className="font-['Poppins:Regular',sans-serif] text-[#b5b7c0]">Completed:</span>
                      <span className="font-['Poppins:Medium',sans-serif] text-[#16c098]">
                        {new Date(project.completedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div className="mt-[24px] pt-[24px] border-t border-[#eee]">
            <div className="grid grid-cols-3 gap-[16px]">
              <div className="p-[16px] bg-[#f9fbff] rounded-[12px]">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                  Total Budget
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#292d32]">
                  ${clientProjects.reduce((sum, p) => sum + parseInt(p.budget.replace(/[$,]/g, '')), 0).toLocaleString()}
                </p>
              </div>
              <div className="p-[16px] bg-[#f9fbff] rounded-[12px]">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                  Completed
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#16c098]">
                  {clientProjects.filter(p => p.status === 'Live').length}
                </p>
              </div>
              <div className="p-[16px] bg-[#f9fbff] rounded-[12px]">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                  In Progress
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#f59e0b]">
                  {clientProjects.filter(p => p.status !== 'Live').length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Guidelines Section */}
      {client.brandGuidelines && (
        <div className="bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center gap-[12px] mb-[24px]">
            <Palette className="w-[24px] h-[24px] text-[#5932ea]" strokeWidth={2} />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Brand Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            {/* Tone of Voice */}
            {client.brandGuidelines.toneOfVoice && (
              <div className="border border-[#eee] rounded-[12px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <MessageSquare className="w-[20px] h-[20px] text-[#5932ea]" strokeWidth={2} />
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                    Tone of Voice
                  </h3>
                </div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
                  {client.brandGuidelines.toneOfVoice}
                </p>
              </div>
            )}

            {/* Brand Colors */}
            {client.brandGuidelines.colors && (
              <div className="border border-[#eee] rounded-[12px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <Palette className="w-[20px] h-[20px] text-[#5932ea]" strokeWidth={2} />
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                    Brand Colors
                  </h3>
                </div>
                <div className="space-y-[12px]">
                  {client.brandGuidelines.colors.primary && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[12px]">
                        <div
                          className="w-[40px] h-[40px] rounded-[8px] border border-[#eee]"
                          style={{ backgroundColor: client.brandGuidelines.colors.primary }}
                        />
                        <div>
                          <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0]">
                            Primary
                          </p>
                          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                            {client.brandGuidelines.colors.primary}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {client.brandGuidelines.colors.secondary && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[12px]">
                        <div
                          className="w-[40px] h-[40px] rounded-[8px] border border-[#eee]"
                          style={{ backgroundColor: client.brandGuidelines.colors.secondary }}
                        />
                        <div>
                          <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0]">
                            Secondary
                          </p>
                          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                            {client.brandGuidelines.colors.secondary}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {client.brandGuidelines.colors.accent && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[12px]">
                        <div
                          className="w-[40px] h-[40px] rounded-[8px] border border-[#eee]"
                          style={{ backgroundColor: client.brandGuidelines.colors.accent }}
                        />
                        <div>
                          <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0]">
                            Accent
                          </p>
                          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32]">
                            {client.brandGuidelines.colors.accent}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Typography */}
            {client.brandGuidelines.fonts && (
              <div className="border border-[#eee] rounded-[12px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <Type className="w-[20px] h-[20px] text-[#5932ea]" strokeWidth={2} />
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                    Typography
                  </h3>
                </div>
                <div className="space-y-[16px]">
                  {client.brandGuidelines.fonts.heading && (
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                        Heading Font
                      </p>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#292d32]">
                        {client.brandGuidelines.fonts.heading}
                      </p>
                    </div>
                  )}
                  {client.brandGuidelines.fonts.body && (
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                        Body Font
                      </p>
                      <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#292d32]">
                        {client.brandGuidelines.fonts.body}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
