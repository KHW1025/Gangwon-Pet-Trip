function Test(){

  const [selectedKeywords, setSelectedKeywords] = useState([
    "keyword1",
    "keyword2",
    "keyword3",
  ]);
  const [selectedKeyword, setSelectedKeyword] = useState("");

  useEffect(() => {
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);
    setSelectedKeywords(shuffledKeywords.slice(0, 4));
  }, []);

  useEffect(() => {
    if (selectedKeywords.length > 0) {
      setSelectedKeyword(selectedKeywords[0]);
    }
  }, [selectedKeywords]);
  
  return (
    <section className="MainKeyword_wrap mw">
      <div className="MainKeyword">
        <h1>키워드 별 장소 추천</h1>
        <ul>
          {selectedKeywords.map((keyword, index) => (
            <li
              key={index}
              className={selectedKeyword === keyword ? "selected" : ""}
              onClick={() => setSelectedKeyword(keyword)}
            >
              #{keyword}
            </li>
}