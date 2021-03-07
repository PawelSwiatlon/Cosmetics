// Import styles scss
import styles from './Root.module.scss';

// Import library react-router-dom 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Public Components
import Nav from '../../components/Nav/Nav';
import HomeView from '../Home/HomeView';

function Root() {
  const navItems = [
    { page: 'home', path: '/' },
    { page: 'about', path: 'about' },
    { page: 'contact', path: 'contact' }
  ]
  return (
    <BrowserRouter>
      <>
        <Nav logoText='Cosmetic' navItems={navItems} />
        <Switch>
          <Route exact path='/' component={HomeView} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;
