import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import RootLayout from "@/components/custom/RootLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AboutPage from "./pages/AboutPage";
import DocumentationPage from "./pages/DocumentationPage";
import FeaturesPage from "./pages/FeaturesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
