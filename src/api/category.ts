import buildQuery, { QueryOptions } from 'odata-query';

import { axiosInstance } from '@/api';
import { Category } from '@/types/category';

import { ApiResponse } from './types';

export namespace CategoryApi {
  export async function getAll(
    options: Partial<QueryOptions<Category>>,
  ): Promise<ApiResponse<Category[]>> {
    try {
      const query = buildQuery(options);
      const axiosResponse = await axiosInstance.get(`/categories${query}`);
      const data = axiosResponse.data;

      return {
        isSuccess: true,
        message: 'Categories fetched successfully',
        data: data.value || [],
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message:
          error.response?.statusText ||
          error.message ||
          'Failed to fetch categories',
        data: [],
      };
    }
  }

  export async function create(
    payload: Partial<Category>,
  ): Promise<ApiResponse<Category | undefined>> {
    try {
      const axiosResponse = await axiosInstance.post<ApiResponse<Category>>(
        '/categories',
        payload,
      );
      return axiosResponse.data;
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.message || 'An unexpected error occurred.',
        data: undefined,
      };
    }
  }

  export async function update(
    id: string,
    payload: Partial<Category>,
  ): Promise<ApiResponse<Category | undefined>> {
    try {
      const axiosResponse = await axiosInstance.put<ApiResponse<Category>>(
        `/categories/${id}`,
        payload,
      );
      return axiosResponse.data;
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.message || 'An unexpected error occurred.',
        data: undefined,
      };
    }
  }

  export async function deleteById(
    id: string,
  ): Promise<ApiResponse<undefined>> {
    try {
      const axiosResponse = await axiosInstance.delete<ApiResponse<undefined>>(
        `/categories/${id}`,
      );
      return axiosResponse.data;
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.message || 'An unexpected error occurred.',
        data: undefined,
      };
    }
  }
}
