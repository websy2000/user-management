import './App.css';
import LoginPage from './pages/login';
import PrivateRoutes from './pages/private-routes';
import UserDetailsPage from './pages/user-details';
import UsersPage from './pages/users';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
