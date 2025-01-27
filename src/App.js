import React from "react";
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;