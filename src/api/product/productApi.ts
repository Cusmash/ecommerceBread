import axios from 'axios';
import { Filters, Product } from '../../types/product';

const GRAPHQL_ENDPOINT = import.meta.env.VITE_API_URL;

export const fetchProductById = async (id: string): Promise<Product> => {
  const query = `
    query {
      getProductById(id: "${id}") {
        id
        name
        price
        description
        imgUrl
        type
        flavor
        onSale
        discountPercentage
        quantity
      }
    }
  `;

  const response = await axios.post(GRAPHQL_ENDPOINT, { query });
  return response.data.data.getProductById;
};


export const fetchOnSaleProducts = async (
  page: number,
  size: number,
  sort: 'ASC' | 'DESC'
): Promise<Product[]> => {
  const query = `
    query filterProducts($type: ProductFilterInput!, $page: Int!, $size: Int!, $sort: SortDirection!) {
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
          flavor
          onSale
          discountPercentage
          imgUrl
        }
        totalElements
      }
    }
  `;

  const cleanedFilters: any = {};
  if (filters.type && filters.type.length > 0) cleanedFilters.types = filters.type;
  if (filters.flavor && filters.flavor.length > 0) cleanedFilters.flavors = filters.flavor;
  if (filters.onSale !== undefined) cleanedFilters.onSale = filters.onSale;
  if (filters.priceFrom !== undefined) cleanedFilters.priceFrom = filters.priceFrom;
  if (filters.priceTo !== undefined) cleanedFilters.priceTo = filters.priceTo;

  const variables = {
    filter: cleanedFilters,
    page,
    size,
    sort,
  };

  const response = await axios.post(GRAPHQL_ENDPOINT, {
    query,
    variables,
  });

  return response.data.data.getFilteredProducts.content;
};

export const fetchProductsByType = async (type: string, size: number): Promise<Product[]> => {
  const query = `
    query {
      filterProducts(type: "${type}", page: 0, size: ${size}) {
        id
        name
        description
        price
        quantity
        imgUrl
        type
      }
    }
  `;

  console.log('query', query);
  const response = await axios.post(GRAPHQL_ENDPOINT, { query });
  console.log('response', response.data.data.filterProducts);
  return response.data.data.filterProducts;
};