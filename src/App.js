// import logo from './logo.svg';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Filter from './component/Filter';
import Cards from './component/Cards';
import TopCourses from './component/TopCourses';
import { filterdata, apiUrl } from './data';
import { useState, useEffect } from 'react';
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  const [res, setRes] = useState(null);

  async function FetchData() {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      // console.log(json); // Check the structure of the response
      setRes(json.data);
    } catch (err) {
      toast.error("Bhaiya, Network issue hai");
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <TopCourses />
      </div>
      <div>
        <Filter data={filterdata} />
      </div>
      <div>
        {res ? <Cards cards={res} /> : <p className='loader'><CircleLoader /></p>}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
