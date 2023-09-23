import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/category')}>공유페이지 생성</Button>
    </>
  );
};
