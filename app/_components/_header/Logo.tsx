import React from "react";
import Image from "next/image";
import { ILogoProps } from "@/_types/logo";
import "./logo.css";

export default function Logo({ src, alt }: ILogoProps) {
  return <Image src={src} alt={alt} height={120} width={120} />;
}
