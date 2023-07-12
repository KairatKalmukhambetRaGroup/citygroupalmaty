'use client'
import About from "@/components/About";
import ApplicationModal from "@/components/ApplicationModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Services from "@/components/Services";
import Tariffs from "@/components/Tariffs";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  useEffect(()=>{
    if(showModal === true){
      document.querySelector('body').style.overflow = 'hidden';
    }else{
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('body').style.overflowX = 'hidden';
    }
  }, [showModal])

  return (
    <>
      <ApplicationModal showModal={showModal} setShowModal={setShowModal}/>
      <Header openModal={openModal} />
      <main>
        <Main openModal={openModal} />
        <About />
        <Services />
        <Tariffs openModal={openModal} />
      </main>
      <Footer />
    </>
  )
}
