import { useEffect } from "react";
import "./App.css";

function App() {
  const init = () => {
    window.location.href = "#";

    // Simulate an HTTP redirect:
    window.location.replace("#");
  };
  useEffect(() => {
    setTimeout(() => {
      init();
    }, 5000);
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
