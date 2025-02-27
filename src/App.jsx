import SideBar from './components/navigation/SideBar';
import Header from './components/navigation/Header';

import { useState } from 'react';
import { homeNavItems } from './components/navigation/nav.helper';


const App = () => {

  const [activeCategory, setActiveCategory] = useState(homeNavItems[0].id);

  const updateActiveCategory = (id) => {
    setActiveCategory(id);
  }

  return (
    <main>
      <Header selected={activeCategory} onUpdate={updateActiveCategory} />
      <div className="hidden md:flex px-5 2xl:px-60">
        <SideBar selected={activeCategory} onUpdate={updateActiveCategory} />
        <div className="w-[1px] min-h-screen bg-secondary "></div>
        <div className='flex justify-center items-center flex-1'> {activeCategory}</div>
      </div>
    </main>

  )
}

export default App