import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";
import clsx from "clsx";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/docs/", label: "Getting Started" },
  ];

  const componentItems = [
    { to: "/docs/components/alertbox", label: "AlertBox" },
    { to: "/docs/components/animatednavbar", label: "AnimatedNavbar" },
    { to: "/docs/components/avatar", label: "Avatar" },
    { to: "/docs/components/avatardropdown", label: "Avatar Dropdown" },
    { to: "/docs/components/button", label: "Button" },
    { to: "/docs/components/dialog", label: "Dialog" },
    { to: "/docs/components/dropdownmenu", label: "DropdownMenu" },
    { to: "/docs/components/groupavatar", label: "GroupAvatar" },
    { to: "/docs/components/productcard", label: "ProductCard" },
    { to: "/docs/components/revealcardsgrid", label: "RevealCardsGrid" },
    { to: "/docs/components/speeddial", label: "SpeedDial" },
    { to: "/docs/components/staggeredtexts", label: "StaggeredTexts" },
    { to: "/docs/components/statusavatar", label: "StatusAvatar" },
    { to: "/docs/components/stepper", label: "Stepper" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="md:hidden p-4">
        <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
          <PanelLeft className="h-6 w-6" />
        </Button>
      </div>

      <aside
        className={clsx(
          "fixed top-0 left-0 z-40 h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-white/10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Docs | Lazy UI</h1>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto p-6 pt-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
           <a href={"/"} className={clsx("rounded-md px-3 py-2 transition-colors hover:bg-white/10 text-white")}>
              Home
            </a>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={clsx("rounded-md px-3 py-2 transition-colors", location.pathname === item.to ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10 text-white")}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 text-xs uppercase tracking-wide text-slate-300">Components</div>

            {componentItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={clsx("rounded-md px-3 py-2 transition-colors", location.pathname === item.to ? "bg-white/20 text-white font-semibold" : "hover:bg-white/10 text-white")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="md:ml-64 p-6 overflow-y-auto flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
