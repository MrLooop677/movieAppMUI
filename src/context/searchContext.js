import { createContext, useEffect, useState } from "react";
import { fetchData } from "../Hooks/UseFetchData";
export const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("");
  const [films, setFilm] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(null);
  const sharedValue = { searchWord, setSearchWord, films, isLoad, isError };

  const getFilm = async () => {
    try {
      setIsLoad(true);
      const res = await fetchData(`s=${searchWord}`);

      if (res.Response == "True") {
        console.log(res.Response);
        setIsError(null);

        setFilm(res.Search);
      } else {
        setIsError(res.Error);
        console.log("Error");
      }
    } catch (error) {
      console.log("Error", error.message);
    } finally {
      setIsLoad(false);
    }
  };
  useEffect(() => {
    const depounce = setTimeout(function () {
      if (searchWord.trim()) {
        getFilm();
      }
    }, 1000);

    return () => {
      clearTimeout(depounce);
    };
  }, [searchWord]);
  return (
    <searchContext.Provider value={sharedValue}>
      {children}
    </searchContext.Provider>
  );
};
