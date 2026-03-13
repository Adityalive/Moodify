import AppRoutes from "./App.routes";
import { AuthProvider } from "./features/auth/AuthContext";
import { SongsProvider } from "./features/Songs/SongContext";
const App = () => {
  return (
    <div>      
      <AuthProvider>
        <SongsProvider>
           <AppRoutes />
        </SongsProvider>
      </AuthProvider>
     
    </div>
  );
};

export default App;
