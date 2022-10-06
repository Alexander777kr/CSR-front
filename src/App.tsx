import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, PrivacyPolicyPage, TermsOfServicePage, AccountPage } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
