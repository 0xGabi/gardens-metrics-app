import ethereumLogo from "~/assets/ethereum.svg";

const SideBar = ({ handleRef }) => {
  return (
    <aside className="hidden lg:block min-w-62.5 h-screen  -translate-x-full rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent border-2">
      <div className="items-center block w-auto min-h-screen overflow-auto grow basis-full h-screen flex flex-col items-center justify-space-between">
        <div className="w-full h-24 border-2 flex-none"></div>
        <div className="flex-1 border-4">
          <ul className="border-2 h-full flex flex-col justify-center">
            <li className="mt-8 w-full">
              <a className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                  <img
                    src={ethereumLogo}
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="mt-8 w-full">
              <a className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                  <img
                    src={ethereumLogo}
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                  Time-Graph
                </span>
              </a>
            </li>
            <li className="mt-8 w-full">
              <a className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                  <img
                    src={ethereumLogo}
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                  Order-Flow
                </span>
              </a>
            </li>
            <li className="mt-8 w-full">
              <a className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors">
                <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                  <img
                    src={ethereumLogo}
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-24 border-2 flex-none">1Hive-Logo</div>
      </div>
    </aside>
  );
};

export default SideBar;
