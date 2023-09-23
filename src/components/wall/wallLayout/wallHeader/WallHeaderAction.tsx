import { useWallStore } from '@/store';
import { Button } from 'antd';
import ActionButton from './ActionButton';
import smsIcon from '@/assets/icons/sms.svg';
import exportIcon from '@/assets/icons/export.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import moreVerticalIcon from '@/assets/icons/more-vertical.svg';

export const WallHeaderActions = () => {
  const { toggleEdit } = useWallStore();
  return (
    <div className="flex gap-[8px] items-center">
      <ActionButton type={smsIcon} />
      <ActionButton type={exportIcon} />
      <ActionButton type={notificationIcon} />
      <Button type="primary" onClick={() => toggleEdit()} className="dm-14">
        편집하기
      </Button>
      <ActionButton type={moreVerticalIcon} />
    </div>
  );
};
