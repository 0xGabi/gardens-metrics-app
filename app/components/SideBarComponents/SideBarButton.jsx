import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";

const SideBarButton = ({ Icon, Img, Title, item }) => {
  const { handleScroll } = useContext(RefContext);

  return (
    <li className="w-full cursor-pointer mb-4 2xl:mb-8">
      <button
        onMouseEnter={() => handleScroll(item)}
        className="text-m rounded-2xl bg-clip-border font-semibold text-slate-300  pl-4 pr-8 2xl:pr-24 py-[2px] flex items-center w-full transition ease-in-out duration-300 drop-shadow-2xl hover:bg-[#063374] "
      >
        <div className="bg-gradient-to-tl from-blue-700 to-black-500 shadow-soft-2xl mr-2 flex h-12 w-12 items-center justify-center rounded-lg text-center xl:p-2.5">
          {Icon && <i>{Icon}</i>}
          {Img && <img src={Img} />}
        </div>
        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft ">
          {Title}
        </span>
      </button>
    </li>
  );
};

export default SideBarButton;
