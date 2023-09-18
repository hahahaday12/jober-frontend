interface IconProps {
  src: string;
  onClick: () => void;
  className?: string;
}

export default function Icon({ src, onClick, className }: IconProps) {
  return (
    <img
      src={src}
      alt="edit icon"
      className={`hover ${className}`}
      onClick={onClick}
    />
  );
}
