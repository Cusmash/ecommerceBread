import axios from 'axios';
import { Filters, Product } from '../types/product';

const GRAPHQL_ENDPOINT = import.meta.env.VITE_API_URL;

export const fetchProductsPaged = async (
  page: number,
  size: number,
  sort: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = `
    query {
      getAllProducts(page: ${page}, size: ${size}, sort: ${sort}) {
        content {
          id
          name
          description
          price
          quantity
          imgUrl
          type
        }
      }
    }
  `;

  const response = await axios.post(GRAPHQL_ENDPOINT, { query });
  return response.data.data.getAllProducts.content;
};

export const fetchOnSaleProducts = async (
  page: number,
  size: number,
  sort: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = `
    query GetFilteredProducts($filter: ProductFilterInput!, $page: Int!, $size: Int!, $sort: SortDirection!) {
      getFilteredProducts(filter: $filter, page: $page, size: $size, sort: $sort) {
        content {
          id
          name
          price
          imgUrl
          type
          onSale
          discountPercentage
        }
      }
    }
  `;

  const variables = {
    filter: { onSale: true },
    page,
    size,
    sort
  };

  const response = await axios.post(GRAPHQL_ENDPOINT, { query, variables });
  return response.data.data.getFilteredProducts.content;
};

export const fetchFilteredProducts = async (
  filters: Filters,
  page: number,
  size: number,
  sort: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = `
    query GetFilteredProducts(
      $filter: ProductFilterInput,
      $page: Int!,
      $size: Int!,
      $sort: SortDirection!
    ) {
      getFilteredProducts(
        filter: $filter,
        page: $page,
        size: $size,
        sort: $sort
      ) {
        content {
          id
          name
          price
          type
          onSale
          discountPercentage
        }
        totalElements
      }
    }
  `;

  const variables = {
    filter: filters || {},
    page,
    size,
    sort
  };

  const response = await axios.post(GRAPHQL_ENDPOINT, {
    query,
    variables,
  });

  return response.data.data.getFilteredProducts.content;
};
