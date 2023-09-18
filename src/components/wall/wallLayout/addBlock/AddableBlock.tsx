import { ADDABLE_BLOCKS } from '@/data/constants/blocks';

interface AddableBlockProp {
  block: string;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedBlock: string;
  hasSnsBlock: boolean;
}

export const AddableBlock = ({
  block,
  handleSelect,
  selectedBlock,
  hasSnsBlock,
}: AddableBlockProp) => {
  console.log(selectedBlock);
  return (
    <label
      className={`w-[238px] ${hasSnsBlock && block === 'snsBlock' && 'hidden'}`}
    >
      <input
        className="hidden"
        type="radio"
        name="block"
        value={block}
        checked={block === selectedBlock}
        onChange={handleSelect}
      />
      <div className="mb-[16px] dm-16">{ADDABLE_BLOCKS[block].title}</div>
      <img
        src={ADDABLE_BLOCKS[block].image}
        alt="block"
        className={`overflow-hidden rounded-[11px] w-[238px] h-[128px] hover:ring-blue hover:ring-1 hover ${
          selectedBlock === block && 'ring-blue ring-1'
        }`}
      />
    </label>
  );
};
