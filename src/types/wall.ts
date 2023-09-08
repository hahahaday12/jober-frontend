import {
  BlockType,
  FileBlockType,
  FreeBlockType,
  ListBlockType,
  SnsType,
  StyleType,
  TemplateType,
} from '@/types/blocks';

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
  listBlock?: ListBlockType;
  fileBlock?: FileBlockType;
  snsBlock?: SnsType[];
  freeBlock?: FreeBlockType;
  templateBlock?: TemplateType[];
  order: BlockType[];
  style: StyleType;
}
