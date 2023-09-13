export interface WallType {
  userId: number;
  shareUrl: string;
  category: CategoryType;
  profileBlock: ProfileBlockType;
  blocks: BlockElementType[];
  style: Style;
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
  templateTitle?: string;
  templateDescription?: string;
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

export interface Style {
  background: BackgroundType;
  block: StyleBlockType;
  theme: string | null;
}

export interface BackgroundType {
  color: string;
  gradation: boolean;
  image: string;
}

export interface StyleBlockType {
  gradation: boolean;
  shape: string;
  style: string;
}
