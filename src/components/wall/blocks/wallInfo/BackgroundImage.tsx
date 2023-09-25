import { useWallStore } from '@/store';
import { produce } from 'immer';
import galleryIcon from '@/assets/icons/gallery.svg';
import { message } from 'antd';
import { IMAGE_FILE_SIZE_LIMIT } from '@/data/constants/blocks';
import { Icon } from '@/components/common';

export const BackgroundImage = () => {
  const { wall, setWall, isEdit } = useWallStore();

  const [messageApi, contextHolder] = message.useMessage();

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
            draft.wallInfoBlock.backgroundImgURL = reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
      messageApi.success('배경이미지를 변경하였습니다');
    }
  };

  return (
    <div className="hidden sm:block">
      {contextHolder}
      {wall.wallInfoBlock?.backgroundImgURL ? (
        <img
          src={wall.wallInfoBlock.backgroundImgURL}
          alt="wallInfo block background image"
          className={`object-cover h-[291px] w-full ${
            isEdit ? 'opacity-50' : 'opacity-100'
          }`}
        />
      ) : (
        <div className="h-[291px] w-full bg-sky"></div>
      )}

      {isEdit && (
        <label className="hover absolute top-[20px] right-[20px] bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center">
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
  );
};
