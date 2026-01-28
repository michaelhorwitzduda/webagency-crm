import { DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';

export function Revenue() {
  const monthlyRevenue = [
    { month: 'Jan', revenue: 12400, clients: 35 },
    { month: 'Feb', revenue: 14200, clients: 38 },
    { month: 'Mar', revenue: 15800, clients: 40 },
    { month: 'Apr', revenue: 16500, clients: 41 },
    { month: 'May', revenue: 17200, clients: 42 },
    { month: 'Jun', revenue: 18200, clients: 42 },
  ];

  const recentInvoices = [
    { client: "Mike's Plumbing Services", amount: '$149', status: 'Paid', date: '2026-01-25', type: 'Monthly Subscription' },
    { client: 'Elite Electric Co.', amount: '$3,200', status: 'Pending', date: '2026-01-28', type: 'Website Development' },
    { client: 'Cool Air HVAC', amount: '$179', status: 'Paid', date: '2026-01-24', type: 'Monthly Subscription' },
    { client: 'Fast Fix Plumbing', amount: '$2,400', status: 'Pending', date: '2026-01-27', type: 'Website Development' },
    { client: 'Bright Light Electrical', amount: '$199', status: 'Paid', date: '2026-01-23', type: 'Monthly Subscription' },
    { client: 'Climate Control Experts', amount: '$179', status: 'Overdue', date: '2026-01-15', type: 'Monthly Subscription' },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

  return (
    <div className="p-[40px]">
      <div className="mb-[32px]">
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
          Revenue
        </h1>
        <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#757575] mt-1">
          Track your income and invoices
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
        {[
          { label: 'Total Revenue', value: '$94,300', change: '+12%', icon: DollarSign, color: 'bg-[#e8f5f1]', iconColor: 'text-[#16c098]' },
          { label: 'Monthly Recurring', value: '$6,854', change: '+8%', icon: TrendingUp, color: 'bg-[#eef2ff]', iconColor: 'text-[#5932ea]' },
          { label: 'Pending Payments', value: '$5,600', change: '', icon: Calendar, color: 'bg-[#fef4e6]', iconColor: 'text-[#f59e0b]' },
          { label: 'Overdue', value: '$358', change: '-2%', icon: CreditCard, color: 'bg-[#ffc5c5]', iconColor: 'text-[#df0404]' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-[16px] p-[24px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
              <div className={`${stat.color} ${stat.iconColor} p-[12px] rounded-[12px] inline-block mb-[16px]`}>
                <Icon className="w-[24px] h-[24px]" strokeWidth={2} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0] mb-[8px]">
                {stat.label}
              </p>
              <div className="flex items-end gap-[8px]">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[32px] text-black">
                  {stat.value}
                </p>
                {stat.change && (
                  <p className={`font-['Poppins:Medium',sans-serif] text-[14px] mb-[6px] ${
                    stat.change.startsWith('+') ? 'text-[#16c098]' : 'text-[#df0404]'
                  }`}>
                    {stat.change}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Chart and Recent Invoices */}
      <div className="grid grid-cols-2 gap-[24px]">
        {/* Revenue Trend */}
        <div className="bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center justify-between mb-[32px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Revenue Trend
            </h2>
            <div className="flex items-center gap-[8px]">
              <div className="w-[12px] h-[12px] bg-[#5932ea] rounded-full"></div>
              <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#757575]">
                Monthly Revenue
              </span>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="space-y-[16px]">
            {monthlyRevenue.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-[6px]">
                  <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#292d32] w-[40px]">
                    {data.month}
                  </span>
                  <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#757575]">
                    ${(data.revenue / 1000).toFixed(1)}K
                  </span>
                </div>
                <div className="h-[32px] bg-[#f9fbff] rounded-[6px] overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#5932ea] to-[#7c5cf0] rounded-[6px] transition-all duration-500"
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[24px] p-[16px] bg-[#f9fbff] rounded-[12px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0]">
                  Average Monthly
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black mt-[4px]">
                  ${(monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0) / monthlyRevenue.length / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="text-right">
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#b5b7c0]">
                  Growth Rate
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#16c098] mt-[4px]">
                  +12.5%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-[16px] p-[32px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-black">
              Recent Invoices
            </h2>
            <button className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#5932ea]">
              View All
            </button>
          </div>

          <div className="space-y-[16px]">
            {recentInvoices.map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-[16px] bg-[#f9fbff] rounded-[12px] hover:bg-[#f0f4ff] transition-colors">
                <div className="flex-1">
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
                    {invoice.client}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#b5b7c0] mt-[2px]">
                    {invoice.type}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#757575] mt-[4px]">
                    {new Date(invoice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                    {invoice.amount}
                  </p>
                  <span className={`inline-block mt-[4px] px-[8px] py-[2px] rounded-[4px] font-['Poppins:Medium',sans-serif] text-[11px] ${
                    invoice.status === 'Paid'
                      ? 'bg-[rgba(22,192,152,0.38)] text-[#008767] border border-[#00b087]'
                      : invoice.status === 'Pending'
                      ? 'bg-[#fef4e6] text-[#f59e0b] border border-[#f59e0b]'
                      : 'bg-[#ffc5c5] text-[#df0404] border border-[#df0404]'
                  }`}>
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
