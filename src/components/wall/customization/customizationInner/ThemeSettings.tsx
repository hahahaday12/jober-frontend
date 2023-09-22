import { useWallStore } from '@/store';
//import { produce } from 'immer';

export const ThemeSettings = () => {
  const { wall } = useWallStore();

  return (
    <>
      {/* bg-[${modernTheme}] */}
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <div className="overflow-x-auto flex justify-between">
        <div className="flex flex-row gap-[10px]">
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
        </div>
      </div>
    </>
  );
};
