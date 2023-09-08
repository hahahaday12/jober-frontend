import { WallType } from '@/types/wall';

export const defaultWall: { [key: string]: WallType } = {
  career: {
    shareUrl: '',
    category: 'career',
    userId: 1,
    profileBgUrl: '',
    ProfileImageUrl: '',
    pageTitle: '',
    pageDescription: '',
    listBlock: {
      listTitle: '',
      lists: [{ id: 1, listSubtitle: '', listDescription: '', isLink: false }],
    },
    fileBlock: {
      fileTitle: '',
      fileSubtitle: '',
      fileName: '',
      file: '',
    },
    snsBlock: [],
    templateBlock: [
      {
        id: 1,
        templateTitle: '',
        templateDescription: '',
      },
    ],
    order: ['listBlock', 'fileBlock', 'snsBlock', 'templateBlock'],
    style: {
      background: { color: '#eee', gradation: false, imageUrl: null },
      block: { gradation: false, shape: '0px', style: 'flat' },
      theme: null,
    },
  },
  private: {
    shareUrl: '',
    category: 'private',
    userId: 1,
    profileBgUrl: '',
    ProfileImageUrl: '',
    pageTitle: '',
    pageDescription: '',
    listBlock: {
      listTitle: '',
      lists: [{ id: 1, listSubtitle: '', listDescription: '', isLink: false }],
    },
    freeBlock: {
      freeDescription: '',
      freeTitle: '',
    },
    snsBlock: [],
    templateBlock: [
      {
        id: 1,
        templateTitle: '',
        templateDescription: '',
      },
    ],
    order: ['listBlock', 'freeBlock', 'snsBlock', 'templateBlock'],
    style: {
      background: { color: '#eee', gradation: false, imageUrl: null },
      block: { gradation: false, shape: '0px', style: 'flat' },
      theme: null,
    },
  },
  event: {
    shareUrl: '',
    category: 'event',
    userId: 1,
    profileBgUrl: '',
    ProfileImageUrl: '',
    pageTitle: '',
    pageDescription: '',
    freeBlock: {
      freeTitle: '',
      freeDescription: '',
    },
    snsBlock: [],
    templateBlock: [
      {
        id: 1,
        templateTitle: '',
        templateDescription: '',
      },
    ],
    order: ['freeBlock', 'snsBlock', 'templateBlock'],
    style: {
      background: { color: '#eee', gradation: false, imageUrl: null },
      block: { gradation: false, shape: '0px', style: 'flat' },
      theme: null,
    },
  },
  enterprise: {
    shareUrl: '',
    category: 'enterprise',
    userId: 1,
    profileBgUrl: '',
    ProfileImageUrl: '',
    pageTitle: '',
    pageDescription: '',

    templateBlock: [
      {
        id: 1,
        templateTitle: '',
        templateDescription: '',
      },
    ],
    order: ['templateBlock'],
    style: {
      background: { color: '#eee', gradation: false, imageUrl: null },
      block: { gradation: false, shape: '0px', style: 'flat' },
      theme: null,
    },
  },
  basic: {
    category: 'basic',
    shareUrl: '',
    userId: 1,
    profileBgUrl: '',
    ProfileImageUrl: '',
    pageTitle: '',
    pageDescription: '',
    freeBlock: {
      freeTitle: '',
      freeDescription: '',
    },
    templateBlock: [
      {
        id: 1,
        templateTitle: '',
        templateDescription: '',
      },
    ],
    order: ['freeBlock', 'templateBlock'],
    style: {
      background: { color: '#eee', gradation: false, imageUrl: null },
      block: { gradation: false, shape: '0px', style: 'flat' },
      theme: null,
    },
  },
};
