import { create } from 'zustand';
import { WallType } from '@/types/wall';

export interface WallStoreType {
  isEdit: boolean;
  setIsEdit: (bool: boolean) => void;
  isPreview: boolean;
  setIsPreview: (bool: boolean) => void;
  wall: WallType;
  setWall: (states: object) => void;
  getWall: () => Promise<void>;
}

export const useWallStore = create<WallStoreType>((set) => ({
  isEdit: false,
  setIsEdit: (bool) => set(() => ({ isEdit: bool })),
  isPreview: false,
  setIsPreview: (bool) => set(() => ({ isPreview: bool })),

  getWall: async () => {
    const response = await fetch('http://localhost:3000/wall');
    if (response.ok) {
      set({ wall: await response.json() });
    }
  },

  wall: {} as WallType,
  setWall: (states: object) =>
    set((state) => ({ wall: { ...state.wall, ...states } })),
}));

type TemplateState = {
  selectedTemplate: {
    category: string;
    id: string;
    title: string;
    description: string;
  };
  setSelectedTemplate: (template: {
    category: string;
    id: string;
    title: string;
    description: string;
  }) => void;
};

export const useTemplateStore = create<TemplateState>((set) => ({
  selectedTemplate: {
    category: '',
    id: '',
    title: '',
    description: '',
  },
  setSelectedTemplate: (template) =>
    set({ selectedTemplate: template }),
}));