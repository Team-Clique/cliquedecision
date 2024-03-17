import React from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";


// Not Found Page
import NotFound from "../views/NotFound";

import FormSurveyLanding from "../views/all-home-pages/FormSurveyLanding";
import SecondPage from "../components/product/pages/SecondPage";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<FormSurveyLanding />} />



        {/* Feature Dropdown Routes */}
     
        <Route path="/SecondPage" element={<SecondPage/>}/>

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
