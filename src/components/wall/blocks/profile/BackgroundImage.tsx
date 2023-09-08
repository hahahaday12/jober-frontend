import defaultImage from '@/assets/default.jpg';
import { useWallStore } from '@/store';
import { CameraOutlined } from '@ant-design/icons';
import { produce } from 'immer';

interface BackgroundImageProps {
  isEdit: boolean;
}

export const  BackgroundImage = ({ isEdit }: BackgroundImageProps) => {
  const { wall, setWall: addToWall } = useWallStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        addToWall(
          produce(wall, (draft) => {
            draft.profileBgUrl = reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <img
        src={wall.profileBgUrl ?? defaultImage}
        alt="profile"
        className={`object-cover h-[291px] w-full ${
          isEdit ? 'opacity-50' : 'opacity-100'
        }`}
      />
      {isEdit && (
        <label className="cursor-pointer absolute top-5 right-5 bg-white w-10 h-10 rounded-full flex justify-center items-center">
          <CameraOutlined />
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
}
