import { useWallStore } from '@/store';
import galleryIcon from '@/assets/icons/gallery.svg';
import { produce } from 'immer';

export const ProfileImage = () => {
  const { wall, setWall, isEdit } = useWallStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            draft.profileBlock.profileImageUrl = reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <div className="flex w-[140px] h-[140px] flex-col items-center justify-center rounded-full bg-white overflow-hidden">
      {wall.profileBlock?.profileImageUrl ? (
        <img
          src={wall.profileBlock.profileImageUrl}
          alt="profile"
          className={`h-full w-full rounded-full object-cover ${
            isEdit ? 'opacity-50' : 'opacity-100'
          }`}
        />
      ) : (
        <div className="w-full bg-lightGray h-full" />
      )}

      {isEdit && (
        <label className="cursor-pointer hover:opacity-60 transition absolute bg-white z-20 w-10 h-10 rounded-full flex justify-center items-center">
          <img src={galleryIcon} alt="gallery icon" />
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
