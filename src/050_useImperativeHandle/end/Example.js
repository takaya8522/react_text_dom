import { useRef, forwardRef, useImperativeHandle } from "react";

// POINT 親からのrefへの参照を制限
const Input = forwardRef((props, ref) => {

  const inputRef = useRef();
  
  /* POINT useImperativeHandle
  第1引数: 親コンポーネントから受け取ったrefオブジェクト
  第2引数: 追加したいメソッドが格納されたオブジェクトを返す関数
   */
  useImperativeHandle(ref, () => ({
    myFocus() {
      inputRef.current.focus();
      console.log('フォーカス取得')
    }
  }))

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
