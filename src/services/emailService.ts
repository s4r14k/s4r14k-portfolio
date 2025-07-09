'use client';

import { toastApiService } from './toastApiService';
import { API_PATHS } from '../config/api';

// Interface for email data
export interface EmailData {
  name: string;
  email: string;
  body: string;
  recaptchaToken?: string; // Optional for backward compatibility
}

// Email service for handling email-related API requests
export const emailService = {
  /**
   * Sends an email using the contact form data
   * @param data - The email data containing name, email, and body
   * @returns Promise with the response
   */
  sendEmail: async (data: EmailData) => {
    const endpoint = `${API_PATHS.BASE_PATH}${API_PATHS.EMAIL.SEND}`;
    try {
      return await toastApiService.post<{ success: boolean; message: string }>(
        endpoint, 
        data,
        'Sending your message...',
        'Message sent successfully!',
        'Failed to send message'
      );
    } catch (error) {
      // Re-throw the error to be handled by the component
      throw error;
    }
  }
};
