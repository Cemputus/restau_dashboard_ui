import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Dashboard from './pages/Dashboard/index.tsx';
import Layout from './components/Dashboard/layout.tsx';
import ProductsPage from './pages/Dashboard/products/index.tsx';

//routes settings
const routes = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/dashboard/products/",
    element: <Layout>
      <ProductsPage/>
    </Layout>
  },
  {
    path: "/dashboard/reviews",
    element:<Layout>
    <App/>
  </Layout>
  },
  {
    path: "/dashboard/orders",
    element:<Layout>
    <App/>
  </Layout>
  },
  {
    path: "/dashboard/customers",
    element:<Layout>
    <App/>
  </Layout>
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard/>
      </Layout>
    ),
    // children: [
    //   {
    //     path: "/dashboard/products/",
    //     element:<App/>
    //   },
    //   {
    //     path: "/dashboard/reviews",
    //     element:<App/>
    //   },
    //   {
    //     path: "/dashboard/orders",
    //     element:<App/>
    //   },
    //   {
    //     path: "/dashboard/customers",
    //     element:<App/>
    //   },
    // ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
