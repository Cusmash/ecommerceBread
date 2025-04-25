import axios from 'axios';
import { Product } from '../types/product';

const GRAPHQL_ENDPOINT = 'http://localhost:8081/graphql';

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
          price
          description
          price
          quantity
          imgUrl
          type
        }
      }
    }
  `;

  console.log('Query enviada a GraphQL:\n', query);
  const response = await axios.post(GRAPHQL_ENDPOINT, { query });
  return response.data.data.getAllProducts.content;
};

export const fetchOnSaleProducts = async (
  filter: { onSale: boolean },
  page: number,
  size: number,
  sort: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = ` #probando nueva sintaxis de queries
    query GetFilteredProducts($filter: ProductFilterInput!, $page: Int!, $size: Int!, $sort: SortDirection!) { #<-- primero se definen las variables
      getFilteredProducts(filter: $filter, page: $page, size: $size, sort: $sort) { #<-- despues se usan las variables
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

  const variables = { //<-- se mandan los valores relaes en el objeto variables
    filter,
    page,
    size,
    sort
  };

  const response = await axios.post(GRAPHQL_ENDPOINT, {
    query,
    variables
  });

  return response.data.data.getFilteredProducts.content;
};

export const fetchFilteredProducts = async (
  filter: Partial<{
    type: string;
    onSale: boolean;
    priceFrom: number;
    priceTo: number;
    flavor: string;
  }>,
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
      getFilteredProducts(filter: $filter, page: $page, size: $size, sort: $sort) {
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
    filter,
    page,
    size,
    sort
  };

  const response = await axios.post(GRAPHQL_ENDPOINT, {
    query,
    variables
  });

  return response.data.data.getFilteredProducts.content;
};
