/* eslint-disable no-useless-catch */
export const getSpace = async (
  memberId: number,
  spaceId: number,
  spaceType: string,
) => {
  try {
    const url = `${
      import.meta.env.VITE_SERVER_BASE_URL
    }/employee/${memberId}/${spaceId}?spaceType=${spaceType.toUpperCase()}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch user data: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
