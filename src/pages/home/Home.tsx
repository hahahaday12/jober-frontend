import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const name = "12";
  return (
    <>
      <h1>
        여기에서 생성된 공유페이지 확인하고 생성 버튼 있는 페이지임 (현준님)
      </h1>
      <Button onClick={() => navigate("/category")}>공유페이지 생성</Button>
    </>
  );
}
