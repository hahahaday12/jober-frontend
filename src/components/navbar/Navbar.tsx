import joberLogo from '@/assets/icons/categories/jober_logo.png';
import info from '@/assets/icons/categories/info-circle.svg';
import message from '@/assets/icons/categories/message.svg';
import zoom from '@/assets/icons/categories/zoom-in.svg';
import { Input } from 'antd';
import { Icon } from '../common';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-sky">
      <div className="flex items-center h-[48px] sm:h-[70px] px-[24px] sm:px-[30px] justify-between max-w-[1920px] mx-auto">
        <img
          src={joberLogo}
          alt="jober logo"
          className="w-[80px] sm:w-[115px] hover"
          onClick={() => navigate('/')}
        />

        {/* DESKTOP */}
        <div className="items-center gap-[48px] hidden sm:flex">
          <div className=" flex items-center hover">
            <Icon src={info} className="mr-[6px]" />
            <span>메뉴얼</span>
          </div>
          <div className="flex items-center hover">
            <Icon src={message} className="mr-[6px]" />
            <span>문의하기</span>
          </div>
          <Input
            placeholder="기능없음"
            className=" w-[385px] border-0 rounded-full"
            prefix={<Icon src={zoom} className="mr-[6px]" />}
          />
        </div>

        {/* MOBILE */}
        <div className=" items-center gap-[22px] flex sm:hidden">
          <Icon src={zoom} className="mr-[6px] hover" />
          <Icon src={message} className="mr-[6px] hover" />
        </div>
      </div>
    </header>
  );
};
