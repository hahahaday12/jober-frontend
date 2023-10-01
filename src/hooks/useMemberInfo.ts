import { getHomeInfo } from '@/api/home';
import { MemberInfo } from '@/types/home';
import { useEffect, useState } from 'react';

export default function useMemberInfo() {
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getHomeInfo();
        const data = response.data as MemberInfo;
        setMemberInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return {
    memberInfo,
  };
}
