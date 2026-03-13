import AppRoutes from "./App.routes";
import { SongsProvider } from "./features/Songs/SongContext";
const App = () => {
  return (
    <div>
        <SongsProvider>
           <AppRoutes />
        </SongsProvider>
    </div>
  );
};

export default App;
