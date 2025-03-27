"use client";
import Link from "next/link";
import * as S from "./styles";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <S.NavContainer>
      <S.NavContent>
        <S.Logo>LOGO</S.Logo>
        <S.NavLinks>
          <Link href="/">Home</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin color="white" size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook color="white" size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <Instagram color="white" size={24} />
            </a>
          </div>
          <S.ConnectButton>Lets Connect</S.ConnectButton>
        </S.NavLinks>
      </S.NavContent>
    </S.NavContainer>
  );
}
