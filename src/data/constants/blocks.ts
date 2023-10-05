export const IMAGE_FILE_SIZE_LIMIT = 2 * 1024 * 1024;

export const DEFAULT_BLOCKS: { [key: string]: object } = {
  listBlock: [
    {
      listUUID: crypto.randomUUID(),
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
      freeContent: '',
    },
  ],
};

export const DEFAULT_WALL: { [key: string]: object } = {
  career: {
    wallInfoBlock: {
      wallInfoBlockId: 1,
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
            listBlockId: 1,
            listUUID: crypto.randomUUID(),
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
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: null,
      },
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
            listUUID: crypto.randomUUID(),
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
            freeContent: '',
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
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: null,
      },
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
            freeContent: '',
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
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: null,
      },
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
            templateUUID: crypto.randomUUID(),
            templateTitle: '사내 공지사항',
            templateDescription:
              '사내 공지를 위한 공문 양식입니다. 자유롭게 활용해보세요!',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
          {
            templateUUID: crypto.randomUUID(),
            templateTitle: '문의하기',
            templateDescription: '궁금한 점이나 제안할 내용을 작성해주세요.',
            hasAccessTemplateAuth: [],
            hasDenyTemplateAuth: [],
          },
          {
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: null,
      },
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
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: null,
      },
    },
  },
  temp: {
    wallInfoBlock: {
      wallInfoTitle: '임시저장 페이지',
      wallInfoDescription: '임시로 저장했던 페이지입니다.',
      backgroundImgURL:
        'https://images.unsplash.com/photo-1696353342921-1c07791c05eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2569&q=80',
      wallInfoImgURL: 'https://avatars.githubusercontent.com/u/87072568?v=4',
    },
    blocks: [
      {
        blockUUID: crypto.randomUUID(),
        blockType: 'listBlock',
        subData: [
          {
            listUUID: crypto.randomUUID(),
            listLabel: '학력/경력/링크',
            listTitle: '학력',
            listDescription: '와플대학 수석',
            isLink: false,
          },
          {
            listUUID: crypto.randomUUID(),
            listLabel: '',
            listTitle: '경력',
            listDescription: 'html 개발자',
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
            freeContent: '',
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
            templateUUID: crypto.randomUUID(),
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
        styleImgURL: null,
      },
      blockSetting: {
        shape: '0px',
        style: 'none',
        styleColor: '#ffffff',
        gradation: false,
      },
      themeSetting: {
        theme: 'modern',
      },
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
