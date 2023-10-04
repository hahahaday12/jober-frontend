import { IMAGE_FILE_SIZE_LIMIT } from '@/data/constants/blocks';
import { message } from 'antd';
import { useState } from 'react';
interface ImageData {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: Date;
  etag: string;
  folder: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}
export default function CloudinaryFileUpload() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [cloudImage, setCloudImage] = useState<ImageData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > IMAGE_FILE_SIZE_LIMIT) {
      messageApi.error('이미지가 2MB를 초과하였습니다.');
      return;
    }
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = async () => {
      if (reader.readyState === FileReader.DONE) {
        if (!reader.result) return;
        setLoading(true);
        const formData = new FormData();
        formData.append('file', reader.result as string);
        formData.append(
          'upload_preset',
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        );
        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUDINARY_API
            }/image/upload`,
            {
              method: 'POST',
              body: formData,
            },
          );
          if (!response.ok) {
            throw new Error('Upload failed');
          }
          const data: ImageData = await response.json();
          setCloudImage(data);
          console.log('Upload successful:', data);
        } catch (err) {
          console.error('Error uploading image:', err);
        } finally {
          setLoading(false);
        }
      }
    };
  };
  return (
    <div>
      {contextHolder}
      <input type="file" onChange={handleFileChange} />
      {loading ? '업로딩 중' : ''}
      {cloudImage &&
        (loading ? (
          <></>
        ) : (
          <img
            // 사용할 url은 data.url이며 이 url을 동적으로 https://res.cloudinary.com/dg1opcrul/image/upload/w_300/q_10/f_auto/ojsfb41rejhdgbrknif5 이런식으로 w_300(이미지 width), q_10(이미지 퀄리티 0~100), f_auto(브라우저별 최적화)할 수 있음
            src={`${
              cloudImage?.url.split('upload')[0]
            }/upload/w_300/q_100/f_auto/${cloudImage?.url.split('upload')[1]}`}
            alt="이미지"
          />
        ))}
    </div>
  );
}
