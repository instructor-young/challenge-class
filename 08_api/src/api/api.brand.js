import { client } from "./api";

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}

export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}
