import AppRoutes from "./App.routes";
import { AuthProvider } from "./features/auth/AuthContext";
import { SongsContext } from "./features/Songs/SongsContext from "./features/Songs/SongContext";
const App = () => {
  return (
    <div>      
      <AuthProvider>
        <SongsContext>
           <AppRoutes />
        </SongsContext>
      </AuthProvider>
     
    </div>
  );
};

export default App;
