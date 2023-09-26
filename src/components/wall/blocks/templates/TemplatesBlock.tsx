import { useWallStore } from '@/store';
import { SubDatumType } from '@/types/wall';
import { BlockContainer } from 'components/index';
import SingleTemplate from './SingleTemplate';

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
        ${isEdit && 'px-[8px] pb-[8px] pt-[40px]'} 
        gap-4 grid sm:grid-cols-2 grid-cols-1
        `}
        style={{ background: isEdit ? 'white' : 'white' }}
      >
        {templateBlockSubData?.map((template) => (
          <SingleTemplate
            key={template.templateBlockUUID}
            templateTitle={template.templateTitle}
            templateDescription={template.templateDescription}
          />
        ))}

        {isEdit && (
          <BlockContainer blockName="template">
            <div
              className="sm:h-[210px] h-[115px] flex flex-col items-center justify-center gap-[8px] dm-16 hover"
              ref={templateAddButtonRef}
            >
              <p>템플릿추가하기</p>
              <p className="text-[24px]">+</p>
            </div>
          </BlockContainer>
        )}
      </div>
    </BlockContainer>
  );
};
