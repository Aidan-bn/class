import { menuItems } from '../menu/menuItemsList';
//import MenuItemsDropdown from './MenuItemsDropdown';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <>
        <nav>
            <menu>
                {menuItems.map((item, index) => 
                    {
                        return <MenuItems menus={item} key={index} />;
                    }
                )}
            </menu>
            <h2>
                menu
            </h2>
        </nav>
    </>
  )
}

export default Navbar
