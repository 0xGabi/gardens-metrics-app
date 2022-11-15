const InfoCard = ({ title, number, icon }) => {
  return (
    <div className="flex-1 px-3 mb-6  xl:mb-0 border-2  border-[#063374] mx-4  rounded-2xl bg-clip-border bg-[#041F46]">
      <div className="relative flex flex-col min-w-0 break-words shadow-soft-xl  ">
        <div className="flex-auto p-4 ">
          <div className="flex flex-row -mx-3  ">
            <div className="flex-none w-2/3 max-w-full px-3 ">
              <p className="mb-0 font-sans leading-normal text-sm text-l ">
                {title}
              </p>
              <h3 className="mb-0 font-semibold text-3xl md:text-4xl 	">
                {number}
              </h3>
            </div>

            <div className="text-left ml-4 2xl:ml-36">
              <div className=" min-h-full w-24 text-center rounded-lg bg-gradient-to-tl from-blue-700 to-black-500  flex justify-center items-center">
                <i className="">{icon}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
