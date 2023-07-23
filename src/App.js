import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { useEffect } from 'react';

function App() {
  const setbg=()=>{
    fetch('https://pixabay.com/api/?key=38417916-2983126fa02bce9f75145ec8c',{
      method:'GET',
    }).then(res=>res.json())
      .then(image=>{
        console.log(image);
        const total=image.hits.length;
        const idx=Math.floor(Math.random() * total);
        console.log(idx);
        console.log(image.hits[idx]);
        const img=image.hits[idx].largeImageURL;
        const bg=document.querySelector(".app");
        bg.style.backgroundImage=`url(${img})`;
      })
  }
  useEffect(() => {
    setbg();
  }, [])
  return (
    <>
      <div className='app w-[100vw] h-[100vh] bg-no-repeat	bg-cover bg-center text-[Euclid Circular B]'>
        <Home/>
      </div>
    </>
  );
}

export default App;
