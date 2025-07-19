
function Home() {
  return (
    /*<div className="header-panels">
        <div className="panel">
            <h1>REPORTAŻ ŚLUBNY</h1>
            <div className="panel-image-container">
                <img src={First}></img>
            </div>
        </div>
        <div className="panel">
            <h1>SESJE NARZECZEŃSKIE</h1>
            <div className="panel-image-container">
                <img src={Second}></img>
            </div>
        </div>
        <div className="panel">
            <h1>SESJE PORTRETOWE</h1>
            <div className="panel-image-container">
                <img src={Third}></img>
            </div>
        </div>
        
    </div>
    */

    <div className="w-full bg-white" >
      <div className="max-w-7xl mx-auto px-4 pb-15 pt-15 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          
          <div className="w-full md:w-1/4 bg-white overflow-hidden transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-left py-4 text-black text-shadow-lg">REPORTAŻ ŚLUBNY</h3>
            <div className="h-w overflow-hidden ">
              <img 
                src="./src/assets/images/1.jpg" 
                alt="Reportaż ślubny" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/4 bg-white overflow-hidden transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-left py-4  text-black text-shadow-lg">SESJE NARZECZEŃSKIE</h3>
            <div className="h-w overflow-hidden">
              <img 
                src="./src/assets/images/2.jpg" 
                alt="Sesje narzeczeńskie" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/4 bg-white overflow-hidden transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-left py-4  text-black text-shadow-lg">SESJE PORTRETOWE</h3>
            <div className="h-w overflow-hidden">
              <img 
                src="./src/assets/images/3.jpg" 
                alt="Sesje portretowe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(../src/assets/images/main2.jpg)] h-150 bg-no-repeat bg-center bg-cover">
      
    </div>

    </div>
  );
}

export default Home;