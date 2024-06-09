import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useFetchBooks = () => {
  const [query, setQuery] = useState("");
  const fetchBooks = async () => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    const data = await response.json();
    return data.docs;
  };
  const {
    data: results = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["books", query],
    queryFn: fetchBooks,
    enabled: !!query,
  });

  return { results, setQuery, isLoading, isError, query };
};

export default useFetchBooks;
