// import {
//   BlockType,
//   FileBlockType,
//   FreeBlockType,
//   ListBlockType,
//   SnsType,
//   StyleType,
//   TemplateType,
// } from '@/types/blocks';

export type CategoryType =
  | 'career'
  | 'private'
  | 'event'
  | 'enterprise'
  | 'basic';

export interface WallType {
  userId: number;
  category: CategoryType;
  shareUrl: string;
  pageTitle: string;
  pageDescription: string;
  ProfileImageUrl: string | null;
  profileBgUrl: string | null;
  listBlocks?: ListBlockType[];
  fileBlocks?: FileBlockType[];
  snsBlock?: SnsBlockType;
  freeBlocks?: FreeBlockType[];
  templatesBlock?: TemplateBlockType;
  style: StyleType;
}

export interface ListBlockType {
  id: number;
  order: number;
  listTitle: string;
  lists: ListType[];
}
export interface ListType {
  id: number;
  listSubtitle: string;
  listDescription: string;
  isLink: boolean;
}
export interface FileBlockType {
  id: number;
  order: number;
  fileTitle: string;
  fileSubtitle: string;
  fileName: string;
  file: string;
}
export interface SnsBlockType {
  order: number;
  snss: SnsType[];
}
export interface SnsType {
  id: number;
  snsTitle: string;
  snsUrl: string;
}
export interface FreeBlockType {
  id: number;
  order: number;
  freeTitle: string;
  freeDescription: string;
}
export interface TemplateBlockType {
  order: number;
  templates: TemplateType[];
}
export interface TemplateType {
  id: number;
  order: number;
  templateTitle: string;
  templateDescription: string;
}
export type BlockType =
  | 'listBlock'
  | 'fileBlock'
  | 'freeBlock'
  | 'snsBlock'
  | 'templateBlock';

export interface StyleType {
  background: {
    color: string;
    gradation: boolean;
    imageUrl: string | null;
  };
  block: {
    shape: '0px' | '7px' | '14px';
    style: 'dark' | 'shadow' | 'flat';
    gradation: boolean;
  };
  theme: ('modern' | 'classic' | 'simple' | 'dark') | null;
}
