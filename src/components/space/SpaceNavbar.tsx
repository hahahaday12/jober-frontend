import { Icon } from '../common';
import hamburgerIcon from '@/assets/icons/space/hamburger.svg';
import darkBellICon from '@/assets/icons/space/dark-bell.svg';
import userIcon from '@/assets/icons/user.svg';

export default function SpaceNavbar({ memberName }: { memberName?: string }) {
  return (
    <header className="h-[70px] bg-sky px-[24px] fixed w-full flex items-center justify-between">
      <Icon src={hamburgerIcon} className="hover" />
      <div className="flex items-center gap-[4px]">
        <span className="db-20">{memberName}</span>
      </div>
      <div className="flex gap-[8px]">
        <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full">
          <Icon src={darkBellICon} className="" />
        </div>
        <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full">
          <Icon src={userIcon} />
        </div>
      </div>
    </header>
  );
}
