import SideBar from './components/navigation/SideBar';
import Header from './components/navigation/Header';

import { useState } from 'react';
import { homeNavItems } from './components/navigation/nav.helper';
import Main from './components/main/Main';


const App = () => {

  const [activeCategory, setActiveCategory] = useState(homeNavItems[0].id);

  const updateActiveCategory = (id) => {
    setActiveCategory(id);
  }

  return (
    <main>
      <Header selected={activeCategory} onUpdate={updateActiveCategory} />

      <div className="flex px-5 2xl:px-60">
        {/* Sidebar only visible on md+ screens */}
        <div className="hidden md:flex justify-between w-1/4 lg:w-1/5">
          {/* Sidebar Container */}
          <SideBar selected={activeCategory} onUpdate={updateActiveCategory} />
          <div className="w-[1px] ml-1 min-h-screen bg-secondary"></div>
        </div>
        {/* Main Content (Always Visible) */}
        <Main />
      </div>
    </main>

  )
}

export default App