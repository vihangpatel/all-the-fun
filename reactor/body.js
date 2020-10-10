import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router";

const Router = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default Router;
