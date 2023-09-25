import { useWallStore } from '@/store';
import galleryIcon from '@/assets/icons/gallery.svg';
import { produce } from 'immer';
import { IMAGE_FILE_SIZE_LIMIT } from '@/data/constants/blocks';
import { message } from 'antd';
import { Icon } from '@/components/common';

export const ProfileImage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const { wall, setWall, isEdit } = useWallStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile && imageFile.size > IMAGE_FILE_SIZE_LIMIT) {
      messageApi.error('이미지가 2MB를 초과하였습니다.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            draft.wallInfoBlock.wallInfoImgURL = reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
      messageApi.success('프로필이미지를 변경하였습니다');
    }
  };

  return (
    <div className="absolute -top-[60px] left-[calc(50%-60px)] sm:block sm:static">
      {contextHolder}
      <div className="flex w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] flex-col items-center justify-center rounded-full bg-white overflow-hidden">
        {wall.wallInfoBlock?.wallInfoImgURL ? (
          <img
            src={wall.wallInfoBlock.wallInfoImgURL}
            alt="wallinfo block profile image"
            className={`h-full w-full rounded-full object-cover ${
              isEdit ? 'opacity-50' : 'opacity-100'
            }`}
          />
        ) : (
          <div className="bg-gray w-full h-full" />
        )}

        {isEdit && (
          <label className="hover absolute bg-white z-20 w-10 h-10 rounded-full flex justify-center items-center">
            <Icon src={galleryIcon} />
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        )}
      </div>
    </div>
  );
};
