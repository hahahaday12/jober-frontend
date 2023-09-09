import defaultImage from '@/assets/default.jpg';
import { useWallStore } from '@/store';
import { CameraOutlined } from '@ant-design/icons';
import { produce } from 'immer';

interface ProfileImageUploadProps {
  isEdit: boolean;
}

export const  ProfileImage = ({ isEdit }: ProfileImageUploadProps) => {
  const { wall, setWall } = useWallStore();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            draft.ProfileImageUrl = reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <div className="flex w-[140px] h-[140px] flex-col items-center justify-center rounded-full bg-white">
      <img
        src={wall.ProfileImageUrl ?? defaultImage}
        alt="profile"
        className={`h-full w-full rounded-full object-cover ${
          isEdit ? 'opacity-50' : 'opacity-100'
        }`}
      />
      {isEdit && (
        <label className="cursor-pointer absolute bg-white w-10 h-10 rounded-full flex justify-center items-center">
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
