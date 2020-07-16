import axios from 'axios';

export const FetchGames = () => {
  const response = axios.get('/api/games');
  console.log(response.data);
  return null;
};

export default FetchGames;
