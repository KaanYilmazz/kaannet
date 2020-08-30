import Me from './Views/Me';
import Potential from './Views/Potential';
import Home from './Views/Home';
export const routes = [
    {
        path:'/me',
        component: Me,
    },
    {
        path: '',
        component: Home,
    },
    {
        path:'/potential',
        component: Potential
    }
];