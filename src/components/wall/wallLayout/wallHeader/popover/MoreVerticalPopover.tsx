import { Switch } from 'antd';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import WallHeaderPopoverTriggers from '../WallHeaderPopoverTriggers';

type MoreVerticalPopoverProps = {
  handleVerticalMorePopoevrOpenChange: (newOpen: boolean) => void;
};

export default function MoreVerticalPopover({
  handleVerticalMorePopoevrOpenChange,
}: MoreVerticalPopoverProps) {
  const { wall, setWall } = useWallStore();

  const handleSwitchIsPublic = (checked: boolean) => {
    setWall(
      produce(wall, (draft) => {
        draft.isPublic = checked;
      }),
    );
  };
  return (
    <div>
      <label
        htmlFor="disclosure"
        className="dm-16 text-gray88 flex items-center"
      >
        <Switch
          defaultChecked
          onChange={handleSwitchIsPublic}
          id="disclosure"
          className="mr-2"
        />
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
