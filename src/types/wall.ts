export type WallType = {
  category: string;
  memberId: number;
  addSpaceId: number;
  shareURL: string;
  wallInfoBlock: WallInfoBlock;
  blocks: Block[];
  styleSetting: StyleSetting;
};

export type CategoryType =
  | 'career'
  | 'personal'
  | 'event'
  | 'enterprise'
  | 'basic';

export interface WallInfoBlockResponse {
  wallInfoBlockId: number;
  wallInfoTitle: string;
  wallInfoDescription: string;
  wallInfoImgURL: null;
  backgroundImgURL: null;
}

export interface Block {
  blockUUID: string;
  blockType: string;
  subData: SubDatum[];
}

export type BlockType =
  | 'listBlock'
  | 'fileBlock'
  | 'snsBlock'
  | 'templateBlock'
  | 'freeBlock';

export interface SubDatum {
  freeBlockId?: number;
  freeTitle?: string;
  freeContent?: string;
  listBlockId?: number;
  listLabel?: string;
  listTitle?: string;
  listDescription?: string;
  isLink?: boolean;
  snsBlockId?: number;
  snsUUID?: string;
  snsType?: string;
  snsURL?: string;
  fileBlockId?: number;
  fileTitle?: string;
  fileDescription?: string;
  fileName?: null;
  templateBlockId?: number;
  templateUUID?: string;
  templateTitle?: string;
  templateDescription?: string;
  hasAccessTemplateAuth?: number[];
  hasDenyTemplateAuth?: number[];
}

export interface StyleSetting {
  backgroundSetting: BackgroundSetting;
  blockSetting: BlockSetting;
  themeSetting: ThemeSetting;
}

export interface BackgroundSetting {
  backgroundSettingId: number;
  solidColor: string;
  gradation: boolean;
  styleImgURL: null | string;
}

export interface BlockSetting {
  blockSettingId: number;
  shape: string;
  style: string;
  styleColor: string;
  gradation: boolean;
}

export interface ThemeSetting {
  themeSettingId: number;
  theme: string | null;
}

export interface WallInfoBlock {
  wallInfoBlockId: number;
  wallInfoTitle: string;
  wallInfoDescription: string;
  wallInfoImgURL: null | string;
  backgroundImgURL: null | string;
}
