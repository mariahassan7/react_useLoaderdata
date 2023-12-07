import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import './App.css';
import {HomeEducative} from "./HomeEducative"
import {DataEducative,load_my_api_data } from "./DataEducative"
import {ContactEducative} from "./ContactEducative"

function App(props) {
  const educative_router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomeEducative />} />
        <Route path="/contact_educative" element={<ContactEducative />} />
        <Route path="data_educative" element={<DataEducative />} loader={load_my_api_data} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={educative_router} /> {/* router is the prop */}
    </div>
  );
}
const Root = () => {
  return <>
     <div class="educatives_styles">
         <Link class="flex_item_one" to="/">Educative's Homepage</Link>
         <Link class="flex_item_one" to="/data_educative">Educative's Pet Gallery</Link>
     </div>
     <div>
        <Outlet />
     </div>
  </>
}
export default App;
