import { Switch } from 'antd';
import WallHeaderPopoverTriggers from '../WallHeaderPopoverTriggers';

type MoreVerticalPopoverProps = {
  handleVerticalMorePopoevrOpenChange: (newOpen: boolean) => void;
};

export default function MoreVerticalPopover({
  handleVerticalMorePopoevrOpenChange,
}: MoreVerticalPopoverProps) {
  return (
    <div>
      <label
        htmlFor="disclosure"
        className="dm-16 text-gray88 flex items-center hover"
      >
        <Switch defaultChecked id="disclosure" className="mr-2" />
        외부공개
      </label>
      <WallHeaderPopoverTriggers
        verticalMore
        handleVerticalMorePopoevrOpenChange={
          handleVerticalMorePopoevrOpenChange
        }
      />
    </div>
  );
}
