import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { NoPage } from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * Above Example Explained:
 * We wrap our content first with <BrowserROuter>
 * Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
 *
 * <Route> s can be nested. The first <Route> has a path of '/' and and renders the Layout component.
 *
 * The nested <Route> s inherit and add to the parent route. So the blogs path is combined with the parent
 *  and becomes '/blogs'.
 *
 * The Home component route does not have a path but has an 'index' attribute. That specifies this route as
 * the default route for the parent route, which is '/'.
 *
 * Setting the 'path' to '*' will act as a catch-all for any undefined URLs. This is great for a 404 error page.
 */

/**
 * Pages / Components
 *
 * The 'Layout' component has '<Outlet>' and '<Link>' elements.
 * The '<Outlet>' renders the current route selected.
 *
 * '<Link>' is used to set the URL and keep track of browsing history.
 *
 * Anytime we link to an internal path, we will use <Link> instead of '<a href="">'.
 * The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.
 *
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
