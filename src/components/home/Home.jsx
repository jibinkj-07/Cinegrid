import { TopBar, SideBar } from '../navigation/index.nav';
import MainPanel from '../main_panel/MainPanel';
import { useState } from 'react';
import { categories } from '../navigation/nav.helper';

function Home() {
    const [activeCategory, setActiveCategory] = useState(categories[0].items[0].id);

    const updateCategory = (id) => {
        setActiveCategory((prev) => (prev !== id ? id : prev));
    }
    return (
        <main className="flex flex-col md:flex-row h-screen select-none">
            <TopBar
                activeCategory={activeCategory}
                updateCategory={updateCategory}
            />
            <div className="hidden md:block w-[25%] h-full">
                <SideBar
                    activeCategory={activeCategory}
                    updateCategory={updateCategory}
                />
            </div>
            <MainPanel
                activeCategory={activeCategory}
            />
        </main>
    )
}

export default Home