// Import styles scss
import styles from './Root.module.scss';

// Import library react-router-dom 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Public Components
import Nav from '../../components/Nav/Nav';

function Root() {
  return (
    <BrowserRouter>
      <>
        <Nav logoText="Cosmetic" navItems={['Home', 'About', 'Contact']} />
        <Switch>

        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;
