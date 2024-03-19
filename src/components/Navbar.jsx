import { Link } from 'react-router-dom';
import { menuItems } from '../menu/menuItemsList';
//import { Link } from 'react-router-dom';
//import Dropdown from './Dropdown';
//import MenuItems from './MenuItems';
//import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <>
        <nav>
            <menu>
                {menuItems.map((item) => 
                    <Link to={item.url} key="index">{item.title}</Link>
                       //{
                        // item.list ? (
                        //     <a href='#' key="index">{item.title}</a>
                        // ):(
                        //     <a href={item.url}>{item.title}</a>
                        // )
                    //    <a href='#'>{item.title}</a>
                        // return <MenuItems menu={item} key={index} />
                  // }
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
