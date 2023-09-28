import { useWallStore } from '@/store';
import { Button, Popover } from 'antd';
import moreVerticalIcon from '@/assets/icons/more-vertical.svg';
import { Icon } from '@/components/common';
import { useState } from 'react';
import MoreVerticalPopover from './popover/MoreVerticalPopover';

import WallHeaderPopoverTriggers from './WallHeaderPopoverTriggers';

export const WallHeaderActions = () => {
  const { toggleEdit, wall } = useWallStore();

  const [verticalMorePopoevrOpen, setVerticalMorePopoevrOpen] = useState(false);
  const handleVerticalMorePopoevrOpenChange = (newOpen: boolean) => {
    setVerticalMorePopoevrOpen(newOpen);
    if (!newOpen) {
      // TODO : 저장 PUT request
      console.log(wall.isPublic, '저장');
    }
  };

  return (
    <div className="flex gap-[8px] items-center">
      <WallHeaderPopoverTriggers
        handleVerticalMorePopoevrOpenChange={
          handleVerticalMorePopoevrOpenChange
        }
      />

      <Button type="primary" onClick={() => toggleEdit()} className="dm-14">
        편집하기
      </Button>

      <Popover
        content={
          <MoreVerticalPopover
            handleVerticalMorePopoevrOpenChange={
              handleVerticalMorePopoevrOpenChange
            }
          />
        }
        trigger="click"
        arrow={false}
        open={verticalMorePopoevrOpen}
        onOpenChange={handleVerticalMorePopoevrOpenChange}
        placement="bottomRight"
      >
        <Button className="hover w-[32px] h-[32px] border-gray88 flex items-center justify-center">
          <Icon src={moreVerticalIcon} />
        </Button>
      </Popover>
    </div>
  );
};
