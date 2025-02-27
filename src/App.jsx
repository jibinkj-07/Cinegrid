import SideBar from './components/navigation/SideBar';
import Header from './components/navigation/Header';

import { useState } from 'react';
import { homeNavItems } from './components/navigation/nav.helper';


const App = () => {

  const [category, setCategory] = useState(homeNavItems[0].id);

  const updateCategory = (id) => {
    setCategory(id);
  }

  return (
    <main>
      <Header />     {/*  Only for small screens */}
      <div className="hidden md:flex px-5 2xl:px-60">
        <SideBar selected={category} onUpdate={updateCategory} />
        <div className="w-[1px] min-h-screen bg-secondary "></div>
        <div className='flex justify-center items-center flex-1'> {category}</div>
      </div>
    </main>

  )
}

export default App