const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  TEAM: `${API_BASE_URL}${import.meta.env.VITE_TEAM_ENDPOINT}`,
  
  // INFO
  ABOUT: `${API_BASE_URL}${import.meta.env.VITE_ABOUT_ENDPOINT}`,
  PRIVACY: `${API_BASE_URL}${import.meta.env.VITE_PRIVACY_ENDPOINT}`,
  TERMS: `${API_BASE_URL}${import.meta.env.VITE_TERMS_ENDPOINT}`,
  TESTIMONIALS: `${API_BASE_URL}${import.meta.env.VITE_TESTIMONIALS_ENDPOINT}`,
  
  CONTACT: `${API_BASE_URL}${import.meta.env.VITE_CONTACT_ENDPOINT}`,

  // EVENTS
  SNOWTREK: `${API_BASE_URL}${import.meta.env.VITE_SNOW_TREKS_ENDPOINT}`,
  SUMMER: `${API_BASE_URL}${import.meta.env.VITE_SUMMER_EVENTS_ENDPOINT}`,
  MONSOON: `${API_BASE_URL}${import.meta.env.VITE_MONSOON_EVENTS_ENDPOINT}`,
  ADVENTURES: `${API_BASE_URL}${import.meta.env.VITE_ADVENTURES_ENDPOINT}`,
  SPECIALEVENTS: `${API_BASE_URL}${import.meta.env.VITE_SPECIAL_EVENTS_ENDPOINT}`,
  HIGHLIGHTEDEVENTS: `${API_BASE_URL}${import.meta.env.VITE_HIGHLIGHTED_EVENTS_ENDPOINT}`,
  ALLEVENTS: `${API_BASE_URL}${import.meta.env.VITE_ALL_EVENTS_ENDPOINT}`,
  EVE: `${API_BASE_URL}${import.meta.env.VITE_EVE_ENDPOINT}`
};
