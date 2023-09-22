import { Icon } from '@/components/common';
import { useWallStore } from '@/store';
import { BlockElementType, SubDataClassType } from '@/types/wall';
import { produce } from 'immer';
import resetInput from '@/assets/icons/reset-input.svg';
import PdfPreview from './PdfPreview';
import { message } from 'antd';

type FileUploadProps = {
  isEdit: boolean;
  tragetFileBlockIndex: number;
  targetFileBlock: BlockElementType;
};

const FILE_SIZE_LIMIT = 3 * 1024 * 1024;

export const FileUpload = ({
  isEdit,
  targetFileBlock,
  tragetFileBlockIndex,
}: FileUploadProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { wall, setWall } = useWallStore();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > 3 * FILE_SIZE_LIMIT) {
        messageApi.error('파일크기가 3mb를 초과했습니다.');
        return;
      }
    }

    try {
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

      message.success('pdf파일을 성공적으로 업로드 하였습니다.');
    } catch (error) {
      message.error('pdf파일 업로드 중 에러발생');
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
    <>
      {contextHolder}
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
    </>
  );
};
