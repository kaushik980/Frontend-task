import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Only here
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  {/* ✅ BrowserRouter should be only here */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
