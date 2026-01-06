import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SessionStore } from "./sharedstate/SessionState";
import { EventStore } from "./sharedstate/EventState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import EventPage from "./pages/EventPage";
import HelpPage from "./pages/HelpPage";

const router = createBrowserRouter([
  { path: "/",
    element: <LoginPage />
  },
  { path: "/login",
    element: <LoginPage /> 
  },
  { path: "/register", 
    element: <RegisterPage /> 
  },
  { path: "/dashboard", 
    element: <DashboardPage /> 
  },
  { path: "/event", 
    element: <EventPage /> 
  },
  { path: "/help", 
    element: <HelpPage /> 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <SessionStore>
      <EventStore>
        <RouterProvider router={router} />
      </EventStore>
    </SessionStore>
  </StrictMode>
);
