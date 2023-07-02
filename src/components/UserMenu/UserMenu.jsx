import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import { logoutThunk } from 'redux/AuthSlice/operations';
import css from './UserMenu.module.css';
import { VscAccount } from 'react-icons/vsc';
import { LuLogOut } from 'react-icons/lu';

const UserMenu = () => {
  const { user } = useSelector(getAuth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={css.wrapper}>
      <VscAccount fontSize="40px" fill="white" />
      <p className={css.text}>{user.name}</p>
      <button className={css.btn} onClick={handleClick} type="button">
        <span> Logout</span>
        <LuLogOut fontSize="25px" fill="white" />
      </button>
    </div>
  );
};
export default UserMenu;
