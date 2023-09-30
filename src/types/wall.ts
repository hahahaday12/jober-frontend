export type WallType = {
  shareURL: string;
  isPublic: boolean;
  memberId: string;
  category: CategoryType;
  wallInfoBlock: wallInfoBlockType;
  blocks: Block[];
  styleSetting: StyleSettingType;
};

export type CategoryType =
  | 'career'
  | 'personal'
  | 'event'
  | 'enterprise'
  | 'basic';

export type wallInfoBlockType = {
  wallInfoTitle: string;
  wallInfoDescription: string;
  backgroundImgURL: string;
  wallInfoImgURL: string;
};

export type Block = {
  blockUUID: string;
  blockType: BlockType;
  subData: SubDatumType[];
};

export type BlockType =
  | 'listBlock'
  | 'fileBlock'
  | 'snsBlock'
  | 'templateBlock'
  | 'freeBlock';

export type SubDatumType = {
  listBlockUUID?: string;
  listLabel?: string;
  listTitle?: string;
  listDescription?: string;
  isLink?: boolean;
  fileTitle?: string;
  fileDescription?: string;
  fileName?: string;
  file?: string;
  freeTitle?: string;
  freeDescription?: string;
  snsBlockUUID?: string;
  snsType?: string;
  snsUrl?: string;
  templateBlockUUID?: string;
  templateTitle?: string;
  templateDescription?: string;
  hasAccessTemplateAuth?: number[];
  hasDenyTemplateAuth?: number[];
};

export type StyleSettingType = {
  backgroundSetting: BackgroundSettingType;
  blockSetting: BlockSettingType;
  themeSetting: ('modern' | 'classic' | 'simple' | 'dark') | null;
};

export type BackgroundSettingType = {
  solidColor: string;
  gradation: boolean;
  styleImgURL: string;
};

export type BlockSettingType = {
  shape: '0px' | '6px' | '13px';
  style: 'none' | 'flat' | 'shadow';
  styleColor: string;
  gradation: boolean;
};
