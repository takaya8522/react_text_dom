import { useState } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
