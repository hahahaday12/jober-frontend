import { WallType } from '@/types/wall';

export const wall: WallType = {
  isPublic: true,
  category: 'career',
  memberId: 1,
  wallInfoBlock: {
    wallInfoTitle: '이호우',
    wallInfoDescription: '프론트엔드 개발자',
    backgroundImgURL:
      'https://images.unsplash.com/photo-1692606674503-267da3da7da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80',
    wallInfoImgURL:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2643&q=80',
  },
  blocks: [
    {
      blockUUID: 'ae4bf0e4-b861-46c2-939e-c3db0ad1c402',
      blockType: 'listBlock',
      subData: [
        {
          listBlockUUID: 'f108fff1-c106-4340-b505-280e15626ecc',
          listLabel: '자격증',
          listTitle: '운전면허증',
          listDescription: '2종보통',
          isLink: false,
        },
        {
          listBlockUUID: '1b539400-5bfb-4459-b60d-ba65080d8211',
          listLabel: '자격증',
          listTitle: '토익',
          listDescription: '930점',
          isLink: false,
        },
        {
          listBlockUUID: '2d7394be-a1d9-4d58-ac94-9543e5116611',
          listLabel: '자격증',
          listTitle: '바리스타자격증',
          listDescription: '커피 물조절 잘함',
          isLink: false,
        },
      ],
    },
    {
      blockUUID: '123bf0e4-b861-46c2-939e-c3db0ad1c123',
      blockType: 'fileBlock',
      subData: [
        {
          fileTitle: '피디에프 파일',
          fileDescription: '파일 부제목',
          fileName: 'Developer_신입_샘플 및 가이드.pdf',
          file: '',
        },
      ],
    },
    {
      blockUUID: '124bf0e4-b861-46c2-939e-c3db0ad1c432',
      blockType: 'freeBlock',
      subData: [
        {
          freeTitle: '자유의 여신상 블록입니다.',
          freeDescription:
            '<p style="text-align: left;"><strong>1. 자버</strong></p><p><strong>2. 버스</strong></p><p>3. 스타</p><p><u>4. 타조</u></p><p><sup><span style="font-family: Impact, Charcoal, sans-serif;">5. 조리</span></sup></p>',
        },
      ],
    },
    {
      blockUUID: 'ad4bf0e4-b861-46c2-939e-c3db0ad1c402',
      blockType: 'snsBlock',
      subData: [
        {
          snsBlockUUID: 'f108fff1-e106-4340-b505-280e15626ecc',
          snsType: 'facebook',
          snsUrl: 'https://www.facebook.com/neocsv',
        },
        {
          snsBlockUUID: 'f108fff1-1106-4340-b505-280e15626ecc',
          snsType: 'instagram',
          snsUrl: 'https://www.instagram.com/shin0._.e/',
        },
        {
          snsBlockUUID: 'f108fff1-2106-4340-b505-280e15626ecc',
          snsType: 'linkedin',
          snsUrl: 'https://www.linkedin.com/in/drsohail269/',
        },
        {
          snsBlockUUID: 'f108fff1-3106-4340-b505-280e15626ecc',
          snsType: 'github',
          snsUrl: 'https://github.com/howooking',
        },
      ],
    },
    {
      blockUUID: '444bf0e4-b861-46c2-939e-c3db0ad1c402',
      blockType: 'templateBlock',
      subData: [
        {
          templateBlockUUID: 'f108fff1-d106-4340-b505-280e15626ecc',
          templateTitle: '자기소개서 1',
          templateDescription: '자기소개서 1',
          hasAccessTemplateAuth: [2, 3, 5, 6, 8, 10],
          hasDenyTemplateAuth: [1, 4, 7, 9],
        },
        {
          templateBlockUUID: 'f108fff1-e106-4340-b505-280e15626ecc',
          templateTitle: '자기소개서 2',
          templateDescription: '자기소개서 2',
          hasAccessTemplateAuth: [1, 4, 7, 9],
          hasDenyTemplateAuth: [2, 3, 5, 6, 8, 10],
        },
      ],
    },
  ],
  styleSetting: {
    backgroundSetting: {
      solidColor: '#ffdaa2',
      gradation: false,
      styleImgURL:
        'https://images.unsplash.com/photo-1692606674503-267da3da7da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80',
    },
    blockSetting: {
      styleColor: '#e4feef',
      gradation: true,
      shape: '13px',
      style: 'shadow',
    },
    themeSetting: null,
  },
};
