import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Category = () => {
  const navigate = useNavigate();
  const uuid = crypto.randomUUID().replace(/-/g, '');
  return (
    <>
      <h1>여기에서 카테고리 선택하고 /wall/uuid로 이동</h1>
      <Button onClick={() => navigate(`/wall/${uuid}`)}>생성</Button>
    </>
  );
};
