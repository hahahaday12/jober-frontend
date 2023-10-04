import { create } from 'zustand';
import { WallType } from '@/types/wall';

export type WallStoreType = {
  isEdit: boolean;
  toggleEdit: () => void;
  isPreview: boolean;
  togglePreview: () => void;
  wall: WallType;
  setWall: (states: object) => void;
  getWall: () => Promise<void>;
};

export const useWallStore = create<WallStoreType>((set) => ({
  isEdit: false,
  toggleEdit: () => set((state) => ({ isEdit: !state.isEdit })),
  isPreview: false,
  togglePreview: () => set((state) => ({ isPreview: !state.isPreview })),

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
    templateId: string;
    templateTitle: string;
    templateDescription: string;
  };
  setSelectedTemplate: (template: {
    category: string;
    templateId: string;
    templateTitle: string;
    templateDescription: string;
  }) => void;
};

export const useTemplateStore = create<TemplateState>((set) => ({
  selectedTemplate: {
    category: '',
    templateId: '',
    templateTitle: '',
    templateDescription: '',
  },
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
}));
