interface IconProps {
  src: string;
  onClick?: () => void;
  className?: string;
}

export const Icon = ({ src, onClick, className }: IconProps) => {
  return (
    <img
      draggable={false}
      src={src}
      alt={src}
      className={className}
      onClick={onClick}
    />
  );
};
