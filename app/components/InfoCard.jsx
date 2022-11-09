const InfoCard = ({ title, number }) => {
  return (
    <div className="flex-1 px-3 mb-6  xl:mb-0 border-2  border-[#243c5a] mx-4  rounded-2xl bg-clip-border bg-[#05295D">
      <div className="relative flex flex-col min-w-0 break-words bg-[#05295D]shadow-soft-xl ">
        <div className="flex-auto p-4 ">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <p className="mb-0 font-sans  leading-normal text-sm text-xl">
                {title}
              </p>
              <h3 className="mb-0 font-semibold text-3xl md:text-5xl 	">
                {number}
              </h3>
            </div>

            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-700 to-black-500">
                <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                  Icon
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
