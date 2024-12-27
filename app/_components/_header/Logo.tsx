import React from "react";
import Image from "next/image";
import { ILogoProps } from "@/app/_types/logo";
import "./logo.css";

export default function Logo({ src, alt }: ILogoProps) {
  return <Image src={src} alt={alt} height={100} width={100} />;
}
