import { useState } from "react";

export default function useKeywords() {
  const [keywords, setKeywords] = useState([
    "keyword1",
    "keyword2",
    "keyword3",
    "keyword4",
    "keyword5",
    "keyword6",
    "keyword7",
    "keyword8",
    "keyword9",
    "keyword10",
  ]);

  const addKeyword = (keyword: string) => {
    setKeywords([...keywords, keyword]);
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  return { keywords, addKeyword, removeKeyword };
}
