import { Avatar, Button, Input, message, theme } from 'antd';
import WallHeaderActions from '@/pages/wall/WallHeaderActions';
import { CloseOutlined } from '@ant-design/icons';
import { useWallStore } from '@/store';
import { useState } from 'react';

interface WallHeaderProps {
  wallId?: string;
}

export default function WallHeader({ wallId }: WallHeaderProps) {
  const {
    token: { colorPrimaryHover },
  } = theme.useToken();

  const { wall, isEdit, toggleEdit, getWall } = useWallStore();

  const [saving, setSaving] = useState(false);
  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('http://localhost:3000/wall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wall),
      });
    } catch (error) {
      console.log(error);
      message.error({ content: '저장 실패' });
    } finally {
      setSaving(false);
      location.reload(); // 개별 클로져 상태 초기화
      toggleEdit();
    }
  };

  const handleTempSave = () => {
    toggleEdit();
    // 통신
  };

  const handleCancel = async () => {
    await getWall();
    toggleEdit();
  };

  return (
    <header className="bg-white h-[90px] z-10 shadow-md flex items-center fixed w-full">
      <div className="w-[866px] mx-auto">
        {isEdit ? (
          <div className="flex gap-2">
            <Input
              addonBefore={import.meta.env.VITE_CLIENT_URL}
              value={wallId}
            />
            <Button>미리보기</Button>
            <Button
              style={{
                border: `1px solid ${colorPrimaryHover}`,
                color: `${colorPrimaryHover}`,
              }}
              onClick={handleTempSave}
            >
              임시저장
            </Button>
            <Button
              type="primary"
              onClick={handleSave}
              loading={saving}
              disabled={saving}
            >
              저장
            </Button>
            <CloseOutlined
              className="absolute right-9 top-9 cursor-pointer"
              onClick={handleCancel}
            />
          </div>
        ) : (
          <div className="flex justify-between">
            <Avatar />
            <WallHeaderActions />
            <CloseOutlined className="absolute right-9 top-9 cursor-pointer" />
          </div>
        )}
      </div>
    </header>
  );
}
