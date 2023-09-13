import { BlockContainer, Template } from 'components/index';

export const TemplatesBlock = () => {
  return (
    <BlockContainer blockName="templatesBlock">
      <div className="p-7 flex flex-col gap-5">
        <div className="text-xl gap-4 text-gray-600 grid grid-cols-2">
          <Template />
          <Template />
        </div>
      </div>
    </BlockContainer>
  );
};
