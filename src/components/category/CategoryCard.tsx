interface CategoryCardProps {
  category: string;
  imageSrc: string;
  onSelectCategory: (category: string) => void;
  isSelected: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  imageSrc,
  onSelectCategory,
  isSelected,
}) => {
  const cardClasses = `flex flex-col h-[290px] w-[302px] rounded-lg bg-lightGray items-center transition ${
    isSelected ? 'cardshadow' : 'grayscale-[100]'
  }`;

  return (
    <div
      className={cardClasses}
      onClick={() => {
        onSelectCategory(category);
      }}
    >
      <img src={imageSrc} alt={category} className="mt-[59px]" />
      <div className="db-24 mt-[36px]">{category}</div>
    </div>
  );
};
