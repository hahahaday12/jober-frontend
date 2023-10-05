import { BlockContainer } from '@/components';
import { Icon } from '@/components/common';
import trashIcon from '@/assets/icons/trash.svg';
import moreVerticalIcon from '@/assets/icons/more-vertical.svg';
import { useWallStore } from '@/store';
import { produce } from 'immer';

type SingleTemplateProps = {
  templateTitle?: string;
  templateDescription?: string;
  templateUUID?: string;
  isFirst: boolean;
};

export default function SingleTemplate({
  templateUUID,
  templateTitle,
  templateDescription,
  isFirst,
}: SingleTemplateProps) {
  const { isEdit, wall, setWall } = useWallStore();

  const handleDeleteBlock = () => {
    setWall(
      produce(wall, (draft) => {
        const templateBlock = draft.blocks.find(
          (block) => block.blockType === 'templateBlock',
        );

        if (templateBlock) {
          const templateIndex = templateBlock.subData.findIndex(
            (template) => template.templateUUID === templateUUID,
          );

          if (templateIndex !== 1) {
            templateBlock.subData.splice(templateIndex, 1);
          }
        }
      }),
    );
  };

  return (
    <BlockContainer blockName="template">
      <div className="sm:h-[210px] h-[115px] p-block">
        <div className="flex items-center justify-between mb-[12px]">
          <h4 className="db-18 sm:db-20">{templateTitle}</h4>
          {isEdit && (
            <div className="flex sm:gap-[8px] gap-[6px]">
              {!isFirst && (
                <Icon
                  src={trashIcon}
                  className="hover"
                  onClick={handleDeleteBlock}
                />
              )}

              <Icon src={moreVerticalIcon} className="hover" />
            </div>
          )}
        </div>
        <p className="dm-16 text-gray88">{templateDescription}</p>
      </div>
    </BlockContainer>
  );
}
