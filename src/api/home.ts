/* eslint-disable no-useless-catch */
export const getHomeInfo = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/home/1`,
    );
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
