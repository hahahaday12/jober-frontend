import { WallType } from '@/types/wall';

export const wall: WallType = {
  category: 'career',
  memberId: 1,
  addSpaceId: 1,
  shareURL: 'howooking',
  wallInfoBlock: {
    wallInfoBlockId: 27,
    wallInfoTitle: '개발자 이호우',
    wallInfoDescription: '안녕하세요, 고양이 개발자 이호우입니다.',
    wallInfoImgURL: null,
    backgroundImgURL: null,
  },
  blocks: [
    {
      blockUUID: '111',
      blockType: 'freeBlock',
      subData: [
        {
          freeBlockId: 27,
          freeTitle: '자유블록은 자유롭고싶다.',
          freeContent: '<p>자유블록의 자유는 없다.</p>',
        },
      ],
    },
    {
      blockUUID: '222',
      blockType: 'listBlock',
      subData: [
        {
          listBlockId: 123,
          listLabel: '프로그래밍 기술 스택',
          listTitle: 'HTML',
          listDescription: '고수',
          isLink: false,
        },
        {
          listBlockId: 124,
          listLabel: '',
          listTitle: 'CSS',
          listDescription: '중수',
          isLink: false,
        },
        {
          listBlockId: 125,
          listLabel: '',
          listTitle: 'JAVASCRIPT',
          listDescription: '하수',
          isLink: false,
        },
        {
          listBlockId: 126,
          listLabel: '',
          listTitle: 'REACT',
          listDescription: '입문',
          isLink: false,
        },
        {
          listBlockId: 127,
          listLabel: '',
          listTitle: '뷰',
          listDescription: '문외한',
          isLink: false,
        },
        {
          listBlockId: 128,
          listLabel: '',
          listTitle: 'JAVA/SPRING',
          listDescription: '마스터',
          isLink: false,
        },
      ],
    },
    {
      blockUUID: '333',
      blockType: 'snsBlock',
      subData: [
        {
          snsBlockId: 77,
          snsUUID: '444',
          snsType: 'facebook',
          snsURL: 'https://www.facebook.com/neocsv',
        },
        {
          snsBlockId: 78,
          snsUUID: '555',
          snsType: 'instagram',
          snsURL: 'https://www.instagram.com/shin0._.e/',
        },
        {
          snsBlockId: 79,
          snsUUID: '666',
          snsType: 'empty',
          snsURL: 'https://www.isLinkedin.com/in/drsohail269/',
        },
      ],
    },
    {
      blockUUID: '777',
      blockType: 'fileBlock',
      subData: [
        {
          fileBlockId: 17,
          fileTitle: '이력서',
          fileDescription: '개발자 이력서 2023',
          fileName: null,
        },
      ],
    },
    {
      blockUUID: '888',
      blockType: 'listBlock',
      subData: [
        {
          listBlockId: 129,
          listLabel: '자격증',
          listTitle: '운전면허증',
          listDescription: '2종보통',
          isLink: false,
        },
        {
          listBlockId: 130,
          listLabel: '자격증',
          listTitle: '바리스타자격증',
          listDescription: '스타벅스',
          isLink: false,
        },
      ],
    },
    {
      blockUUID: '444bf0e4-b861-46c2-939e-c3db0ad1c402',
      blockType: 'templateBlock',
      subData: [
        {
          templateBlockId: 19,
          templateUUID: 'f108fff1-d106-4340-b505-280e15626ecc',
          templateTitle: '자기소개서',
          templateDescription: '내가 누구게',
          hasAccessTemplateAuth: [],
          hasDenyTemplateAuth: [],
        },
        {
          templateBlockId: 20,
          templateUUID: 'f108fff1-e106-4340-b505-280e15626ecc',
          templateTitle: '이력서',
          templateDescription: '이력없음',
          hasAccessTemplateAuth: [],
          hasDenyTemplateAuth: [],
        },
      ],
    },
  ],
  styleSetting: {
    backgroundSetting: {
      backgroundSettingId: 18,
      solidColor: '#eeeeee',
      gradation: false,
      styleImgURL: null,
    },
    blockSetting: {
      blockSettingId: 18,
      shape: '0px',
      style: 'simple',
      styleColor: '#ffffff',
      gradation: false,
    },
    themeSetting: {
      themeSettingId: 18,
      theme: 'modern',
    },
  },
};
