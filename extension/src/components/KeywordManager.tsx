import React, { useState, useEffect } from "react";
import '../public/KeywordManager.css'

interface KeywordManagerProps {}

const KeywordManager: React.FC<KeywordManagerProps> = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const maxKeywords = 5;

  useEffect(() => {
    // Load stored keywords from localStorage when the component mounts
    const storedKeywords = Object.keys(localStorage)
      .filter((key) => key.startsWith("keyword_"))
      .map((key) => localStorage.getItem(key) || "");
    setKeywords(storedKeywords);
  }, []);

  const handleAddKeyword = () => {
    const trimmedKeyword = input.trim();
    if (trimmedKeyword && keywords.length < maxKeywords) {
      const nextIndex = keywords.length + 1;
      localStorage.setItem(`keyword_${nextIndex}`, trimmedKeyword);
      setKeywords([...keywords, trimmedKeyword]);
      setInput("");
    }
  };

  const handleRemoveKeyword = (indexToRemove: number) => {
    const updatedKeywords = keywords.filter((_, index) => index !== indexToRemove);
    updatedKeywords.forEach((kw, index) => {
      localStorage.setItem(`keyword_${index + 1}`, kw);
    });
    localStorage.removeItem(`keyword_${keywords.length}`);
    setKeywords(updatedKeywords);
  };

  return (
    <div className="app">
      <h1>Keyword Manager</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a keyword"
        />
        <button onClick={handleAddKeyword}>Add</button>
      </div>
      <div className="keyword-list">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="keyword"
            onClick={() => handleRemoveKeyword(index)}
          >
            {keyword} x
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordManager;
