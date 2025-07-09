// Base API service for handling HTTP requests
export const apiService = {
  /**
   * Makes a POST request to the specified endpoint
   * @param endpoint - The API endpoint to call
   * @param data - The data to send in the request body
   * @returns Promise with the response data
   * @template T - The type of the response data
   * @template D - The type of the request data, defaults to object
   */
  post: async <T, D extends object = object>(endpoint: string, data: D): Promise<T> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
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
      throw new Error(errorData.message || 'An error occurred');
    }

    return response.json();
  }
};
