"use client"; // Marquer ce fichier comme Client Component

import React, { useState } from 'react';
import NavBar from './ui/Navbar';
import ContactModal from './ui/ContactModal';
import HeroSection from './ui/HeroSection';
import CollaborationSection from './ui/collaboration';
import ValuesSection from './ui/Values';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <NavBar openModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <HeroSection/>
      <CollaborationSection/>
      <ValuesSection/>
    </>
  );
};

export default Page;
