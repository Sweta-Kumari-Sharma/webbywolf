import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Body from './Body'
import axios from 'axios';
import Images from './Images';

const Home = () => {
    const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(10);
  const [refresh, setRefresh] = useState(0);
  
const [loading, setLoading] = useState(false); 
  const onTextChange = (text) => {
    setText(text);
  }

  const onCountChange = (count) => {
    setCount(count);
  }

  useEffect(() => {
    setLoading(true);
    if(count < 3 || count > 200){
    //   toggleSnack(true);
      return;
    }
    // https://pixabay.com/api/?key=38417916-2983126fa02bce9f75145ec8c
    // toggleSnack(false);
    const getImages = async (text, count) => {
      // console.log('apifires');
        try{
            const data = await axios.get(`https://pixabay.com/api/?key=38417916-2983126fa02bce9f75145ec8c&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
            setLoading(false);
            return data;
        }catch(error){
            console.log(error)
        }
    }
    const getData = async () => {
      await getImages(text, count).then(response => {
        setData(response.data.hits);
        console.log(data);
      }); 
    }
    getData();
  }, [text, count, refresh])
  return (
    <div className='flex flex-col justify-center space-y-20 '>
      <Navbar/>
      <Body text={text} setText={setText} count={count} setCount={setCount} refresh={refresh} setRefresh={setRefresh}/>
      <Images data={data} loading={loading}/>
    </div>
  )
}

export default Home
// box-shadow: -3.942500114440918px 3.942500114440918px 3.942500114440918px 0px #FFFFFF6E inset;

// box-shadow: 3.942500114440918px -3.942500114440918px 3.942500114440918px 0px #B6B6B66E inset;
