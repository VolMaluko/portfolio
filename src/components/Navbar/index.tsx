"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import * as S from "./styles";
import Link from "next/link";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <S.NavContainer>
        <S.Logo>Portfolio</S.Logo>
        <S.NavLinks>
          <Link href="/" passHref legacyBehavior>
            <S.NavLink>Home</S.NavLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <S.NavLink>About</S.NavLink>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <S.NavLink>Projects</S.NavLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <S.NavLink>Contact</S.NavLink>
          </Link>
        </S.NavLinks>
      </S.NavContainer>

      <S.MobileNavButton onClick={toggleMobileNav}>
        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </S.MobileNavButton>

      <S.MobileSidebar $isOpen={isMobileNavOpen}>
        <S.MobileSidebarLinks>
          <Link href="/" passHref legacyBehavior>
            <S.MobileSidebarLink onClick={closeMobileNav}>
              Home
            </S.MobileSidebarLink>
          </Link>
          <S.MobileSidebarDivider />
          <Link href="/about" passHref legacyBehavior>
            <S.MobileSidebarLink onClick={closeMobileNav}>
              About
            </S.MobileSidebarLink>
          </Link>
          <S.MobileSidebarDivider />
          <Link href="/projects" passHref legacyBehavior>
            <S.MobileSidebarLink onClick={closeMobileNav}>
              Projects
            </S.MobileSidebarLink>
          </Link>
          <S.MobileSidebarDivider />
          <Link href="/contact" passHref legacyBehavior>
            <S.MobileSidebarLink onClick={closeMobileNav}>
              Contact
            </S.MobileSidebarLink>
          </Link>
        </S.MobileSidebarLinks>
      </S.MobileSidebar>

      <S.Overlay $isOpen={isMobileNavOpen} onClick={toggleMobileNav} />
    </>
  );
}
