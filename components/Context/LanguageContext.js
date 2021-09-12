// i have created context here with the default value which i have used in app.js by importing there.
// in app.js i have wrapped the parentcomponent in this context provider and gave the inital value.
// also i have created usevalue hook by wrapping usecontext in a function that i can use in any component rendered by parentcomponent by importing there can calling inside a component.

import { createContext, useContext } from 'react';

export const Context = createContext('default value');
export const useValue = () => useContext(Context);
