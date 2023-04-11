import './App.css';
import StaticJobs from './StaticJobs/StaticJobs';
import { useState, useEffect } from 'react';
import Loading from './StaticJobs/loader/Loading';


function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
     {isLoading? (<Loading/>) : (
    <div className="App">
      <StaticJobs />
    </div>
    )}
    </>
  );
}

export default App;
