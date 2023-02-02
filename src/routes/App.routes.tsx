import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<div>Home Page</div>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;