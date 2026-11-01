import React from 'react';
import {createRoot} from 'react-dom/client';
import {AWSVPN} from './AWSVPN';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><AWSVPN/></React.StrictMode>);
