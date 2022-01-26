import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import DefaultPageTemplate from '../components/Organisms/DefaultPageTemplate';
import { Home, UserPosts } from '../views';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPageTemplate />}>
          <Route index element={<Home />} />
          <Route path="/users/:id/posts" element={<UserPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {

};

export default Router;
