import Footer from "./organisms/Footer";
import Navbar from "./organisms/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}