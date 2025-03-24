import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import AuthProvider from "./Services/Context/AuthContext";
const router = createBrowserRouter(Routes);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
