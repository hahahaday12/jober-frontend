import { Icon } from '@/components/common';
import { useWallStore } from '@/store';
import { BlockElementType, SubDataClassType } from '@/types/wall';
import { produce } from 'immer';
import resetInput from '@/assets/icons/reset-input.svg';
import PdfPreview from './PdfPreview';

type FileUploadProps = {
  isEdit: boolean;
  tragetFileBlockIndex: number;
  targetFileBlock: BlockElementType;
};

export const FileUpload = ({
  isEdit,
  targetFileBlock,
  tragetFileBlockIndex,
}: FileUploadProps) => {
  const { wall, setWall } = useWallStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            (
              draft.blocks[tragetFileBlockIndex].subData as SubDataClassType
            ).fileName = file!.name;
            (
              draft.blocks[tragetFileBlockIndex].subData as SubDataClassType
            ).file = reader.result as string;
          }),
        );
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleResetFile = () => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[tragetFileBlockIndex].subData as SubDataClassType
        ).fileName = '';
        (draft.blocks[tragetFileBlockIndex].subData as SubDataClassType).file =
          'reader.result as string;';
      }),
    );
  };

  return (
    <div className="">
      {isEdit ? (
        <div className="relative">
          <label className="cursor-pointer rounded-[9px] border-line border-2 border-solid bg-white hover py-[18px] flex items-center px-[16px] ">
            <p className="text-blue dm-16">
              {(targetFileBlock.subData as SubDataClassType).fileName ||
                '파일업로드'}
            </p>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf"
            />
          </label>
          <Icon
            src={resetInput}
            className="absolute right-[18px] top-5 hover"
            onClick={handleResetFile}
          />
        </div>
      ) : (
        <PdfPreview targetFileBlock={targetFileBlock} />
      )}
    </div>
  );
};
