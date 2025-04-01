import fetchAPI from "../utils/fetchApi";
import React, { useEffect, useState } from "react";

// just to have som utilities imported into a component

export default function RenderAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchAPI();
      setData(apiData);
    };
    fetchData();
  }, []);

  // getting the breed name
  const getName = (data) => {
    const name = data.message.match(/breeds\/([^/]+)/);
    console.log(name);
    return name ? name[1] : null;
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>RenderAPI</h2>

      {data ? (
        <div>
          <div>
            <p key={getName(data)} style={{ textTransform: "capitalize" }}>
              {getName(data)}
            </p>
            <img
              src={data.message}
              alt={getName(data)}
              style={{ width: "auto", height: "500px" }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
