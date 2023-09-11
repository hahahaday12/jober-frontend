export interface WallType {
  userId: number;
  category: CategoryType;
  shareUrl: string;
  pageTitle: string;
  pageDescription: string;
  profileImageUrl: string | null;
  // profileImageUrl: string | Blob; // 서버 완성되면
  profileBgUrl: string | null;
  listBlocks?: ListBlockType[];
  fileBlocks?: FileBlockType[];
  snsBlock?: SnsBlockType;
  freeBlocks?: FreeBlockType[];
  templatesBlock?: TemplateBlockType;
  order: OrderType[];
  style: StyleType;
}
export type CategoryType =
  | 'career'
  | 'private'
  | 'event'
  | 'enterprise'
  | 'basic';

export interface ListBlockType {
  id: number;
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
  fileTitle: string;
  fileSubtitle: string;
  fileName: string;
  file: string;
}
export interface SnsBlockType {
  snss: SnsType[];
}
export interface SnsType {
  id: number;
  snsTitle: string;
  snsUrl: string;
}
export interface FreeBlockType {
  id: number;
  freeTitle: string;
  freeDescription: string;
}

export interface TemplateBlockType {
  order: number;
  templates: TemplateType[];
}
export interface TemplateType {
  id: number;
  templateTitle: string;
  templateDescription: string;
}

export interface OrderType {
  blockType: BlockType;
  id: number;
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
