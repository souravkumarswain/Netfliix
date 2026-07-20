const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_KEY=import.meta.env.VITE_GEMINI_API_KEY

export const NETFLIX_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_medium.jpg"
export const PROFILE_IMG = 'https://occ-0-4857-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABaEZAmr6k9h96-doKWxdUfUcAgUKY18xnhWDruqwhaEbG2bDAYjtd6pcIXvx9NzwJLfLbSJaMkqXp5prdK3PiDPvgtFoz6EMmA.png?r=229'
export const NETFLIX_LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const API_CONSTANTS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+TMDB_API_KEY
  }
};
export const PLAY_ICON = 'https://cdn-icons-png.flaticon.com/512/109/109197.png';
export const MOVIE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const GEMINI_API_KEY= API_KEY;