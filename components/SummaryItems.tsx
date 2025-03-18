import Image from 'next/image';

const SummaryItems = ({
  icon,
  amount,
  label,
  isLast = false,
}: {
  icon: string;
  amount: string;
  label: string;
  isLast?: boolean;
}) => (
  <div
    className={`flex flex-col items-center w-full ${
      !isLast ? 'border-r border-gray-300' : ''
    }`}
  >
    <Image src={icon} alt={label} width={30} height={30} />
    <div className="flex flex-col justify-center items-center gap-x-4 mt-2">
      <p>{amount}</p>
      <p className="text-sm">{label}</p>
    </div>
  </div>
);

export default SummaryItems;
