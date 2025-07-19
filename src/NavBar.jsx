
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    /*
    <header className="header-container">

      <nav className="nav-tiles-container">
        <div className="left-tiles">
          <Link to="/" className="nav-tile">O NAS</Link>
          <Link to="/page1" className="nav-tile">OFERTA</Link>
        </div>
        
        <div className="right-tiles">
          <Link to="/page2" className="nav-tile">GALERIE</Link>
          <Link to="/page3" className="nav-tile">KONTAKT</Link>
        </div>
      </nav>
    </header>
    */
   <header className="bg-[url(../src/assets/images/main1.jpg)] h-110 bg-no-repeat bg-center bg-cover">
      <nav className="relative z-10 pt-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="flex space-x-10 sm:space-x-20">
            <Link to="/" className="text-white hover:text-gray-300 text-sm font-medium transition">O NAS</Link>
            <Link to="/services" className="text-white hover:text-gray-300 text-sm font-medium transition">OFERTA</Link>
          </div>

          <div className="flex space-x-10 sm:space-x-20">
            <Link to="/portfolio" className="text-white hover:text-gray-300 text-sm font-medium transition">GALERIE</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 text-sm font-medium transition">KONTAKT</Link>
          </div>
        </div>
      </nav>
      
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div className="flex justify-end items-center h-full">
          <h1 className="text-white sm:text-5xl text-2xl font-bold max-w-lg leading-tight px-12 py-24 text-shadow-lg/20">
            ROZŚWIT
          </h1>
        </div>

        <div className="px-10 sm:pb-16 pb-20">
          <p className="text-white text-xl leading-relaxed font-light tracking-wide max-w-2xl text-shadow-lg/20">
            Wasze ważne momenty
          </p><p className="text-white text-xl leading-relaxed font-light tracking-wide max-w-2xl text-shadow-lg/20">
            zachowane na zawsze w naszych kadrach
          </p>
        </div>
      </div>
</header>

  );
};

export default NavBar;