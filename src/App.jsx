import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import EventDetails from './pages/EventDetails';
import Error from './components/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='event/:eventID' element={<EventDetails />} />
      <Route path='create' element={<CreateEvent />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='/*' element={<Error />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
