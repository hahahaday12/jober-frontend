import { useWallStore } from '@/store';
import { DeleteTwoTone, SmallDashOutlined } from '@ant-design/icons';
import { produce } from 'immer';

interface BlockContainerProps {
  children: React.ReactNode;
  blockName: string;
}

export const BlockContainer = ({children,blockName,}: BlockContainerProps) => {
  const { isEdit, wall, setWall } = useWallStore();
  const handleDeletBlock = () => {
    setWall(
      produce(wall, (draft) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (draft as any)[blockName] = undefined;
        draft.order = draft.order.filter((block) => block !== blockName);
      }),
    );
  };
  return (
    <div className="bg-slate-100 rounded-[7px] overflow-hidden relative">
      {blockName !== 'profileBlock' && (
        <>
          {isEdit && (
            <>
              <SmallDashOutlined className="text-xs handle cursor-pointer hover:scale-110 absolute right-1/2" />
              <DeleteTwoTone
                onClick={handleDeletBlock}
                className="absolute right-3 top-3 text-[14px] hover:scale-105 transition cursor-pointer"
                twoToneColor="red"
              />
            </>
          )}
        </>
      )}

      {children}
    </div>
  );
}
