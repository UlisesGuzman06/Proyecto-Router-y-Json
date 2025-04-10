import { BrowserRouter } from "react-router";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
