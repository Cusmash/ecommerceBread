import axios from 'axios';
import { Product } from '../types/product';

const GRAPHQL_ENDPOINT = 'http://localhost:8081/graphql';

export const fetchProductsPaged = async (
  page: number,
  size: number,
  sortDirection: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = `
    query {
      getAllProductsPaginated(page: ${page}, size: ${size}, sortDirection: ${sortDirection}) {
        content {
          id
          name
          price
          salePrice
          image
          category
        }
      }
    }
  `;

  const response = await axios.post(GRAPHQL_ENDPOINT, { query });
  return response.data.data.getAllProductsPaginated.content;
};
