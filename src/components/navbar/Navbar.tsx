import jober_logo from '@/assets/icons/categories/jober_logo.png';
import info from '@/assets/icons/categories/info-circle.svg';
import message from '@/assets/icons/categories/message.svg';
import zoom from '@/assets/icons/categories/zoom-in.svg';
import { Input } from 'antd';

export const Navbar = () => {
  return (
    <nav className="flex h-[70px] items-center bg-sky px-[30px] justify-between">
      <img src={jober_logo} alt="jober_logo" className="w-[115px] h-[37px] " />
      <div className="flex items-center gap-10">
        <div className=" flex items-center">
          <img src={info} alt="info_icon" className=" mr-[6px]" />
          메뉴얼
        </div>
        <div className="flex items-center ">
          <img src={message} alt="message_icon" className=" mr-[6px]" />
          문의하기
        </div>
        <Input
          className=" w-[385px] border-0 rounded-full"
          prefix={<img src={zoom} alt="message_icon" className=" mr-[6px]" />}
        />
      </div>
    </nav>
  );
};
