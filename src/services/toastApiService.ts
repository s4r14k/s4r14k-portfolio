'use client';

import { toast, Id } from 'react-toastify';

// Enhanced API service with toast notifications
export const toastApiService = {
  /**
   * Makes a POST request to the specified endpoint with toast notifications
   * @param endpoint - The API endpoint to call
   * @param data - The data to send in the request body
   * @param loadingMessage - Optional message to show during loading
   * @param successMessage - Optional message to show on success
   * @param errorMessage - Optional message to show on error (will be overridden by the error response message if available)
   * @returns Promise with the response data
   * @template T - The type of the response data
   * @template D - The type of the request data, defaults to object
   */
  post: async <T, D extends object = object>(
    endpoint: string, 
    data: D, 
    loadingMessage = 'Processing request...', 
    successMessage = 'Request successful!', 
    errorMessage = 'An error occurred'
  ): Promise<T> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';

    // Show loading toast
    const toastId: Id = toast.loading(loadingMessage);

    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Update toast to error
        toast.update(toastId, { 
          render: errorData.message || errorMessage, 
          type: 'error', 
          isLoading: false, 
          autoClose: 5000 
        });
        throw new Error(errorData.message || 'An error occurred');
      }

      const result = await response.json();

      // Update toast to success
      toast.update(toastId, { 
        render: successMessage, 
        type: 'success', 
        isLoading: false, 
        autoClose: 5000 
      });

      return result;
    } catch (error) {
      // If there was an error and the toast is still showing, update it
      toast.update(toastId, { 
        render: error instanceof Error ? error.message : errorMessage, 
        type: 'error', 
        isLoading: false, 
        autoClose: 5000 
      });
      throw error;
    }
  }
};
