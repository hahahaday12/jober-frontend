import BlockContainer from '@/pages/wall/blocks/BlockContainer';
import Template from '@/pages/wall/blocks/template/Template';

export default function TemplateBlock() {
  return (
    <BlockContainer blockName="templateBlock">
      <div className="p-7 flex flex-col gap-5">
        <div className="text-xl gap-4 text-gray-600 grid grid-cols-2">
          <Template />
          <Template />
        </div>
      </div>
    </BlockContainer>
  );
}
