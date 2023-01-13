import "./App.css";
import { Suspense, useState, useEffect, lazy } from "react";
import BaseErrorBoundary from "./BaseErrorBoundary";

const STORAGE_KEY = "rcg-current-lec-index";

const DynamicLoader = ({ component }) => {
  const LazyComponent = lazy(() => import(`${component}`));
  return (
    <BaseErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </BaseErrorBoundary>
  );
};

const App = ({ lectures }) => {
  /**
   * ローカルストレージより画面復帰時のレクチャーインデックスを取得
   */
  let restoredLecIndx = localStorage.getItem(STORAGE_KEY) ?? 0;
  restoredLecIndx = restoredLecIndx < lectures.length ? restoredLecIndx : 0;
  const [lecIndex, setLecIndex] = useState(restoredLecIndx);

  /**
   * レクチャーID（フォルダ名）を取得
   */
  const lecId = lectures[lecIndex];

  /**
   * プルダウン変更時処理
   */
  const handleChange = (event) => setLecIndex(event.target.value);
  useEffect(() => localStorage.setItem(STORAGE_KEY, lecIndex), [lecIndex]);

  return (
    <div className="App">
      <select className="App-select" value={lecIndex} onChange={handleChange}>
        {lectures.map((id, index) => (
          <option key={id} value={index}>
            {id}
          </option>
        ))}
      </select>

      <div className="App-start">
        <h2>練習コード（start）</h2>
        <DynamicLoader component={`./${lecId}/start/Example`} />
      </div>
      <div className="App-end">
        <h2>完成コード（end）</h2>
        <DynamicLoader component={`./${lecId}/end/Example`} />
      </div>
    </div>
  );
};

export default App;
