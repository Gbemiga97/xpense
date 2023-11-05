import { Brands, CTA, Features1, Features2, Features3, Footer, Header, Hero, Overview, Product, Testimonials } from "./sections";


function App() {
  return (
    <div className="overflow-hidden">
     <Header />
     <Hero />
     <Overview />
     <Brands />
     <Features1 />
     <Features2 />
     <Features3 />
     <Product />
     <Testimonials />
     <CTA />
     <Footer />
    </div>
  );
}

export default App;
