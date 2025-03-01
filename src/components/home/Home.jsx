import { TopBar, SideBar } from '../navigation/index.nav';
import MainPanel from '../main_panel/MainPanel';

function Home() {
    return (
        <main className="flex flex-col md:flex-row h-screen">
            <TopBar />
            <div className="hidden md:block w-[20%] h-full">
                <SideBar />
            </div>
            <MainPanel />

        </main>
    )
}

export default Home