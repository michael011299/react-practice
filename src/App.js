import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Car from './Components/Car'
// import Forms from "./Components/Form";
import Cats from "./Components/Cats";
import { getCats } from "./Api";
import Count from './Components/Count'
import Login from './Components/Login'
import { useEffect, useState } from "react";


const App = () => {
  const [testCats, setTestCats] = useState([]);

  useEffect(() => {
    getCats().then((cats) => setTestCats(cats));
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row row-cols-3 g-2 p-2'>
          <Cats testCats={testCats} />
        </div>
      </div>
      <Count />
      <Login/>
      <Car/>
    </>
  );
};

export default App;
