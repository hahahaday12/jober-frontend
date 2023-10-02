import { Button, Divider, message } from 'antd';
import { SHARINGS } from '@/data/constants/sharings';
import { useWallStore } from '@/store';
import { kakaoShare } from '@/utils/kakaoShare';

type SharePopoverProps = {
  setSharePopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  verticalMore: boolean;
  handleVerticalMorePopoevrOpenChange: (newOpen: boolean) => void;
};

export default function SharePopover({
  setSharePopoverOpen,
  verticalMore,
  handleVerticalMorePopoevrOpenChange,
}: SharePopoverProps) {
  const { wall } = useWallStore();

  const [messageApi, contextHolder] = message.useMessage();

  const handleShare = (method: string) => {
    if (method === 'copy') {
      navigator.clipboard.writeText(
        `${import.meta.env.VITE_CLIENT_URL}${wall.shareURL}`,
      );
      messageApi.success('클립보드에 주소가 복사되었습니다.');
      setSharePopoverOpen(false);
      handleVerticalMorePopoevrOpenChange(false);
      return;
    }
    if (method === 'kakao') {
      kakaoShare(wall);
      setSharePopoverOpen(false);
      handleVerticalMorePopoevrOpenChange(false);
      return;
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-center mt-[20px]">
        <Button
          danger
          className="absolute left-[30px]"
          onClick={() => setSharePopoverOpen(false)}
        >
          취소
        </Button>
        <div className="dm-16">공유하기</div>
      </div>
      <Divider className="my-[20px]" />
      <div
        className={`
      ${verticalMore ? 'px-[0px]' : 'px-[50px]'}
       pb-[18px]
      `}
      >
        <ul className="flex justify-between gap-[24px] mt-[31px]">
          {SHARINGS.map((share) => (
            <li
              key={share.title}
              className={`
              ${verticalMore ? 'w-[50px]' : 'w-[60px]'}
              flex flex-col items-center gap-[8px]
              `}
            >
              <img
                src={share.src}
                alt={share.title}
                className={`
                ${verticalMore ? 'w-[40px]' : 'w-[60px]'}
                hover
                `}
                onClick={() => handleShare(share.method)}
              />
              <p className="text-[12px] tracking-tight text-gray88">
                {share.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
