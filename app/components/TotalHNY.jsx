const TotalHNY = ({ amount = "6812" }) => {
  return (
    <div className="flex-auto p-4 ">
      <div className="flex flex-wrap">
        <div className="max-w-full px-3 lg:w-1/2 lg:flex-none ">
          <div className="flex flex-col h-full">
            <p className="pt-2 mb-1">Built by BlossomLabs</p>
            <h5>Soft UI Dashboard</h5>
            <p className="mb-36">...</p>
            <a>1hive.org</a>
          </div>
        </div>
        <div className="flex-wrap max-w-full px-2 lg:w-1/2 lg:flex-none ">
          <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
            <h2>{amount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalHNY;
