import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Home from '../pages/home';
import Challenge from '../pages/challenge';
import Message from '../pages/message';
import MessageRoom from '../pages/message/MessageRoom';

const RedirectHome = () => {
  return <Navigate to={`/home/100`} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RedirectHome />,
  },
  {
    path: '/home/:percentage',
    element: <Home />,
  },
  {
    path: '/challenge',
    element: <Challenge />,
  },
  {
    path: '/message/:id',
    element: <MessageRoom />,
  },
  {
    path: '/message',
    element: <Message />,
  },
]);

const RouterRoot = () => {
  return <RouterProvider router={router} />;
};

export default RouterRoot;
