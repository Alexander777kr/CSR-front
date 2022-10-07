import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  MainPage,
  PrivacyPolicyPage,
  TechSupportPage,
  TermsOfServicePage,
  AccountPage,
  AdminLayout,
  OpenCase
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/tech-support" element={<TechSupportPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/settings" element={<h3>Settings</h3>} />
        </Route>
        <Route path="/open-case" element={<OpenCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
