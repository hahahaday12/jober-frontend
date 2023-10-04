/* eslint-disable no-useless-catch */
export const getSpace = async (memberId: number, addSpaceId: number) => {
  try {
    const url = `api/api/employee/1/1?spaceType=PERSONAL`;

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
