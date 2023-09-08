import { useParams } from "react-router-dom";
import WallHeader from "./WallHeader";
import { FloatButton, message } from "antd";
import ModalOpen from "./components/modal/modalLayout";

export default function Wall() {
  const { wallId } = useParams();

  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className="min-h-screen flex flex-col">
      {contextHolder}
      <WallHeader />
      <main className="pt-10 flex-1 ">
        <ModalOpen/>
        <div className="h-[5000px]">{wallId}</div>
        <FloatButton
          onClick={() => {
            messageApi.open({
              type: "error",
              content: "This is a success message",
            });
          }}
        />
      </main>
    </div>
  );
}
