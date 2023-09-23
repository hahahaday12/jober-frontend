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
  subData: TemplateBlockSubDataType[];
};

export const TemplateBlock = ({
  subData: templateBlockSubData,
}: TemplateBlockProps) => {
  const { isEdit, wall } = useWallStore();
  const backgroundColor = wall.styleSetting.backgroundSetting.solidColor;

  return (
    <BlockContainer blockName="templateBlock">
      <div
        className={`
        ${isEdit && 'px-[8px] pb-[8px] pt-[40px]'} 
        gap-4 grid grid-cols-2
        `}
        style={{ background: isEdit ? 'white' : backgroundColor }}
      >
        {templateBlockSubData.map((template) => (
          <SingleTemplate
            key={template.templateBlockUUID}
            templateTitle={template.templateTitle}
            templateDescription={template.templateDescription}
          />
        ))}

        {isEdit && (
          <BlockContainer blockName="template">
            <div className="h-[210px] flex flex-col items-center justify-center gap-[8px] dm-16 hover">
              <p>템플릿추가하기</p>
              <p className="text-[24px]">+</p>
            </div>
          </BlockContainer>
        )}
      </div>
    </BlockContainer>
  );
};
