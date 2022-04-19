import style from './App.module.css';

import { add } from './util';

export default function App() {
  console.log('hi', add(1, 3));
  return <div className={style.center}> App</div>;
}
