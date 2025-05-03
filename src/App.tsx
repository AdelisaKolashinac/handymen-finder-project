import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainClientRouter from "./routes/MainClientRouter";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainClientRouter />
    </BrowserRouter>
  );
}

export default App;
