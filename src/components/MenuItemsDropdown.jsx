//import { menuItems } from '../menu/menuItemsList';
import Dropdown from "./Dropdown";

const MenuItemsDropdown = (menus) => {
    return(
        <>
            <li>
                {menus.list ? (
                    <>
                        <button type="button" aria-haspopup="menu">
                            {menus.title}
                        </button>
                        <Dropdown submenus={menus.list} />
                    </>
                ) : (
                    <a href={menus.url}>{menus.title}</a>
                )}
            </li>
        </>
    )
}

export default MenuItemsDropdown;
