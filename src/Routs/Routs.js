import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses"
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Apply from "../Pages/Apply/Apply"
import SingleCourse from "../Sharepage/SingleCourse/SingleCourse";
import FAQ from "../Pages/FAQ/FAQ";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                    return fetch('https://learn-easy-server.vercel.app/courses');
                  },
                element:<Home></Home>
            },
            {
                path:'/home',
                loader:async()=>{
                  return fetch('https://learn-easy-server.vercel.app/courses');
                },
                element:<Home></Home>    
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/singlecourse/:id',
                loader:({params})=>fetch(`https://learn-easy-server.vercel.app/courses/${params.id}`),
                element:<SingleCourse></SingleCourse>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/apply',
                element:<Apply></Apply>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
        ]
        
    }
])