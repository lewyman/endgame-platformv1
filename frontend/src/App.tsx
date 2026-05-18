import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";

const Nursing = lazy(() => import("./pages/Nursing"));
const Drugs = lazy(() => import("./pages/Drugs"));
const DrugDetail = lazy(() => import("./pages/DrugDetail"));
const Interactions = lazy(() => import("./pages/interactions"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Songs = lazy(() => import("./pages/Songs"));
const Tier0 = lazy(() => import("./pages/Tier0"));
const AuthCallback = lazy(() => import("./pages/AuthCallback"));

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="maia-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-white text-gray-900">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nursing" element={<Nursing />} />
              <Route path="/nursing/pharmacology" element={<Drugs />} />
              <Route path="/drugs" element={<Drugs />} />
              <Route path="/drugs/:slug" element={<DrugDetail />} />
              <Route path="/interactions" element={<Interactions />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/tier0" element={<Tier0 />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
