import { useState } from 'react';
import { Search, ChevronDown, Plus, ExternalLink, Calendar } from 'lucide-react';

interface Project {
  id: string;
  clientName: string;
  projectType: 'New Website' | 'Redesign' | 'Maintenance' | 'SEO';
  status: 'Planning' | 'Design' | 'Development' | 'Testing' | 'Live' | 'On Hold';
  startDate: string;
  deadline: string;
  progress: number;
  budget: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    clientName: "Mike's Plumbing Services",
    projectType: 'New Website',
    status: 'Live',
    startDate: '2025-11-15',
    deadline: '2026-01-15',
    progress: 100,
    budget: '$2,500'
  },
  {
    id: '2',
    clientName: 'Elite Electric Co.',
    projectType: 'New Website',
    status: 'Development',
    startDate: '2025-12-01',
    deadline: '2026-02-01',
    progress: 65,
    budget: '$3,200'
  },
  {
    id: '3',
    clientName: 'Cool Air HVAC',
    projectType: 'Redesign',
    status: 'Design',
    startDate: '2025-12-20',
    deadline: '2026-02-20',
    progress: 40,
    budget: '$2,800'
  },
  {
    id: '4',
    clientName: 'Fast Fix Plumbing',
    projectType: 'New Website',
    status: 'Planning',
    startDate: '2026-01-05',
    deadline: '2026-03-05',
    progress: 20,
    budget: '$2,400'
  },
  {
    id: '5',
    clientName: 'Bright Light Electrical',
    projectType: 'SEO',
    status: 'Live',
    startDate: '2025-11-01',
    deadline: '2026-01-01',
    progress: 100,
    budget: '$1,500'
  },
  {
    id: '6',
    clientName: 'Climate Control Experts',
    projectType: 'New Website',
    status: 'Development',
    startDate: '2025-12-10',
    deadline: '2026-02-10',
    progress: 55,
    budget: '$3,000'
  },
  {
    id: '7',
    clientName: 'Pro Plumbing Solutions',
    projectType: 'Maintenance',
    status: 'Live',
    startDate: '2025-10-15',
    deadline: '2026-01-15',
    progress: 100,
    budget: '$800'
  },
  {
    id: '8',
    clientName: 'AllTemp HVAC Services',
    projectType: 'Redesign',
    status: 'On Hold',
    startDate: '2025-11-20',
    deadline: '2026-02-20',
    progress: 30,
    budget: '$2,700'
  },
];

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

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
      case 'On Hold':
        return 'bg-[#ffc5c5] text-[#df0404] border border-[#df0404]';
      default:
        return 'bg-[#f5f5f5] text-[#404b52] border border-[#eee]';
    }
  };

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'New Website':
        return 'text-[#5932ea]';
      case 'Redesign':
        return 'text-[#f59e0b]';
      case 'Maintenance':
        return 'text-[#16c098]';
      case 'SEO':
        return 'text-[#0284c7]';
      default:
        return 'text-[#404b52]';
    }
  };

  return (
    <div className="p-[40px]">
      <div className="flex items-center justify-between mb-[32px]">
        <div>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
            Projects
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#757575] mt-1">
            Track all website projects
          </p>
        </div>
        <button className="flex items-center gap-[8px] bg-[#5932ea] text-white px-[20px] py-[12px] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] hover:bg-[#4a28c9] transition-colors">
          <Plus className="w-[18px] h-[18px]" strokeWidth={2} />
          New Project
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-[20px] mb-[32px]">
        {[
          { label: 'Total Projects', value: '28', color: 'bg-[#eef2ff]', textColor: 'text-[#5932ea]' },
          { label: 'In Progress', value: '12', color: 'bg-[#fef4e6]', textColor: 'text-[#f59e0b]' },
          { label: 'Completed', value: '14', color: 'bg-[#e8f5f1]', textColor: 'text-[#16c098]' },
          { label: 'On Hold', value: '2', color: 'bg-[#ffc5c5]', textColor: 'text-[#df0404]' },
        ].map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-[12px] p-[20px]`}>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#757575]">
              {stat.label}
            </p>
            <p className={`font-['Poppins:SemiBold',sans-serif] text-[32px] ${stat.textColor} mt-[8px]`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-[16px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)] p-[38px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[32px]">
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              All Projects
            </h2>
          </div>

          <div className="flex items-center gap-[16px]">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects"
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
                <option value="Planning">Planning</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Live">Live</option>
                <option value="On Hold">On Hold</option>
              </select>
              <ChevronDown className="absolute right-[12px] top-[50%] -translate-y-1/2 w-[18px] h-[18px] text-[#3d3c42] pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-2 gap-[20px]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border border-[#eee] rounded-[12px] p-[24px] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-[16px]">
                <div className="flex-1">
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black mb-[4px]">
                    {project.clientName}
                  </h3>
                  <p className={`font-['Poppins:Medium',sans-serif] text-[14px] ${getProjectTypeColor(project.projectType)}`}>
                    {project.projectType}
                  </p>
                </div>
                <span className={`px-[12px] py-[4px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] ${getStatusStyle(project.status)}`}>
                  {project.status}
                </span>
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

              {/* Details */}
              <div className="grid grid-cols-2 gap-[12px] mb-[16px]">
                <div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                    Start Date
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <Calendar className="w-[14px] h-[14px] text-[#757575]" strokeWidth={2} />
                    <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#292d32]">
                      {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mb-[4px]">
                    Deadline
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <Calendar className="w-[14px] h-[14px] text-[#757575]" strokeWidth={2} />
                    <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#292d32]">
                      {new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-[16px] border-t border-[#eee]">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#292d32]">
                  {project.budget}
                </p>
                <button className="flex items-center gap-[4px] text-[#5932ea] font-['Poppins:Medium',sans-serif] text-[12px] hover:underline">
                  View Details
                  <ExternalLink className="w-[14px] h-[14px]" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
