import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
