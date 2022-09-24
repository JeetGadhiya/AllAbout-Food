import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
<<<<<<< HEAD
import Recipes from "./components/Recipe/Recipe";
import ContactUs from "./components/ContactUs/ContactUs";
import "./App.css";
import Footer from "./components/Footer"
=======
import Recipes from "./components/Recipes/Recipes";
import ContactUs from "./components/ContactUs/ContactUs";
import OurMenu from "./components/OurMenu/OurMenu";
import './App.css';
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

<<<<<<< HEAD
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
=======
       
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
            <Route path='/ourmenu' element={<OurMenu />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
        
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
      </div>
    </AnimatePresence>
  );
};

export default App;
