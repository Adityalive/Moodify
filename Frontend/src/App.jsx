import AppRoutes from "./App.routes";
import { BrowserRouter } from "react-router-dom";
import { SongsProvider } from "./features/Songs/SongContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SongsProvider>
          <AppRoutes />
        </SongsProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
