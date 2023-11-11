import { Route, Routes } from "react-router-dom";
import {Dashboard, LandingPage, UserProfile} from "src/pages"
import RequiredLogin from "../components/RequiredLogin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <RequiredLogin>
            <Dashboard />
          </RequiredLogin>
        }
      />
      <Route path="/@/:username" element={<UserProfile />} 
      />
    </Routes>
  );
}
