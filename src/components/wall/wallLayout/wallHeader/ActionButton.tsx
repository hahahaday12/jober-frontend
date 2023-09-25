import { Icon } from '@/components/common';
import { Button } from 'antd';

type ActionButtonProps = { type: string; className?: string };

export default function ActionButton({ type, className }: ActionButtonProps) {
  return (
    <Button
      className={`hover w-[32px] h-[32px] border-gray88 flex items-center justify-center ${className}`}
    >
      <Icon src={type} />
    </Button>
  );
}
