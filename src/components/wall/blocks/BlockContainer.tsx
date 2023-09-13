import { useWallStore } from '@/store';
import DragHandle from '@/components/wall/blocks/DragHandle';

interface BlockContainerProps {
  children: React.ReactNode;
  blockName: string;
}

export const BlockContainer = ({
  children,
  blockName,
}: BlockContainerProps) => {
  const { isEdit, wall } = useWallStore();

  return (
    <div
      className={`bg-white rounded-[${wall?.style?.block?.shape}] overflow-hidden relative`}
    >
      {blockName !== 'profileBlock' && <>{isEdit && <DragHandle />}</>}
      {children}
    </div>
  );
};
