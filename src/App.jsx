import { brandingImages } from "./assets/assets"
import About from "./components/About"
import Affiliates from "./components/Affiliates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import GetItSold from "./components/GetItSold"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Map from "./components/Map"
import SearchListing from "./components/SearchListing"
import Services from "./components/Services"

function App() {

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${brandingImages.heroBG})` }}
    >
      <Header />
      <Hero />
      <About />
      <GetItSold />
      <Services />
      <SearchListing />
      <Affiliates />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App
