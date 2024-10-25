import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import { useState } from 'react';


export default function Enclosed(){
  
  const [selected_category, setSelected_category] = useState(null);
  
  return(
    <div>
    <Navbar setSelected_category={setSelected_category} selected_category={selected_category} />
    <News selected_category={selected_category}/>
    <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Enclosed/>)
