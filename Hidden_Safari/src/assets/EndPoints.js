// Replace {{base_url}} with the actual base URL
// In development, use a default URL that can be overridden in .env
const BASE_URL = "http://54.210.95.246:3005";
const API_PATH = "/api/v1";

// This processing allows for {{base_url}} to be replaced during deployment
const getBaseUrl = () => {
  const envBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
  
  // If the environment variable contains {{base_url}}, replace it with our default
  if (envBaseUrl.includes("{{base_url}}")) {
    return envBaseUrl.replace("{{base_url}}", BASE_URL);
  }
  
  // If a valid URL is provided in the environment, use it
  if (envBaseUrl && !envBaseUrl.includes("{{")) {
    return envBaseUrl;
  }
  
  // Fallback to our default with API path
  return `${BASE_URL}${API_PATH}`;
};

const API_BASE_URL = getBaseUrl();

console.log("Using API base URL:", API_BASE_URL);

export const ENDPOINTS = {
  TEAM: `${API_BASE_URL}${import.meta.env.VITE_TEAM_ENDPOINT}`,
  
  // INFO
  ABOUT: `${API_BASE_URL}${import.meta.env.VITE_ABOUT_ENDPOINT}`,
  PRIVACY: `${API_BASE_URL}${import.meta.env.VITE_PRIVACY_ENDPOINT}`,
  TERMS: `${API_BASE_URL}${import.meta.env.VITE_TERMS_ENDPOINT}`,
  TESTIMONIALS: `${API_BASE_URL}${import.meta.env.VITE_TESTIMONIALS_ENDPOINT}`,
  
  CONTACT: `${API_BASE_URL}${import.meta.env.VITE_CONTACT_ENDPOINT}`,

  // EVENTS
  SNOWTREKS: `${API_BASE_URL}${import.meta.env.VITE_SNOW_TREKS_ENDPOINT}`,
  SUMMER: `${API_BASE_URL}${import.meta.env.VITE_SUMMER_EVENTS_ENDPOINT}`,
  MONSOON: `${API_BASE_URL}${import.meta.env.VITE_MONSOON_EVENTS_ENDPOINT}`,
  ADVENTURES: `${API_BASE_URL}${import.meta.env.VITE_ADVENTURES_ENDPOINT}`,
  SPECIALEVENTS: `${API_BASE_URL}${import.meta.env.VITE_SPECIAL_EVENTS_ENDPOINT}`,
  HIGHLIGHTEDEVENTS: `${API_BASE_URL}${import.meta.env.VITE_HIGHLIGHTED_EVENTS_ENDPOINT}`,
  ALLEVENTS: `${API_BASE_URL}${import.meta.env.VITE_ALL_EVENTS_ENDPOINT}`,
  EVE: `${API_BASE_URL}${import.meta.env.VITE_EVE_ENDPOINT}`,
  
  // Single Event
  EVENT_DETAIL: (id) => `${API_BASE_URL}${import.meta.env.VITE_EVENT_DETAIL_ENDPOINT}/${id}`
};
