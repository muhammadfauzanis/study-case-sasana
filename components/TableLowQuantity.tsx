import Image from 'next/image';

const lowQuantityStock = [
  {
    image: '/Tata.png',
    name: 'Tata Salf',
    remainingQuantity: 12,
  },
  {
    image: '/Lays.png',
    name: 'Lays',
    remainingQuantity: 15,
  },
  {
    image: '/Lays.png',
    name: 'Lays 2',
    remainingQuantity: 15,
  },
];

const TableLowQuantity = () => {
  return (
    <div>
      {lowQuantityStock.map((stock) => (
        <div key={stock.name} className="flex justify-between items-center">
          <Image src={stock.image} alt={stock.name} width={60} height={70} />
          <div className="text-sm">
            <p>{stock.name}</p>
            <p>Remaining Quantity: {stock.remainingQuantity} Packet</p>
          </div>
          <button className="py-1 px-2 rounded-full w-fit text-red-500 bg-red-300 font-bold">
            Low
          </button>
        </div>
      ))}
    </div>
  );
};

export default TableLowQuantity;
