import { Input } from 'antd';

const SnsModalInput = ({ sns }: { sns: string }) => {
  return (
    <div className="text-center">
      <Input
        className="mb-[6px] rounded-[10px] bg-sky w-[395px]"
        addonBefore={
          <div className="dm-14 text-gray88 ">{`${sns.toLowerCase()}.com/`}</div>
        }
        placeholder="주소를 입력해주세요"
        // value={wallIdInput}
        // onChange={(e) => setwallIdInput(e.target.value)}
      />
    </div>
  );
};

export default SnsModalInput;
