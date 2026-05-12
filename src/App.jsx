import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/route";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex-col sm:flex-row flex">
      <ToastContainer position="top-center" s autoClose={2000} />
      <Sidebar />
      <div className="sm:w-5/6 w-full">
        <AnimatePresence mode="wait">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              ></Route>
            ))}
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
