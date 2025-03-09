import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feed from "./components/feed/Feed"
import PostHome from './components/postHome/PostHome';
import ViewProfile from './components/viewProfile/ViewProfile';
import Profile from './components/profile/Profile';
import Write from './components/write/Write';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

const router = createBrowserRouter([
    {
        path: "/feed",
        element: <Feed />,
        // errorElement: <h2>404 Page not found!</h2>
    },
    {
        path: "/",
        element: <Home />,
        // errorElement: <h2>404 Page not found!</h2>
    },
    {
        path: "/login",
        element: <Login />,
        // errorElement: <h2>404 Page not found!</h2>
    },
    {
        path: "/signup",
        element: <Signup />,
        // errorElement: <h2>404 Page not found!</h2>
    },
    {
        path: "/postHome/:postId",
        element: <PostHome />
    },
    {
        path: "/viewAuthor/:authorId",
        element: <ViewProfile />
    },
    {
        path: "/viewProfile",
        element: <Profile />
    },
    {
        path: "/write",
        element: <Write />
    },
    {
        path: "/editPost/:postId",
        element: <Write />
    }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App