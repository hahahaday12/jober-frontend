import { useWallStore } from '@/store';
import { BellOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const WallHeaderActions = () => {
  const { setIsEdit } = useWallStore();
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[38px] h-[38px] border-[1px] border-solid text-gray-400 border-gray-300  flex justify-center items-center z-50 rounded-sm">
        <MailOutlined className="text-[24px]" />
      </div>
      <div className="w-[38px] h-[38px] border-[1px] border-solid text-gray-400 border-gray-300  flex justify-center items-center z-50 rounded-sm">
        <UploadOutlined className="text-[24px]" />
      </div>
      <div className="w-[38px] h-[38px] border-[1px] border-solid text-gray-400 border-gray-300  flex justify-center items-center z-50 rounded-sm">
        <BellOutlined className="text-[24px]" />
      </div>
      <Button type="primary" onClick={() => setIsEdit(true)}>
        편집하기
      </Button>
    </div>
  );
};
