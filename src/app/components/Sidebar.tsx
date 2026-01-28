import { Building2, Users, FolderKanban, DollarSign, BarChart3, Settings, HelpCircle } from 'lucide-react';
import svgPaths from "@/imports/icon-paths";
import imgAvatar from "figma:asset/ee2d83eb8d1b703efbc7d3399f4bc832c2b90a01.png";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[250px] bg-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="px-[37px] py-[36px] flex items-center gap-[12px]">
        <div className="size-[37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
            <path d={svgPaths.p10e47580} fill="#000" />
          </svg>
        </div>
        <div>
          <p className="font-['Poppins:SemiBold',sans-serif] text-[26px] tracking-[0.26px] text-black leading-none">
            WebAgency
          </p>
          <p className="font-['Poppins:Medium',sans-serif] text-[10px] tracking-[0.01px] text-[#838383] leading-none mt-1">
            v.01
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-[28px] py-[18px]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-[14px] px-[11px] py-[11px] mb-[18px] rounded-[8px] transition-all ${
                isActive
                  ? 'bg-[#5932ea] text-white'
                  : 'text-[#9197b3] hover:bg-gray-50'
              }`}
            >
              <Icon className="w-[24px] h-[24px]" strokeWidth={1.5} />
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] tracking-[-0.14px]">
                {item.label}
              </span>
              {isActive && (
                <svg className="ml-auto w-[6px] h-[10px]" fill="none" viewBox="0 0 6 10">
                  <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-[28px] pb-[36px]">
        <button className="w-full flex items-center gap-[14px] px-[11px] py-[11px] mb-[18px] text-[#9197b3] hover:bg-gray-50 rounded-[8px]">
          <HelpCircle className="w-[24px] h-[24px]" strokeWidth={1.5} />
          <span className="font-['Poppins:Medium',sans-serif] text-[14px] tracking-[-0.14px]">
            Help
          </span>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-[12px] px-[11px] py-[11px] border-t border-[#eee] mt-[24px] pt-[24px]">
          <img
            src={imgAvatar}
            alt="User"
            className="w-[42px] h-[42px] rounded-full"
          />
          <div className="flex-1">
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-black leading-none">
              Alex Morgan
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#757575] leading-none mt-1">
              Agency Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}