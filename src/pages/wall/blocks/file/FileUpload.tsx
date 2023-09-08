import { useWallStore } from '@/store';
import { FileBlockType } from '@/types/blocks';
import { UploadOutlined } from '@ant-design/icons';
import { produce } from 'immer';

interface FileUploadProps {
  isEdit: boolean;
}

export default function FileUpload({ isEdit }: FileUploadProps) {
  const { wall, setWall } = useWallStore();
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            (draft.fileBlock as FileBlockType).fileName = file!.name;
            (draft.fileBlock as FileBlockType).file = reader.result as string;
          }),
        );
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      {isEdit ? (
        <label className="cursor-pointer">
          <UploadOutlined />
          <span>pdf만 가능</span>
          <div>{wall.fileBlock?.fileName}</div>
          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf"
          />
        </label>
      ) : (
        <>pdf미리보기 구현{wall.fileBlock?.fileName}</>
      )}
    </div>
  );
}
