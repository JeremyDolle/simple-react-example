import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import DefaultPageTemplate from '../components/Organisms/DefaultPageTemplate';
import { Users, UserPosts } from '../views';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPageTemplate />}>
          <Route index element={<Users />} />
          <Route path="/users/:id/posts" element={<UserPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {

};

export default Router;
