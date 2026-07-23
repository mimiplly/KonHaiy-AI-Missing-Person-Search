import heroimg from "./heroimagefinal.png"
const Index = () => {
   
    return (
        <div>
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                {/* <Navbar/> */}
                <div className="pt-12 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" className="mx-auto" src={heroimg} alt="people smiling" width={'400px'} />
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full flex flex-col justify-center max-w-xl">
                        <p tabIndex="0" className="uppercase text-base lg:text-lg mb-4 font-semibold" style={{color: '#0F4C9A', lineHeight: '1.5'}}>AI-POWERED MISSING PERSON SEARCH</p>
                        <h1 tabIndex="0" className="text-3xl lg:text-5xl font-black mb-5 leading-snug" style={{color: '#071C3D', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                            Find Missing People<br />Faster with <span style={{background: 'linear-gradient(90deg, #178DE5 0%, #0B5CDF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>KonHai AI</span>
                        </h1>
                        <p tabIndex="0" className="text-base lg:text-lg mb-8 max-w-md" style={{color: '#3F4652', lineHeight: '1.5'}}>KonHai AI uses facial recognition technology to help identify and locate missing people through reported cases and surveillance footage.</p>
                        
                    </div>
                </div>
            </div>
        </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Index;
