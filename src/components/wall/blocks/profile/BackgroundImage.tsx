import defaultImage from '@/assets/default.jpg';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import galleryIcon from '@/assets/icons/gallery.svg';

interface BackgroundImageProps {
  isEdit: boolean;
}

export const BackgroundImage = ({ isEdit }: BackgroundImageProps) => {
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
    <>
      {wall.profileBgUrl ? (
        <>
          <img
            src={wall.profileBgUrl || defaultImage}
            alt="profile"
            className={`object-cover h-[291px] w-full ${
              isEdit ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </>
      ) : (
        <div className="h-[291px] w-full bg-sky"></div>
      )}

      {isEdit && (
        <label className="cursor-pointer hover:opacity-60 transition absolute top-[20px] right-[20px] bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center">
          <img src={galleryIcon} alt="gallery icon" />
          <input
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </label>
      )}
    </>
  );
};
