import userIcon from '@/assets/icons/user.svg';
import { useWallStore } from '@/store';

export default function WallHeaderUser() {
  const { wall } = useWallStore();
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-sky w-[36px] h-[36px] flex justify-center items-center rounded-full">
        <img src={userIcon} alt="user icon" />
      </div>
      <div className="db-16">{wall.profileBlock?.profileTitle}</div>
    </div>
  );
}
