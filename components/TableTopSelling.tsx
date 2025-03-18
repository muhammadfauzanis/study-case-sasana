import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const sellingStock = [
  {
    name: 'Surf Excel',
    soldQuantity: 30,
    remainingQuantity: 12,
    price: '$100',
  },
  {
    name: 'Rin',
    soldQuantity: 21,
    remainingQuantity: 15,
    price: '$207',
  },
  {
    name: 'Parle G',
    soldQuantity: 19,
    remainingQuantity: 17,
    price: '$105',
  },
];

const TableTopSelling = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Sold Quantity</TableHead>
          <TableHead>Remaining Quantity</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sellingStock.map((stock) => (
          <TableRow key={stock.name}>
            <TableCell className="">{stock.name}</TableCell>
            <TableCell>{stock.soldQuantity}</TableCell>
            <TableCell>{stock.remainingQuantity}</TableCell>
            <TableCell>{stock.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableTopSelling;
