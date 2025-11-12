import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";

export default function Header ({sidebarOpen, setSidebarOpen}: {sidebarOpen: boolean, setSidebarOpen: (open: boolean) => void}) {

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const getGreetings = () => {
      const hour = today.getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    }

    return (
        <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h1 className="text-2xl font-bold">{getGreetings()}, Ben</h1>
                <p className="text-slate-400 text-sm">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-slate-800/50 rounded-xl px-4 py-2 border border-slate-700">
                <Search size={18} className="text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search transactions..." 
                  className="bg-transparent outline-none text-sm w-64 placeholder-slate-500"
                />
              </div>
              <button className="relative p-2 hover:bg-slate-800 rounded-xl transition-colors">
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="flex items-center gap-3 hover:bg-slate-800 rounded-xl p-2 transition-colors">
                <div className="w-10 h-10 rounded-full bg-sky-900 flex items-center justify-center text-sm font-bold">
                  B
                </div>
                <ChevronDown size={18} className="hidden md:block text-slate-400" />
              </button>
            </div>
          </div>
        </header>
    )
}