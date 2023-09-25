export const IMAGE_FILE_SIZE_LIMIT = 2 * 1024 * 1024;

export const DEFAULT_BLOCKS: { [key: string]: object } = {
  listBlock: [
    {
      listBlockUUID: crypto.randomUUID(),
      listLabel: '',
      listTitle: '',
      listDescription: '',
      isLink: false,
    },
  ],
  fileBlock: [
    {
      fileTitle: '',
      fileDescription: '',
      fileName: '',
      file: '',
    },
  ],

  snsBlock: [],
  templateBlock: [],
  freeBlock: [
    {
      freeTitle: '',
      freeDescription: '',
    },
  ],
};

import listBlock from '@/assets/addableBlocks/listBlock.png';
import freeBlock from '@/assets/addableBlocks/freeBlock.png';
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

import facebookLogo from '@/assets/icons/facebook-logo.svg';
import instagramLogo from '@/assets/icons/instagram-logo.svg';
import linkedinLogo from '@/assets/icons/linkedin-logo.svg';
import behanceLogo from '@/assets/icons/behance-logo.svg';

export const ADDABLE_SNSS: {
  [key: string]: {
    title: string;
    svg: string;
    url: string;
  };
} = {
  facebook: {
    title: 'Facebook',
    svg: facebookLogo,
    url: 'facebook.com/',
  },
  instagram: {
    title: 'Instagram',
    svg: instagramLogo,
    url: 'instagram.com/',
  },
  linkedin: {
    title: 'Linkedin',
    svg: linkedinLogo,
    url: 'linkedin.com/',
  },
  behance: {
    title: 'Behance',
    svg: behanceLogo,
    url: 'behance.net/',
  },
};
