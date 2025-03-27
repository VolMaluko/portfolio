"use client";
import Image from "next/image";
import * as S from "./styles";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => setOffset(latest * 0.2));
  }, [scrollY]);

  return (
    <S.HeroContainer>
      <S.BackgroundImage
        as={motion.div}
        style={{ backgroundPosition: `center ${offset}px` }}
      />

      <S.TextContent>
        <h2>Welcome to my Portfolio</h2>
        <h1>Hello! I am Volnei</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <S.ConnectButton>
          Let's Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </S.ConnectButton>
      </S.TextContent>
      <S.AstronautContainer>
        <Image
          src="/astronaut.png"
          alt="Astronaut"
          width={500}
          height={500}
          priority
        />
      </S.AstronautContainer>
    </S.HeroContainer>
  );
}
