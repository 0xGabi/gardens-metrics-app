import honeyDark from "~/assets/honey_logo_dark.png";

const HoneyAmount = ({ amount, h = 6, w = 6 }) => {
  return (
    <div className="w-fit flex items-center animate-pulse">
      <img className={`h-${h} w-${w}`} src={honeyDark} />
      <p className="ml-2 text-sm text-gray-100/75">{amount}</p>
    </div>
  );
};

export default HoneyAmount;
