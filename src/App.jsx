import {useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Greeting from './components/Greetings'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchGreeting, selectGreeting } from './redux/store'

const App = () =>{
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(()=>{
    dispatch(fetchGreeting())
    .catch((error) => {
      console.error('Error fetching greeting:', error.message);
    });

    }, [dispatch]);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route index element = {<Greeting greeting={greeting}/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
