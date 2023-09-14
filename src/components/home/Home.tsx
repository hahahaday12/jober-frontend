import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import setting from '@/assets/icons/home/setting-2.png';
import ellipse from '@/assets/icons/home/Ellipse 91.svg';
import ellipse2 from '@/assets/icons/home/Ellipse 29.svg';
import user from '@/assets/icons/home/user.svg';
import gallery from '@/assets/icons/home/gallery.svg';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-col">
      <div className=" mt-[70px]">
        <div className="flex left-0justify-center items-center">
          <img className=" absolute" src={ellipse} alt="" />
          <img className=" absolute" src={ellipse2} alt="" />
          <img className=" absolute" src={user} alt="" />
          <img className=" absolute" src={gallery} alt="" />
        </div>
        <div>
          <div>김현우</div>
          <div>abcd@gmail.com</div>
          <div>
            <img src={setting} alt="setting_icon" />
            계정 설정
          </div>
        </div>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <Button onClick={() => navigate('/category')}>공유페이지 생성</Button>
    </div>
  );
};
