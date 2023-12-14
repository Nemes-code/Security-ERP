import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Client from "./pages/client";
import Emergency from "./pages/emergency";
import Access from "./pages/access";
import Settings from "./pages/settings";
import Accounts from "./pages/administration/accounts";
import Assets from "./pages/administration/assets";
import Documents from "./pages/administration/documents";
import Reporting from "./pages/administration/reporting";
import Training from "./pages/administration/training";
import Communication from "./pages/management/communication";
import Employees from "./pages/management/employees";
import Incident from "./pages/management/incident";
import Scheduling from "./pages/management/scheduling";
import Surveilance from "./pages/management/surveilance";
import Navigation from "./layout/navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accs" element={<Access />} />
        <Route path="/clnt" element={<Client />} />
        <Route path="/emrg" element={<Emergency />} />
        <Route path="/sett" element={<Settings />} />
        <Route path="/acct" element={<Accounts />} />
        <Route path="/asst" element={<Assets />} />
        <Route path="/docc" element={<Documents />} />
        <Route path="/rept" element={<Reporting />} />
        <Route path="trn/" element={<Training />} />
        <Route path="/comm" element={<Communication />} />
        <Route path="/emp" element={<Employees />} />
        <Route path="/sched" element={<Scheduling />} />
        <Route path="/surv" element={<Surveilance />} />
        <Route path="/incd" element={<Incident />} />
      </Routes>
    </Router>
  );
}

export default App;
