import { menuItems } from '../menu/menuItemsList';
const MenuItems = () => {
  return (
    <div>
      {menuItems.map((item, index) => 
                    {
                        return(
                            <li key={index}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        );
                    })
                }
    </div>
  )
}

export default MenuItems
