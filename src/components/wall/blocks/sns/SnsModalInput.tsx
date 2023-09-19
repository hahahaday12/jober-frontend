import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { Input } from 'antd';

type SnsModalInputProps = {
  sns: string;
  snsInput: string;
  setSnsInput: React.Dispatch<React.SetStateAction<string>>;
};

const SnsModalInput = ({ sns, setSnsInput, snsInput }: SnsModalInputProps) => {
  return (
    <div className="text-center">
      <Input
        className="mt-[24px] mb-[6px] rounded-[10px] bg-sky w-[395px]"
        addonBefore={
          <div className="dm-14 text-gray88 ">{`${ADDABLE_SNSS[sns].url}`}</div>
        }
        placeholder="주소를 입력해주세요"
        value={snsInput}
        onChange={(e) => setSnsInput(e.target.value)}
      />
    </div>
  );
};

export default SnsModalInput;
