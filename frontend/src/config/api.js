// API Configuration
// Supports both development and production environments

const getApiUrl = () => {
  // Check if we're in development or production
  if (import.meta.env.DEV) {
    // Development: use local backend
    return 'http://localhost:3001';
  }
  
  // Production: use environment variable or fallback
  return import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app';
};

export const API_URL = getApiUrl();

// Helper function to create API endpoints
export const createApiUrl = (endpoint) => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_URL}/${cleanEndpoint}`;
};

// Export commonly used endpoints
export const API_ENDPOINTS = {
  constructionServices: () => createApiUrl('api/construction-services'),
  interiorProjects: () => createApiUrl('api/interior-design-projects'),
  wines: () => createApiUrl('api/wines'),
  orders: () => createApiUrl('api/orders'),
};

export default API_URL;

