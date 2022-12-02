import { useScrollPosition } from "~/hooks/useScrollPosition";
import ethereumLogo from "~/assets/ethereum.svg";

const TopNav = () => {
  //No me funca el hook
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <>
      <nav
        className={
          "bg-white px-2 sm:px-4 py-4  fixed w-full z-20 top-0 left-0 bg-[#031A3A] sticky transition-all shadow-none duration-550 ease-soft-in rounded-2xl mb-8"
        }
      >
        <div className="flex flex-wrap items-center justify-between">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={ethereumLogo}
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl whitespace-nowrap dark:text-white">
              Metrics Dashboard
            </span>
          </a>
          <div className="flex md:order-2">
            <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-[#063374] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bgbg-[#063374] dark:focus:ring-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            {/* si queremos agregar mas contenido  */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;

{
  /* <nav className="bg-[#031A3A] w-full z-20 top-0 left-0  sticky transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap backdrop-saturate-[200%] backdrop-blur-[30px] mb-4 border-2 ">
        <div className="flex items-center justify-between w-full  py-1 mx-auto flex-wrap-inherit">
          <nav>
            <h3 className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16 border-b">
              Metrics Dasboard
            </h3>
          </nav>
          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4 border-b">
              <p>Xpen sideBar</p>
            </div>
          </div>
        </div>
      </nav> */
}
