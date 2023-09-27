import { useWallStore } from '@/store';
import { Button, Popover, Switch } from 'antd';
import ActionButton from './ActionButton';
import smsIcon from '@/assets/icons/sms.svg';
import exportIcon from '@/assets/icons/export.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import moreVerticalIcon from '@/assets/icons/more-vertical.svg';
import { Icon } from '@/components/common';
import { produce } from 'immer';
import { useState } from 'react';

export const WallHeaderActions = () => {
  const { toggleEdit, wall, setWall } = useWallStore();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setPopoverOpen(newOpen);
    if (!newOpen) {
      // TODO : 저장 PUT request
      console.log(wall.isPublic, '저장');
    }
  };
  const handleSwitchIsPublic = (checked: boolean) => {
    setWall(
      produce(wall, (draft) => {
        draft.isPublic = checked;
      }),
    );
  };

  const content = (
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
      <div className="sm:hidden flex justify-between mt-[10px]">
        <ActionButton type={smsIcon} />
        <ActionButton type={exportIcon} />
        <ActionButton type={notificationIcon} />
      </div>
    </div>
  );

  return (
    <div className="flex gap-[8px] items-center">
      <ActionButton type={smsIcon} className="hidden sm:flex" />
      <ActionButton type={exportIcon} className="hidden sm:flex" />
      <ActionButton type={notificationIcon} className="hidden sm:flex" />
      <Button type="primary" onClick={() => toggleEdit()} className="dm-14">
        편집하기
      </Button>
      <Popover
        content={content}
        trigger="click"
        arrow={false}
        open={popoverOpen}
        onOpenChange={handleOpenChange}
      >
        <Button className="hover w-[32px] h-[32px] border-gray88 flex items-center justify-center">
          <Icon src={moreVerticalIcon} />
        </Button>
      </Popover>
    </div>
  );
};
