import userIcon from '@/assets/icons/user.svg';
import { Icon } from '@/components/common';
import { useWallStore } from '@/store';
import { useNavigate } from 'react-router-dom';

export default function WallHeaderUser() {
  const { wall } = useWallStore();
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-[10px] hover"
      onClick={() => navigate('/space/personal')}
    >
      <div className="bg-sky w-[36px] h-[36px] flex justify-center items-center rounded-full">
        <Icon src={userIcon} />
      </div>
      <h1 className="db-16">
        {wall.wallInfoBlock?.wallInfoTitle || '페이지명'}
      </h1>
    </div>
  );
}
