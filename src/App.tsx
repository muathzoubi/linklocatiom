import { useEffect } from "react";
import "./App.css";

function App() {
  const init = () => {
    window.location.href = "#";
  };
  useEffect(() => {
    setTimeout(() => {
      init();
    });
  }, []);
  return (
    <>
      <div className="app"></div>

      <span className="loader"></span>

      <div className="card">
        <h2>جاري التحويل </h2>
      </div>
    </>
  );
}

export default App;
