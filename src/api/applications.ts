import { apiClient } from './client';
import { Application } from '../types';

export async function getMyApplications(): Promise<Application[]> {
  return apiClient<Application[]>('/my-applications', {
    method: 'GET',
  });
}

export async function withdrawApplication(
  applicationId: string
): Promise<{ message: string; [key: string]: any }> {
  return apiClient(`/applications/${applicationId}/withdraw`, {
    method: 'POST',
  });
}
