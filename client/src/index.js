import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import {appStore,persistor} from './store/appStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Articles from './components/Articles';
import Contacts from './components/Contacts';
import ProjectPage from './components/ProjectPage'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: 'home',
        element: <Body />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path : 'projects',
        element: <Projects />,
      },
      {
        path : 'experience',
        element: <Experience />,
      },
      {
        path : 'articles',
        element: <Articles />,
      },
      {
        path : 'contacts',
        element: <Contacts />,
      }
    ]
  },
  {
    path: '/projects/:projectId',
    element: <ProjectPage />, // Add a separate route for ProjectPage
  },
]);

root.render(
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={appRouter} />
    </PersistGate>
  </Provider>
);