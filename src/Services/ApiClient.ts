export const baseUrl = "https://api.thecatapi.com/v1";

const Request = async (endPoint: string, config?: any) => 
  await fetch(`${baseUrl}${endPoint}`, config);

export const getCats = async (page: number, category: number, isNewCategores: boolean) => {
  const response = await Request(`/images/search?limit=10&page=${page}&category_ids=${category}`)
    .then((res) => res.json());
  return response;
}

export const getCategores = async () => {
  return await Request("/categories").then((res) => res.json());
}

