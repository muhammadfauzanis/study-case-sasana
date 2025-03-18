import Image from 'next/image';

const OverviewItems = ({
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
    className={`flex flex-col items-center  ${
      !isLast ? 'border-r border-gray-300' : ''
    }`}
  >
    <Image src={icon} alt={label} width={30} height={30} />
    <div className="flex justify-between items-center gap-x-4 mt-2">
      <p>{amount}</p>
      <p className="text-sm text-[#667085]">{label}</p>
    </div>
  </div>
);

export default OverviewItems;
