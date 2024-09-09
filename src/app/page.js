"use client";
import homeStyles from "@/app/page.module.css";


export default function Home() {
  return (
    <>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        </ul>
      </nav>
      
      <main className={homeStyles.main}>
        <h1 className={homeStyles.title}>Welcome to the homepage!</h1>
        <div className={homeStyles.products}>
        <section className={homeStyles.productShowcase}>
        <div className={homeStyles.product1}>
          <img src="/product1.jpg" alt="Product 1" className={homeStyles.productImage1} />
            <h2 style={{color:'white'}}>Product 1</h2>
            <p style={{color:'white'}}>$19.99</p>
          </div>

          <div className={homeStyles.product2}>
          <img src="/product2.jpg" alt="Product 2" className={homeStyles.productImage2} />
          <h2 style={{ color: 'white', margin: '0.5rem 0' }}>Product 1</h2>
            <p style={{color: 'white',}}>$6.99</p>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
