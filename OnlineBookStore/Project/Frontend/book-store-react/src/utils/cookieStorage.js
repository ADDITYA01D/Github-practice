import Cookies from 'js-cookie';

const getItem = (key) => Promise.resolve(Cookies.get(key));
const setItem = (key, value) => Promise.resolve(Cookies.set(key, value));
const removeItem = (key) => Promise.resolve(Cookies.remove(key));

const cookieStorage = {
    getItem,
    setItem,
    removeItem,
};

export default cookieStorage;
