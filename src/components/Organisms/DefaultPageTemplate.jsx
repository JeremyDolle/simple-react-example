import React from 'react';
import { Outlet } from 'react-router-dom';
import SREHeader from '../Atoms/SREHeader';

function DefaultPageTemplate() {
  return (
    <div>
      <SREHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

DefaultPageTemplate.propTypes = {
};

export default DefaultPageTemplate;
