import { useState } from 'react';
import { Sidebar } from '@/app/components/Sidebar';
import { Dashboard } from '@/app/components/Dashboard';
import { ClientList, type Client } from '@/app/components/ClientList';
import { ClientDetail } from '@/app/components/ClientDetail';
import { ProjectList } from '@/app/components/ProjectList';
import { Revenue } from '@/app/components/Revenue';
import { Search } from 'lucide-react';
import { sampleClientWithBranding, sampleClientElectric, sampleClientHVAC } from '@/app/components/SampleClientData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleClientSelect = (client: Client) => {
    // Replace with sample data if it's one of our demo clients
    if (client.id === '1') {
      setSelectedClient(sampleClientWithBranding);
    } else if (client.id === '2') {
      setSelectedClient(sampleClientElectric);
    } else if (client.id === '3') {
      setSelectedClient(sampleClientHVAC);
    } else {
      setSelectedClient(client);
    }
  };

  const handleBackToClients = () => {
    setSelectedClient(null);
  };

  return (
    <div className="min-h-screen bg-[#fafbff] flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab);
        setSelectedClient(null);
      }} />

      {/* Main Content */}
      <div className="flex-1 ml-[250px]">
        {/* Top Header */}
        <div className="h-[98px] bg-white shadow-sm flex items-center justify-between px-[40px] sticky top-0 z-10">
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'clients' && (selectedClient ? selectedClient.businessName : 'Clients')}
              {activeTab === 'projects' && 'Projects'}
              {activeTab === 'revenue' && 'Revenue'}
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white h-[38px] w-[216px] rounded-[12px] shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)] pl-[16px] pr-[40px] font-['Poppins:Regular',sans-serif] text-[14px] text-black placeholder:text-[#b5b7c0] outline-none border-none"
            />
            <Search className="absolute right-[12px] top-[50%] -translate-y-1/2 w-[18px] h-[18px] text-[#7e7e7e]" strokeWidth={2} />
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[calc(100vh-98px)]">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'clients' && (
            selectedClient ? (
              <ClientDetail client={selectedClient} onBack={handleBackToClients} />
            ) : (
              <ClientList onClientSelect={handleClientSelect} />
            )
          )}
          {activeTab === 'projects' && <ProjectList />}
          {activeTab === 'revenue' && <Revenue />}
        </div>
      </div>
    </div>
  );
}