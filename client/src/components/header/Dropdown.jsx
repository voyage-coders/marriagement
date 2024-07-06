import './Dropdown.css';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Dropdown() { 
  const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

return (
  <>
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {MenuItems.map((category, index) => (
        <li key={index} className="dropdown-category">
          <span className="dropdown-category-title">{category.category}</span>
          <ul className="dropdown-submenu">
            {category.items.map((item, subIndex) => (
              <li key={subIndex}>
                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);}



//   return (
//     <>
//       <ul onClick={handleClick}
//       className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//       {MenuItems.map((item,index) => {
//         return (
//           <li key={index}>
//             <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
//               {item.title}
//             </Link>
//           </li>
//         )
//       })}
//       </ul>
//     </>
//   )
// }

export default Dropdown