import { useWallStore } from '@/store';
import { Button, message } from 'antd';
import { useState } from 'react';

type WallHeaderEditButtonsProps = {
  tourPreviewRef?: React.MutableRefObject<null>;
  footer?: boolean;
};

export default function WallHeaderEditButtons({
  tourPreviewRef,
  footer,
}: WallHeaderEditButtonsProps) {
  const { wall, toggleEdit, isPreview, togglePreview, isEdit } = useWallStore();
  const [saving, setSaving] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handlePreview = () => {
    togglePreview();
    toggleEdit();
  };

  const handleTempSave = () => {};

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
      messageApi.error({ content: '저장 실패' });
    } finally {
      setSaving(false);
      // location.reload();
      isEdit && toggleEdit();
      isPreview && togglePreview();
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

  return (
    <>
      {contextHolder}
      <div className={`gap-[8px] sm:flex ${footer ? 'flex' : 'hidden'}`}>
        <Button
          className="dm-14 text-gray88 border-gray88"
          onClick={handlePreview}
          ref={tourPreviewRef}
        >
          {isPreview ? '미리보기 종료' : '미리보기'}
        </Button>
        {!isPreview && (
          <Button
            className="dm-14 text-blue border-blue"
            onClick={handleTempSave}
          >
            임시저장
          </Button>
        )}

        <Button
          className="
        dm-14 text-white"
          type="primary"
          onClick={handleSave}
          loading={saving}
          disabled={saving}
        >
          저장
        </Button>
      </div>
    </>
  );
}
