export interface WallType {
  userId: number;
  shareUrl: string;
  category: CategoryType;
  profileBlock: ProfileBlockType;
  blocks: BlockElementType[];
  style: StyleType;
}

export interface BlockElementType {
  blockUUID: string;
  blockType: BlockType;
  subData: SubDatumType[] | SubDataClassType;
}

export type CategoryType =
  | 'career'
  | 'personal'
  | 'event'
  | 'enterprise'
  | 'basic';

export type BlockType =
  | 'listBlock'
  | 'fileBlock'
  | 'snsBlock'
  | 'templatesBlcok' // template's' 템플릿'들'의 블록
  | 'freeBlock';

export interface SubDatumType {
  templateUUID?: string;
  templateTitle?: string;
  templateDescription?: string;
  snsUUID?: string;
  snsTitle?: string;
  snsUrl?: string;
}

export interface SubDataClassType {
  listTitle?: string;
  lists?: ListType[];
  freeTitle?: string;
  freeDescription?: string;
  fileTitle?: string;
  fileSubtitle?: string;
  fileName?: string;
  file?: string;
}

export interface ListType {
  listUUID: string;
  listSubtitle: string;
  listDescription: string;
  isLink: boolean;
}

export interface ProfileBlockType {
  profileTitle: string;
  profileDescription: string;
  profileBgUrl: string;
  profileImageUrl: string;
}

export interface StyleType {
  background: BackgroundType;
  block: StyleBlockType;
  theme: ('modern' | 'classic' | 'simple' | 'dark') | null;
}

export interface BackgroundType {
  color: string;
  gradation: boolean;
  imageUrl: string | null;
}

export interface StyleBlockType {
  color: string;
  gradation: boolean;
  shape: '0px' | '6px' | '13px';
  style: 'none' | 'flat' | 'shadow';
}

export interface SingleSnsType {
  snsUUID: string;
  snsTitle: string;
  snsUrl: string;
}
