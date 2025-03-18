'use client';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface DropdownProps {
  title: string;
  children?: React.ReactNode;
  icon?: React.ElementType;
  classname?: string;
}

const Dropdown = ({
  title,
  children,
  icon: Icon,
  classname,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6 text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-white hover:bg-red-700 transition-all duration-300 flex items-center justify-between mb-4 px-4 py-2"
      >
        <div className="flex items-center gap-x-6 text-2xl">
          {Icon && <Icon />}
          <p className="text-sm">{title}</p>
        </div>

        <div>
          {!isOpen ? <IoIosArrowDown size={15} /> : <IoIosArrowUp size={15} />}
        </div>
      </button>

      {isOpen && (
        <div className={`${classname} text-md space-y-4`}>{children}</div>
      )}
    </div>
  );
};

export default Dropdown;
