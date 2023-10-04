import { Icon } from '../common';
import hamburgerIcon from '@/assets/icons/space/hamburger.svg';
import mobileDropdownIcon from '@/assets/icons/mobile-dropdown.svg';
import darkBellICon from '@/assets/icons/space/dark-bell.svg';
import userIcon from '@/assets/icons/user.svg';

export default function SpaceNavbar({ spaceTitle }: { spaceTitle?: string }) {
  return (
    <header className="h-[70px] bg-sky px-[24px] fixed w-full flex items-center justify-between">
      <Icon src={hamburgerIcon} className="hover" />
      <div className="flex items-center gap-[4px]">
        <span className="db-20">{spaceTitle}</span>
        <Icon src={mobileDropdownIcon} className="hover" />
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
