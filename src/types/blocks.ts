export interface ListBlockType {
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
  fileTitle: string;
  fileSubtitle: string;
  fileName: string;
  file: string;
}
export interface SnsType {
  id: number;
  snsTitle: string;
  snsUrl: string;
}
export interface FreeBlockType {
  freeTitle: string;
  freeDescription: string;
}
export interface TemplateType {
  id: number;
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
