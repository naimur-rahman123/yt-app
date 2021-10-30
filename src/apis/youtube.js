import axios from 'axios';
const YOUTUBE_API_KEY = 'AIzaSyAD3mjj6tP3XHHVsL7lGPV09m2UuSoPSEc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBE_API_KEY,
    type: 'video',
  },
});
