import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header'
import Footer from './Components/Footer'
import SingleBlogPage from './SingleBlogPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/createPost',
    element: <SingleBlogPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>
);

