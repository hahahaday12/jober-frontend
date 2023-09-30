import userIcon from '@/assets/icons/home/user.svg';
import darkGalleryIcon from '@/assets/icons/home/dark-gallery.svg';
import settingIcon from '@/assets/icons/home/setting.svg';
import { Icon } from '../common';

export default function HomeProfile() {
  return (
    <section className="flex gap-[20px] mb-[50px]">
      <div className="bg-sky w-[84px] h-[84px] rounded-full border-[3px] border-solid flex justify-center items-center relative">
        <Icon src={userIcon} className="w-[38px]" />
        <Icon
          src={darkGalleryIcon}
          className="absolute -right-[4px] -bottom-[4px]"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[8px] items-center">
          <p className="db-20 ">김현우</p>
          <p className="db-12 text-blue">⦁ Free</p>
          <p className="db-12 text-blue border-[1px] border-blue border-solid px-[10px] py-[4px] rounded-full">
            업그레이드
          </p>
        </div>
        <div className="text-gray88 dm-14">abcd@gmail.com </div>
        <div className="flex items-center">
          <Icon src={settingIcon} className="hover" />
          <p className="text-gray88 dm-14">계정설정</p>
        </div>
      </div>
    </section>
  );
}
