import { TrendingUp, TrendingDown, Users, FolderKanban, DollarSign, Monitor } from 'lucide-react';
import imgAvatar1 from "figma:asset/d7ac303838cffc917e25907e61f45129e31ef357.png";
import imgAvatar2 from "figma:asset/aeffe6bf543dad3853d9d70f1448c89ae7f96918.png";
import imgAvatar3 from "figma:asset/63f7061d2d9c4e891fe06a28ba4a56711c6c9abd.png";
import imgAvatar4 from "figma:asset/af0ba86ec6fedb545525342b71265ac6f25aeff4.png";

export function Dashboard() {
  const stats = [
    {
      label: 'Total Clients',
      value: '42',
      change: '+8%',
      isPositive: true,
      icon: Users,
      color: 'bg-[#e8f5f1]',
      iconColor: 'text-[#16c098]'
    },
    {
      label: 'Active Projects',
      value: '28',
      change: '+12%',
      isPositive: true,
      icon: FolderKanban,
      color: 'bg-[#fef4e6]',
      iconColor: 'text-[#f59e0b]'
    },
    {
      label: 'Websites Live',
      value: '35',
      change: '+5%',
      isPositive: true,
      icon: Monitor,
      color: 'bg-[#eef2ff]',
      iconColor: 'text-[#5932ea]'
    },
    {
      label: 'Monthly Revenue',
      value: '$18.2K',
      change: '+15%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-[#fef2f2]',
      iconColor: 'text-[#ef4444]'
    },
  ];

  const recentClients = [
    { name: "Mike's Plumbing", business: 'Plumbing', status: 'Live', progress: 100 },
    { name: "Elite Electric", business: 'Electrician', status: 'Development', progress: 65 },
    { name: "Cool Air HVAC", business: 'HVAC', status: 'Design', progress: 40 },
    { name: "Fast Fix Plumbing", business: 'Plumbing', status: 'Planning', progress: 20 },
  ];

  const teamMembers = [imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4];

  return (
    <div className="p-[40px]">
      <div className="flex items-center justify-between mb-[40px]">
        <div>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
            Welcome back, Alex! 👋
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#757575] mt-1">
            Here's what's happening with your clients today
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-[24px] mb-[40px]">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-[16px] p-[24px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
              <div className="flex items-start justify-between mb-[16px]">
                <div className={`${stat.color} ${stat.iconColor} p-[12px] rounded-[12px]`}>
                  <Icon className="w-[24px] h-[24px]" strokeWidth={2} />
                </div>
                <div className={`flex items-center gap-[4px] ${stat.isPositive ? 'text-[#16c098]' : 'text-[#df0404]'}`}>
                  {stat.isPositive ? (
                    <TrendingUp className="w-[16px] h-[16px]" />
                  ) : (
                    <TrendingDown className="w-[16px] h-[16px]" />
                  )}
                  <span className="font-['Poppins:Medium',sans-serif] text-[12px]">
                    {stat.change}
                  </span>
                </div>
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0] mb-[8px]">
                {stat.label}
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
                {stat.value}
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mt-[4px]">
                this month
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-2 gap-[24px]">
        <div className="bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Recent Projects
            </h2>
            <button className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5932ea]">
              View All
            </button>
          </div>
          <div className="space-y-[20px]">
            {recentClients.map((client, index) => (
              <div key={index} className="border-b border-[#eee] pb-[20px] last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-[8px]">
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black">
                      {client.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mt-[2px]">
                      {client.business}
                    </p>
                  </div>
                  <span className={`px-[12px] py-[4px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[12px] ${
                    client.status === 'Live'
                      ? 'bg-[rgba(22,192,152,0.38)] text-[#008767] border border-[#00b087]'
                      : 'bg-[#fef4e6] text-[#f59e0b] border border-[#f59e0b]'
                  }`}>
                    {client.status}
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="flex-1 h-[8px] bg-[#f5f5f5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#5932ea] rounded-full transition-all"
                      style={{ width: `${client.progress}%` }}
                    />
                  </div>
                  <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#b5b7c0]">
                    {client.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Quick Stats
            </h2>
          </div>
          <div className="space-y-[24px]">
            <div className="flex items-center justify-between p-[16px] bg-[#f9fbff] rounded-[12px]">
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0]">
                  Avg. Project Value
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black mt-[4px]">
                  $2,850
                </p>
              </div>
              <div className="w-[60px] h-[60px] bg-[#e8f5f1] rounded-full flex items-center justify-center">
                <DollarSign className="w-[28px] h-[28px] text-[#16c098]" strokeWidth={2} />
              </div>
            </div>

            <div className="flex items-center justify-between p-[16px] bg-[#f9fbff] rounded-[12px]">
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0]">
                  Completion Rate
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black mt-[4px]">
                  94%
                </p>
              </div>
              <div className="w-[60px] h-[60px] bg-[#eef2ff] rounded-full flex items-center justify-center">
                <FolderKanban className="w-[28px] h-[28px] text-[#5932ea]" strokeWidth={2} />
              </div>
            </div>

            <div className="flex items-center justify-between p-[16px] bg-[#f9fbff] rounded-[12px]">
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0]">
                  Client Satisfaction
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black mt-[4px]">
                  4.8/5.0
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                {teamMembers.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Team member"
                    className="w-[32px] h-[32px] rounded-full border-2 border-white -ml-[8px] first:ml-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
