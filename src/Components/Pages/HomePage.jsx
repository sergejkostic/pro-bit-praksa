import "./HomePage.css"
import Navbar from "../Sections/Navbar";
import Hero from "../Sections/Hero";
import HomePageContent from "../Sections/HomePageContent";


function HomePage() {
    return (
		<div className='main_container'>
			<div className="header_container">
				<Navbar />
				<Hero />
				<HomePageContent/>
			</div>
		</div>
    )
}


export default HomePage;