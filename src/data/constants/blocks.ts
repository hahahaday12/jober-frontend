export const DEFAULT_BLOCKS: { [key: string]: object } = {
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

export const ADDABLE_BLOCKS: {
  [key: string]: {
    title: string;
    image: string;
  };
} = {
  fileBlock: {
    title: '파일 블록',
    image: fileBlock,
  },
  listBlock: {
    title: '리스트 블록',
    image: listBlock,
  },
  freeBlock: {
    title: '자유 블록',
    image: freeBlock,
  },
  snsBlock: {
    title: 'SNS 블록',
    image: snsBlock,
  },
};
