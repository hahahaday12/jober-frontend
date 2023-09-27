import { useWallStore } from '@/store';
import { useEffect } from 'react';

export default function KakaoShare() {
  const { wall } = useWallStore();
  useEffect(() => {
    kakaoButton();
  }, []);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(`${import.meta.env.VITE_KAKAO_JS_KEY}`);
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: wall.wallInfoBlock.wallInfoTitle,
          description: wall.wallInfoBlock.wallInfoDescription,
          imageUrl: wall.wallInfoBlock.wallInfoImgURL,
          link: {
            webUrl: `${import.meta.env.VITE_CLIENT_URL}${wall.shareURL}`,
          },
        },

        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  };

  return <button id="kakaotalk-sharing-btn">KakaoShare</button>;
}
