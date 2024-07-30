import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, href, text, icon}) {
  if (href) {
    return (
      <a href={href} className='btn'>
        <i className={`uil ${icon} button-icon`}></i> {text}
      </a>
    );
  }

  return (
    <Link to={to} className='btn'>
      <i className={`uil ${icon} button-icon`}></i> {text}
    </Link>
  );
}

export default Button;
