import React from 'react';
// import 'primeicons/primeicons.css';
// import 'primereact/resources/primereact.min.css';
// import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { AppRouter } from './routers/AppRouter';
import './app.css';

export const SoccerApp = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};
