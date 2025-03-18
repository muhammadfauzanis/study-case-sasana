import DatePicker from '@/components/DatePicker';
import Navbar from '@/components/Navbar';
import OrderChart from '@/components/OrderCharts';
import OverviewItems from '@/components/OverviewItems';
import SalesCharts from '@/components/SalesCharts';
import Sidebar from '@/components/Sidebar';
import SummaryItems from '@/components/SummaryItems';
import TableLowQuantity from '@/components/TableLowQuantity';
import TableTopSelling from '@/components/TableTopSelling';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 space-y-6 mx-6 my-10 pb-10">
          <div className="grid grid-cols-1 xl:grid-cols-3 items-start gap-4 max-w-6xl">
            {/* Kolom Pertama */}
            <div className="xl:col-span-2 flex flex-col gap-4 w-full">
              <Card className=" flex flex-col h-[163px]">
                <CardContent className=" flex flex-col justify-between">
                  <h2 className="text-xl">Sales Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <OverviewItems
                      icon="/Sales.png"
                      amount="Rp 832"
                      label="Sales"
                    />
                    <OverviewItems
                      icon="/Revenue.png"
                      amount="Rp 18.300"
                      label="Revenue"
                    />
                    <OverviewItems
                      icon="/Profit.png"
                      amount="Rp 868"
                      label="Profit"
                    />
                    <OverviewItems
                      icon="/Cost.png"
                      amount="Rp 17.432"
                      label="Cost"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className=" flex flex-col h-[163px]">
                <CardContent className="h-full flex flex-col justify-between">
                  <h2 className="text-xl">Purchase Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <OverviewItems
                      icon="/Purchase/Purchase.png"
                      amount="82"
                      label="Purchase"
                    />
                    <OverviewItems
                      icon="/Cost.png"
                      amount="Rp 13.573"
                      label="Cost"
                    />
                    <OverviewItems
                      icon="/Purchase/Cancel.png"
                      amount="5"
                      label="Cancel"
                    />
                    <OverviewItems
                      icon="/Profit.png"
                      amount="Rp 17.432"
                      label="Return"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-[400px]">
                <CardContent>
                  <div className="flex justify-between">
                    <h2 className="text-xl">Sales & Purchase</h2>
                    <DatePicker />
                  </div>
                  <div className="mt-4">
                    <SalesCharts />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-[300px]">
                <CardContent>
                  <div className="flex justify-between">
                    <h2 className="text-xl">Top Selling Stock</h2>
                    <Button
                      variant="ghost"
                      className="text-blue-500 hover:underline hover:bg-transparent hover:text-blue-700 cursor-pointer text-md"
                    >
                      See All
                    </Button>
                  </div>
                  <div className="mt-4">
                    <TableTopSelling />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Kolom Kedua */}
            <div className="col-span-1 flex flex-col gap-4 w-full">
              <Card className=" flex flex-col h-[163px]">
                <CardContent className="h-full flex flex-col justify-between">
                  <h2 className="text-xl">Inventory Summary</h2>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <SummaryItems
                      icon="/Quantity.png"
                      amount="868"
                      label="Quantity in Hand"
                    />
                    <SummaryItems
                      icon="/On The Way.png"
                      amount="200"
                      label="To be received"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className=" flex flex-col h-[163px]">
                <CardContent className="h-full flex flex-col justify-between">
                  <h2 className="text-xl">Product Summary</h2>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <SummaryItems
                      icon="/Suppliers.png"
                      amount="31"
                      label="Number of Suppliers"
                    />
                    <SummaryItems
                      icon="/Categories.png"
                      amount="21"
                      label="Number of Categories"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-[400px]">
                <CardContent>
                  <h2 className="text-xl">Order Summary</h2>
                  <div className="mt-4">
                    <OrderChart />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-[300px]">
                <CardContent>
                  <div className="flex justify-between">
                    <h2 className="text-xl">Low Quantity Stock</h2>
                    <Button
                      variant="ghost"
                      className="text-blue-500 hover:underline hover:bg-transparent hover:text-blue-700 cursor-pointer text-md"
                    >
                      See All
                    </Button>
                  </div>
                  <div className="mt-4">
                    <TableLowQuantity />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
