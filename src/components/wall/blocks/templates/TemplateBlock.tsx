import { useWallStore } from '@/store';
import { SubDatumType } from '@/types/wall';
import { BlockContainer } from 'components/index';
import SingleTemplate from './SingleTemplate';
import { ModalOpen } from 'components/index';

export type TemplateBlockSubDataType = Pick<
  SubDatumType,
  | 'templateTitle'
  | 'templateDescription'
  | 'hasAccessTemplateAuth'
  | 'hasDenyTemplateAuth'
  | 'templateBlockUUID'
>;

type TemplateBlockProps = {
  blockUUID?: string;
  subData?: TemplateBlockSubDataType[];
  templateAddButtonRef: React.MutableRefObject<null>;
  onClick?: () => void;
};

export const TemplateBlock = ({
  subData: templateBlockSubData,
  templateAddButtonRef,
}: TemplateBlockProps) => {
  const { isEdit } = useWallStore();

  return (
    <BlockContainer blockName="templateBlock">
      <div
        className={`
        ${isEdit && 'px-[8px] pb-[8px] pt-[30px]'} 
        gap-4 grid sm:grid-cols-2 grid-cols-1
        `}
      >
        {templateBlockSubData?.map((template) => (
          <SingleTemplate
            key={template.templateBlockUUID}
            templateTitle={template.templateTitle}
            templateDescription={template.templateDescription}
          />
        ))}

        {isEdit && (
          <>
            <BlockContainer blockName="template">
              <div
                className="sm:h-[210px] h-[115px] flex flex-col items-center justify-center gap-[8px] dm-16 "
                ref={templateAddButtonRef}
              >
                <ModalOpen />
              </div>
            </BlockContainer>
          </>
        )}
      </div>
    </BlockContainer>
  );
};
