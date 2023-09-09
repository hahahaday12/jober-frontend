import { Button } from 'antd';

export default function ActionButton({ type }: { type: string }) {
  return (
    <Button className="hover:opacity-60 transition cursor-pointer w-[32px] h-[32px] border-[1px] border-solid  border-gray88 flex justify-center items-center">
      <img src={type} alt="sms icon" />
    </Button>
  );
}
