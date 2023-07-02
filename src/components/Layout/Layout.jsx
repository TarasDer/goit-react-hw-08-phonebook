import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import { FaBookOpen } from 'react-icons/fa';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  const { isLoggedIn } = useSelector(getAuth);
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.nav_item}>
              <FaBookOpen fontSize="40px" fill="white" />
              <NavLink to="/">PHONEBOOK</NavLink>
            </li>
            {isLoggedIn && (
              <li className={css.nav_item}>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <ul className={css.list}>
            <li className={css.list_item}>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </header>
      <main className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
