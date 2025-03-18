import Image from 'next/image';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Avatar, AvatarFallback } from './ui/avatar';

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-14 py-2 shadow-md">
      <Image src="/logo.png" alt="Sasana Digital" width="150" height="150" />

      <div className="flex items-center space-x-2">
        <MdOutlineNotificationsActive size={25} className="text-red-700 mr-8" />
        <Avatar>
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="">
          <h3 className="font-semibold">Muaffa Syukur</h3>
          <p className="text-gray-500">Hitnes Muharram</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
