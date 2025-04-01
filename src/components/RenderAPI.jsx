import fetchAPI from "../utils/fetchApi";
import React, { useEffect, useState } from "react";

// just to have som utilities imported into a component

// getting the breed name
export const getName = (data) => {
  if (!data.message) {
    return null
  }
  const name = data.message.match(/breeds\/([^/]+)/);
  return name ? name[1] : null;
};

export default function RenderAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchAPI();
      setData(apiData);
    };
    fetchData();
  }, []);


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
