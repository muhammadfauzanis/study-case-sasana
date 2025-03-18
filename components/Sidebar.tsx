'use client';
import { BiStoreAlt } from 'react-icons/bi';
import Dropdown from './Dropdown';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoCubeOutline, IoGridOutline } from 'react-icons/io5';
import { LuFileText } from 'react-icons/lu';
import { FaChartColumn } from 'react-icons/fa6';
import { BsBoxSeam } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="w-[380px] bg-[#c42424] text-white pl-10 pr-2 text-sm">
      <div className="flex justify-between items-center pt-4 pl-4 pr-2">
        <div className="flex gap-x-4">
          <BiStoreAlt size={50} />
          <div className="">
            <p>Outlet</p>
            <div className="flex items-center gap-x-4">
              <p>Semua Outlet</p>
              <IoIosArrowDown size={15} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-full cursor-pointer h-fit p-1">
          <HiMenuAlt1 className="text-[#c42424]" size={15} />
        </div>
      </div>

      <div className="flex items-center gap-x-6 mt-4 hover:bg-red-700 px-4 py-2">
        <IoGridOutline size={25} className="" />
        <p>Dashboard</p>
      </div>

      <Dropdown icon={LuFileText} title="Laporan" />
      <Dropdown icon={FaChartColumn} title="Analisis Laporan" />
      <Dropdown icon={IoCubeOutline} title="Produk" />
      <Dropdown icon={BsBoxSeam} title="Inventori" classname="ml-20">
        <p>Pembelian Stok</p>
        <Dropdown title="Kelola Stok" classname="ml-4">
          <p>Daftar Stok</p>
          <p>Stok Opname</p>
          <p>Stok Terbuang</p>
        </Dropdown>
        <p>Daftar Pemasok (Supplier)</p>
      </Dropdown>
      <Dropdown icon={GoPeople} title="Pelanggan" />
      <Dropdown icon={RiDiscountPercentLine} title="Promosi" />
    </div>
  );
};

export default Sidebar;
