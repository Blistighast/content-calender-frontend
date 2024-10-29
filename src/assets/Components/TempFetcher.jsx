import { useEffect, useState } from "react";

const TempFetcher = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await fetch("http://localhost:8080/api/content");
      const data = await resp.json();
      console.log(data);
      setContent(data);
    };

    fetchdata();
  }, []);

  return (
    <>
      <div>
        {content.map((c) => (
          <div key={c.id}>
            <p>{c.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TempFetcher;
