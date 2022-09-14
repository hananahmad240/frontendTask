
import List from './components/List'
import Todo from './components/Todo'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { getUsers } from './store/action/users'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getUsers({
        id:"12"
      })
    )
  }, [])
  return (
    <div className="App">
      <div className="grid">
        <div className="col">
          <List />
        </div>

        <div className="col">
          <Todo />
        </div>
      </div>



    </div>
  );
}

export default App;
