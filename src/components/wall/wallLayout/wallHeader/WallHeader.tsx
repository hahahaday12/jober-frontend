import { Button, Input, message, theme } from 'antd';
//import WallHeaderActions from '@/pages/wall/WallHeaderActions';
import { CloseOutlined } from '@ant-design/icons';
import { useWallStore } from '@/store';
import { useState } from 'react';
import { WallHeaderActions } from 'components/index';
import WallHeaderUser from './WallHeaderUser';
import closeIcon from '@/assets/icons/close.svg';
import inputSuffixIcon from '@/assets/icons/input-suffix.svg';

interface WallHeaderProps {
  wallId?: string;
}

export const WallHeader = ({ wallId }: WallHeaderProps) => {
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
    <header className="bg-white h-[72px] z-10 flex items-center fixed w-full">
      <div className="w-[866px] mx-auto">
        {isEdit ? (
          <div className="flex gap-[73px] items-center">
            <WallHeaderUser pageTitle={wall.pageTitle} />
            <Input
              addonBefore={
                <div className="dm-14 text-gray88">
                  {(import.meta.env.VITE_CLIENT_URL as string).slice(7)}
                </div>
              }
              suffix={<img src={inputSuffixIcon} />}
              value={wallId}
              className="w-full flex-1"
            />
            <div className="flex gap-[8px]">
              <Button className="dm-14 h-[32px] px-[16px]  text-gray88 rounded-[2px] border-[1px] border-gray88">
                미리보기
              </Button>
              <Button
                className="dm-14 h-[32px] px-[16px] text-blue rounded-[2px] border-[1px] border-blue"
                onClick={handleTempSave}
              >
                임시저장
              </Button>
              <Button
                className="
              dm-14 h-[32px] px-[16px] text-white rounded-[2px]"
                type="primary"
                onClick={handleSave}
                loading={saving}
                disabled={saving}
              >
                저장
              </Button>
            </div>
            <img
              src={closeIcon}
              alt="close icon"
              className="absolute top-[21px] right-[30px] cursor-pointer hover:opacity-60"
              onClick={handleCancel}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <WallHeaderUser pageTitle={wall.pageTitle} />
            <WallHeaderActions />
            <img
              src={closeIcon}
              alt="close icon"
              className="absolute top-[21px] right-[30px] cursor-pointer hover:opacity-60"
            />
          </div>
        )}
      </div>
    </header>
  );
};
