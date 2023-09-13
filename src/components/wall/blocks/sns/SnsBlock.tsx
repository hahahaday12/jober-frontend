import { Button } from 'antd';
import { useState } from 'react';
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useWallStore } from '@/store';
import { BlockContainer, SnsBlockModal } from 'components/index';
import { BlockType, SubDataClassType, SubDatumType } from '@/types/wall';

export interface Sns {
  title: string;
  href: string;
}

const SNS_ICONS: {
  [key: string]: JSX.Element;
} = {
  facebook: <FacebookOutlined />,
  instagram: <InstagramOutlined />,
  linkedin: <LinkedinOutlined />,
  github: <GithubOutlined />,
};

interface SnsBlockProps {
  blockUUID?: string;
  blockType?: BlockType;
  subData?: SubDatumType[] | SubDataClassType;
}

export const SnsBlock = ({ blockUUID, blockType, subData }: SnsBlockProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isEdit, wall } = useWallStore();

  return (
    <BlockContainer blockName="snsBlock" blockUUID={blockUUID}>
      <div className="p-7 space-y-5">
        <div className="flex items-center text-gray-600 gap-2">
          <h4 className="flex text-xl font-bold items-center">SNS 연결</h4>
          <p>보여주고 싶은 SNS를 연결해주세요!</p>
        </div>
        <div className="flex gap-3 justify-center">
          {wall.snsBlock?.map((sns) => (
            <Button
              key={sns.snsUrl}
              className="w-16 h-16 text-4xl"
              shape="circle"
            >
              <a target="_blank" href={sns.snsUrl}>
                {SNS_ICONS[sns.snsTitle]}
              </a>
            </Button>
          ))}
          <Button
            shape="circle"
            type="default"
            className={`w-16 h-16 ${!isEdit && 'hidden'}`}
            onClick={() => setIsModalOpen(true)}
          >
            <PlusOutlined />
          </Button>
          <SnsBlockModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </BlockContainer>
  );
};
