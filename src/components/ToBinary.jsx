import React, {useState} from "react";
import binaryConverter from "../utils/binaryConverter";


function ToBinary() {

  const [text, setText] = useState("");

  return (
    <>
      <h2>ToBinary (string)</h2>
      <input type="text" data-testid="binary-string" onChange={(e) => setText(e.target.value)} value={text} />
      <p style={{backgroundColor: "gray", lineBreak: "anywhere"}}>{binaryConverter(text)}</p>
    </>
  );
}

export default ToBinary;
