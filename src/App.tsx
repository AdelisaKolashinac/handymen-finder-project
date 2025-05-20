import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainClientRouter from "./routes/MainClientRouter";
import { useEffect } from "react";
import { useUserStore } from "./stores/userStore";

function App() {
  const listenToAuthChanges = useUserStore(
    (state) => state.listenToAuthChanges
  );
  useEffect(() => {
    listenToAuthChanges();
  }, [listenToAuthChanges]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainClientRouter />
    </BrowserRouter>
  );
}

export default App;
