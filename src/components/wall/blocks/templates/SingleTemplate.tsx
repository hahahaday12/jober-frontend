import { BlockContainer } from '@/components';
import { Icon } from '@/components/common';
import trashIcon from '@/assets/icons/trash.svg';
import moreVerticalIcon from '@/assets/icons/more-vertical.svg';
import { useWallStore } from '@/store';

type SingleTemplateProps = {
  templateTitle?: string;
  templateDescription?: string;
};

export default function SingleTemplate({
  templateTitle,
  templateDescription,
}: SingleTemplateProps) {
  const { isEdit } = useWallStore();
  return (
    <BlockContainer blockName="template">
      <div className="h-[210px] p-block">
        <div className="flex items-center justify-between mb-[12px]">
          <h4 className="db-20">{templateTitle}</h4>
          {isEdit && (
            <div className="flex gap-[8px]">
              <Icon src={trashIcon} className="hover" />
              <Icon src={moreVerticalIcon} className="hover" />
            </div>
          )}
        </div>
        <p className="dm-16 text-gray88">{templateDescription}</p>
      </div>
    </BlockContainer>
  );
}
