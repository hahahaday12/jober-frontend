export interface PostData {
  category: string;
  memberId: number;
  spaceId: number;
  shareURL: string;
  wallInfoBlock: WallInfoBlock;
  blocks: Block[];
  styleSetting: StyleSetting;
}

export interface Block {
  blockUUID: string;
  blockType: string;
  subData: SubDatum[];
}

export interface SubDatum {
  listUUID?: string;
  listLabel?: string;
  listTitle?: string;
  listDescription?: string;
  isLink?: boolean;
  freeTitle?: string;
  freeContent?: string;
  templateUUID?: string;
  templateTitle?: string;
  templateDescription?: string;
  snsUUID?: string;
  snsType?: string;
  snsURL?: string;
  fileTitle?: string;
  fileDescription?: string;
  fileName?: string;
  file?: string;
}

export interface StyleSetting {
  backgroundSetting: BackgroundSetting;
  blockSetting: BlockSetting;
  themeSetting: ThemeSetting;
}

export interface BackgroundSetting {
  solidColor: string;
  gradation: boolean;
  styleImgURL: null | string;
}

export interface BlockSetting {
  shape: string;
  style: string;
  styleColor: string;
  gradation: boolean;
}

export interface ThemeSetting {
  theme: null | string;
}

export interface WallInfoBlock {
  wallInfoTitle: string;
  wallInfoDescription: string;
  wallInfoImgURL: null | string;
  backgroundImgURL: null | string;
}
