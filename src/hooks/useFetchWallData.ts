import { useWallStore } from '@/store';
import { WallType } from '@/types/wall';
import { message } from 'antd';
import { useEffect, useState } from 'react';

export default function useFetchWallData() {
  const [messageApi, contextHolder] = message.useMessage();
  const { wall, setWall, isEdit } = useWallStore();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/wall', { signal });
        if (!response.ok) {
          throw new Error('error while data fetching');
        }
        const wallData = (await response.json()) as WallType;
        setWall(wallData);
      } catch (error) {
        // TODO : 에러 핸들링
        console.log(error);
        setError(error as Error);
        messageApi.error({ content: 'data fetching error' });
      } finally {
        setLoading(false);
      }
    };
    getData();

    return () => {
      abortController.abort();
    };
  }, [messageApi, setWall]);
  return { wall, error, loading, contextHolder, isEdit, setWall };
}
