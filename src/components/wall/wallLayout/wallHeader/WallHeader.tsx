import { Button, Input, message } from 'antd';
import { useWallStore } from '@/store';
import { useState } from 'react';
import { WallHeaderActions } from 'components/index';
import WallHeaderUser from './WallHeaderUser';
import closeIcon from '@/assets/icons/close.svg';
import inputSuffixIcon from '@/assets/icons/input-suffix.svg';
// import axios from 'axios';

export const WallHeader = ({ wallId }: { wallId?: string }) => {
  // const {
  //   token: { colorPrimaryHover },
  // } = theme.useToken();
  const { wall, isEdit, toggleEdit, getWall } = useWallStore();
  const [wallIdInput, setwallIdInput] = useState(wallId);

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
      location.reload();
      toggleEdit();
    }
  };

  // multipart/form-data json 같이 보내기 (서버 완성되면 수정할 예정)
  // const handleSave = async () => {
  //   setSaving(true);
  //   const formData = new FormData();
  //   formData.append('pro', wall.profileBlock.profileImageUrl);
  //   // formData.append('profileImage', wall.profileBlock.profileImageUrl);
  //   const jsonData = JSON.stringify(wall);
  //   // formData.append(
  //   //   'jsonData',
  //   //   new Blob([jsonData], { type: 'application/json' }),
  //   // );
  //   formData.append('jsonData', JSON.stringify(jsonData));
  //   try {
  //     const res = await axios.post('http://localhost:4000/wall', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data', // 세팅 안해야될수도 있음
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     message.error({ content: '저장 실패' });
  //   } finally {
  //     setSaving(false);
  //     // location.reload();
  //     toggleEdit();
  //   }
  // };

  const handleTempSave = () => {
    toggleEdit();
    // 통신
  };

  const handleCancel = async () => {
    await getWall();
    toggleEdit();
  };

  return (
    <header className="bg-white h-[72px] z-10 flex items-center fixed w-full ring-line ring-[2px]">
      <div className="w-[866px] mx-auto">
        {isEdit ? (
          <div className="flex gap-[73px] items-center">
            <WallHeaderUser />
            <Input
              className="flex-1 rounded-[10px] bg-sky"
              addonBefore={
                <div className="dm-14 text-gray88 ">
                  java-jober.netlify.ap/wall/
                </div>
              }
              suffix={
                <img
                  src={inputSuffixIcon}
                  onClick={() => setwallIdInput('')}
                  className="cursor-pointer hover:opacity-60 transition"
                />
              }
              value={wallIdInput}
              onChange={(e) => setwallIdInput(e.target.value)}
            />
            <div className="flex gap-[8px]">
              <Button className="dm-14 h-[32px] px-[16px] text-gray88 rounded-[2px] border-[1px] border-gray88">
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
            <WallHeaderUser />
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
