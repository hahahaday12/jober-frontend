import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Category() {
  const navigate = useNavigate();

  const uuid = uuidv4().replace(/-/g, '');
  return (
    <>
      <h1>여기에서 카테고리 선택하고 /wall/uuid로 이동</h1>
      <Button onClick={() => navigate(`/wall/${uuid}`)}>생성</Button>
    </>
  );
}
