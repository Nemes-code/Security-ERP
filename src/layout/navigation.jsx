import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-light bg-secondary">
        <div className="dropdown">
          <button className="btn btn-primary">Administration</button>
          <div className="dropdown-content">
            <Link to="/acct">Accounts</Link>
            <Link to="/asst">Assets</Link>
            <Link to="/docc">Documents</Link>
            <Link to="/rept">Reporting</Link>
            <Link to="/trn">Training</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-primary">Management</button>
          <div className="dropdown-content">
            <Link to="/comm">Communication</Link>
            <Link to="/emp">Employees</Link>
            <Link to="/incd">Incidents</Link>
            <Link to="/sched">Scheduling</Link>
            <Link to="/surv">Surveilance</Link>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Link to="/clnt" className="btn btn-primary">
          Clients
        </Link>
        <Link to="/emrg" className="btn btn-primary">
          Emergencies
        </Link>
        <Link to="/accs" className="btn btn-primary">
          Login
        </Link>
        <Link to="/sett" className="btn btn-primary">
          Settings
        </Link>
      </nav>
      ;
    </div>
  );
}

export default Navigation;
