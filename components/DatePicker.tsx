import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Calendar as ShadCalendar } from '@/components/ui/calendar';
import { LuCalendar } from 'react-icons/lu';

const DatePicker = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-1 text-gray-600 cursor-pointer"
        >
          <LuCalendar size={25} />
          <span>Weekly</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <ShadCalendar mode="default" />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
