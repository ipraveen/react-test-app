import React from 'react';
import { themes } from './theme';

const Context = React.createContext(themes.light);

export { Context };
