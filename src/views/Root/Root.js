// Import styles scss
import styles from './Root.module.scss';

// Import Public Components
import Nav from '../../components/Nav/Nav';

function Root() {
  return (
    <div className={styles.wraper}>
      <Nav logoText="Cosmetic" navItems={['Home', 'About', 'Contact']} />
    </div>
  );
}

export default Root;
