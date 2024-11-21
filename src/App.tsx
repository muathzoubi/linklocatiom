import { useEffect } from 'react';
import './App.css';

function App() {
  const init = () => {
    window.location.href = '#';
  };
  useEffect(() => {
    setTimeout(() => {
      init();
    });
  }, []);
  return (
    <>
      <div className="app">
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <span className="loader"></span>
      <h1>404</h1>
      <div className="card">
        <h2>الصفحة المطلوبة غير موجود</h2>
      </div>

      <p className="read-the-docs">قم بتحديث الصفحة او حاول مرة اخرى</p>
    </>
  );
}

export default App;
