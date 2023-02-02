import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../Page/Home";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;