import React from 'react';
import { Outlet } from 'react-router-dom';
import SREHeader from '../Atoms/SREHeader';

function DefaultPageTemplate() {
  return (
    <div>
      <SREHeader />
      <div className="mb-20">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultPageTemplate;
