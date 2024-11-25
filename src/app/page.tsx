import Hero from "@/components/hero";
import Header from "@/components/header";
import About from "@/components/about";
import Menu from "@/components/menu";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <main className= ''>
     <Header />
     <Hero />
     <About />
     <Menu />
     <Blog />
     <Contact />
     <Footer />
    </main>
  );
}
