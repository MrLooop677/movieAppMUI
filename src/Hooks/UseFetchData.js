export const fetchData = async (searchWord) => {
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&${searchWord}`
  );
  const res = await data.json();
  return res;
};
