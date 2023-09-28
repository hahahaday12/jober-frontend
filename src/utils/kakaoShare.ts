import { WallType } from '@/types/wall';

export const kakaoShare = (wall: WallType) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(`${import.meta.env.VITE_KAKAO_JS_KEY}`);
    }
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: wall.wallInfoBlock.wallInfoTitle,
        description: wall.wallInfoBlock.wallInfoDescription,
        imageUrl: wall.wallInfoBlock.wallInfoImgURL,
        link: {
          webUrl: `${import.meta.env.VITE_CLIENT_URL}/wall/${wall.shareURL}`,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: `${import.meta.env.VITE_CLIENT_URL}/wall/${wall.shareURL}`,
          },
        },
      ],
    });
  }
};
