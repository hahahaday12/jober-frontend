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

export const DEFAULT_WALL: {
  [key: string]: Omit<
    WallType,
    'isPublic' | 'category' | 'memberId' | 'shareURL'
  >;
} = {
  career: {
    wallInfoBlock: {
      wallInfoTitle: '',
      wallInfoDescription: '',
      backgroundImgURL: '',
      wallInfoImgURL: '',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'listBlock',
        subData: [
          {
            listBlockUUID: crypto.randomUUID(),
            listLabel: '학력/경력/링크',
            listTitle: '',
            listDescription: '',
            isLink: false,
          },
        ],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'fileBlock',
        subData: [
          {
            fileTitle: '포트폴리오',
            fileDescription: '포트폴리오 설명',
            fileName: '',
            file: '',
          },
        ],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'snsBlock',
        subData: [],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'templateBlock',
        subData: [
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '자기소개서',
            templateDescription: '자기소개서 템플릿입니다.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
        ],
      },
    ],
    styleSetting: {
      backgroundSetting: {
        solidColor: '#eeeeee',
        gradation: false,
        styleImgURL: '',
      },
      blockSetting: {
        styleColor: '#ffffff',
        gradation: false,
        shape: '6px',
        style: 'none',
      },
      themeSetting: null,
    },
  },
  personal: {
    wallInfoBlock: {
      wallInfoTitle: '',
      wallInfoDescription: '',
      backgroundImgURL: '',
      wallInfoImgURL: '',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'listBlock',
        subData: [
          {
            listBlockUUID: crypto.randomUUID(),
            listLabel: '학력/경력/링크',
            listTitle: '',
            listDescription: '',
            isLink: false,
          },
        ],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'freeBlock',
        subData: [
          {
            freeTitle: '',
            freeDescription: '',
          },
        ],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'snsBlock',
        subData: [],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'templateBlock',
        subData: [
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '자기소개서',
            templateDescription: '자기소개서 템플릿입니다.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
        ],
      },
    ],
    styleSetting: {
      backgroundSetting: {
        solidColor: '#eeeeee',
        gradation: false,
        styleImgURL: '',
      },
      blockSetting: {
        styleColor: '#ffffff',
        gradation: false,
        shape: '6px',
        style: 'none',
      },
      themeSetting: null,
    },
  },
  event: {
    wallInfoBlock: {
      wallInfoTitle: '',
      wallInfoDescription: '',
      backgroundImgURL: '',
      wallInfoImgURL: '',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'freeBlock',
        subData: [
          {
            freeTitle: '',
            freeDescription: '',
          },
        ],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'snsBlock',
        subData: [],
      },
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'templateBlock',
        subData: [
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '명함',
            templateDescription: '명함 템플릿입니다.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
        ],
      },
    ],
    styleSetting: {
      backgroundSetting: {
        solidColor: '#eeeeee',
        gradation: false,
        styleImgURL: '',
      },
      blockSetting: {
        styleColor: '#ffffff',
        gradation: false,
        shape: '6px',
        style: 'none',
      },
      themeSetting: null,
    },
  },
  enterprise: {
    wallInfoBlock: {
      wallInfoTitle: '',
      wallInfoDescription: '',
      backgroundImgURL: '',
      wallInfoImgURL: '',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'templateBlock',
        subData: [
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '사내 공지사항',
            templateDescription:
              '사내 공지를 위한 공문 양식입니다. 자유롭게 활용해보세요!',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '문의하기',
            templateDescription: '궁금한 점이나 제안할 내용을 작성해주세요.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '퇴사확인서',
            templateDescription:
              '퇴사사실을 확인하기 위해 발급하는 확인 문서입니다.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
        ],
      },
    ],
    styleSetting: {
      backgroundSetting: {
        solidColor: '#eeeeee',
        gradation: false,
        styleImgURL: '',
      },
      blockSetting: {
        styleColor: '#ffffff',
        gradation: false,
        shape: '6px',
        style: 'none',
      },
      themeSetting: null,
    },
  },
  basic: {
    wallInfoBlock: {
      wallInfoTitle: '',
      wallInfoDescription: '',
      backgroundImgURL: '',
      wallInfoImgURL: '',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'templateBlock',
        subData: [
          {
            templateBlockUUID: crypto.randomUUID(),
            templateTitle: '방명록',
            templateDescription: '하고 싶은 말을 자유롭게 적어주세요!',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
        ],
      },
    ],
    styleSetting: {
      backgroundSetting: {
        solidColor: '#eeeeee',
        gradation: false,
        styleImgURL: '',
      },
      blockSetting: {
        styleColor: '#ffffff',
        gradation: false,
        shape: '6px',
        style: 'none',
      },
      themeSetting: null,
    },
  },
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
import { WallType } from '@/types/wall';

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
