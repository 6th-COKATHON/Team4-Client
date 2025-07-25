import House from '../assets/icons/house.svg';
import HouseActive from '../assets/icons/house-active.svg';
import BadgeCheck from '../assets/icons/badge-check.svg';
import BadgeCheckActive from '../assets/icons/badge-check-active.svg';
import Message from '../assets/icons/message.svg';
import MessageActive from '../assets/icons/message-active.svg';
import User from '../assets/icons/user.svg';
import { Link } from 'react-router';

const NAV_LIST = [
  {
    icon: House,
    activeIcon: HouseActive,
    path: '/home/100',
  },
  {
    icon: Message,
    activeIcon: MessageActive,
    path: '/message',
  },
  {
    icon: BadgeCheck,
    activeIcon: BadgeCheckActive,
    path: '/challenge',
  },
  {
    icon: User,
    activeIcon: User,
    path: '/user',
  },
];

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-100 flex px-7 pt-4 pb-2">
      <ul className="flex w-full list-none items-center justify-between">
        {NAV_LIST.map(item => (
          <li key={item.path}>
            <Link to={item.path}>
              <img
                src={
                  currentPath.includes(item.path) ? item.activeIcon : item.icon
                }
                alt={item.path}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
