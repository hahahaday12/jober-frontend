export const DEFAULT_BLOCKS = {
  listBlock: {
    blockType: 'listBlock',
    subData: {
      listTitle: '',
      lists: [
        {
          listSubtitle: '',
          listDescription: '',
          isLink: false,
        },
      ],
    },
  },
  fileBlock: {
    blockType: 'fileBlock',
    subData: {
      fileTitle: '',
      fileSubtitle: '',
      fileName: '',
      file: '',
    },
  },
  snsBlock: {
    blockType: 'snsBlock',
    subData: [
      {
        snsTitle: '',
        snsUrl: '',
      },
    ],
  },
  templatesBlcok: {
    blockType: 'templatesBlock',
    subData: [
      {
        templateTitle: '',
        templateDescription: '',
      },
    ],
  },
  freeBlock: {
    blockType: 'freeBlock',
    subData: {
      freeTitle: '',
      freeDescription: '',
    },
  },
};

import listBlock from '@/assets/addableBlocks/listBlock.png';
import freeBlock from '@/assets/addableBlocks/listBlock.png';
import fileBlock from '@/assets/addableBlocks/fileBlock.png';
import snsBlock from '@/assets/addableBlocks/snsBlock.png';

export const ADDANLE_BLOCKS: {
  [key: string]: {
    title: string;
    image: string;
  };
} = {
  listBlock: {
    title: '리스트블록',
    image: listBlock,
  },
  fileBlock: {
    title: '파일블록',
    image: fileBlock,
  },
  freeBlock: {
    title: '자유블록',
    image: freeBlock,
  },
  snsBlock: {
    title: 'SNS블록',
    image: snsBlock,
  },
};
