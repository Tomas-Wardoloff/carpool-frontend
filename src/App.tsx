import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home/";
import { LoginPage } from "./components/login";
import { RegisterPage } from "./components/register";
import { TripDetailsPage } from "./components/trip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="register/" element={<RegisterPage />} />
        <Route path="/trip/:id" element={<TripDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
