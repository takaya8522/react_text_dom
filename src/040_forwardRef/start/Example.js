import { useRef, forwardRef } from "react";

const Example = () => {
  const ref = useRef();
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
