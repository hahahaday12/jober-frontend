interface CategoryCardProps {
  category: string;
  imageSrc: string;
  onSelectCategory: (category: string) => void;
  isSelected: boolean;
  label: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  imageSrc,
  onSelectCategory,
  isSelected,
  label,
}) => {
  return (
    <li
      className={`px-7 pt-6 pb-5 sm:px-14 sm:pt-10 sm:pb-5 flex flex-col rounded-[20px] items-center transition bg-gray hover hover:grayscale-[0]
      ${isSelected ? 'shadow-lg' : 'grayscale-[100]'}
      `}
      onClick={() => {
        onSelectCategory(category);
      }}
    >
      <img
        src={imageSrc}
        alt={category}
        draggable={false}
        className="w-[82px] sm:w-[134px]"
      />
      <span
        className={`
        ${isSelected ? 'text-lightBlack' : 'text-gray88'}
        text-[16px] font-normal sm:text-[24px] sm:font-bold mt-[15px] sm:mt-[30px] 
        `}
      >
        {label}
      </span>
    </li>
  );
};
