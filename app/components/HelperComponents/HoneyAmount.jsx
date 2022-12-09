import honeyDark from "~/assets/honey_logo_dark.png";

const HoneyAmount = ({ amount, h = 6, w = 6 }) => {
  return (
    <div className="w-fit flex items-center ">
      <img className={`h-${h} w-${w} animate-pulse`} src={honeyDark} />
      <p className="ml-2 text-lg text-gray-100/75">{amount}</p>
    </div>
  );
};

export default HoneyAmount;
