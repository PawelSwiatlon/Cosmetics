import styles from './Root.module.scss';
import Nav from '../../components/Nav/Nav';
import Heding from '../../components/Heding/Heding';
import Ingredients from '../Ingredients/Ingredients';

function Root() {
  return (
    <div>
      <Nav></Nav>
      <Heding></Heding>
      <Ingredients></Ingredients>
    </div>
  );
}

export default Root;
