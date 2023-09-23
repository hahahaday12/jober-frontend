import { Input } from 'antd';
import inputSuffixIcon from '@/assets/icons/input-suffix.svg';
import { Icon } from '@/components/common';
import { useWallStore } from '@/store';

export default function WallHeaderInput() {
  const { wall, setWall } = useWallStore();

  const handleShareURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall({ ...wall, shareURL: e.target.value });
  };

  return (
    <Input
      className="flex-1 rounded-[10px] bg-sky"
      addonBefore={
        <div className="dm-14 text-gray88 ">java-jober.netlify.app/wall/</div>
      }
      suffix={
        <Icon
          src={inputSuffixIcon}
          onClick={() => setWall({ ...wall, shareURL: '' })}
          className="hover"
        />
      }
      value={wall.shareURL}
      onChange={handleShareURL}
    />
  );
}
