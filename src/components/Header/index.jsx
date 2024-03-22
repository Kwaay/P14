import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav className={styles['header-container']}>
        <ul>
          <Link to={'/'}>
            <li className={styles['nav-btn']}>Create Employee</li>
          </Link>
          <Link to={'/view'}>
            <li className={styles['nav-btn']}>View Employees</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
