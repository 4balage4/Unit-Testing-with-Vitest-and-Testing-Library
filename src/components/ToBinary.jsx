import React, {useState} from "react";
import binaryConverter from "../utils/binaryConverter";


function ToBinary() {

  const [text, setText] = useState("");

  return (
    <div>
      <h2>ToBinary - converts string to binary</h2>
      <form action="">
        <label htmlFor="binary-string">
          <input type="text" id='binary-string' data-testid="binary-string" onChange={(e) => setText(e.target.value)} value={text} />
        </label>
      </form>

      {/* created this part to not show the element if the text is empty. waitFor testing */}
      {text ? (
        <p style={{backgroundColor: "gray", lineBreak: "anywhere"}}>{binaryConverter(text)}</p>
      )
      :
      ''
      }
    </div>
  );
}

export default ToBinary;
