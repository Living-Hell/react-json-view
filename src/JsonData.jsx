import React from "react";
import ReactJson from "react-json-view";
import data from "./data.json";
console.log(data);

const JsonData = () => {
  return (
    <div>
      <ReactJson
        src={data?.response[0]?.Event}
        collapsed={false}
        name={false}
        indentWidth={8}
        displayObjectSize={false}
        displayDataTypes={false}
        enableClipboard={false}
        theme="twilight"
      />
    </div>
  );
};

export default JsonData;
