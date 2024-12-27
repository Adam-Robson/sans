import { IBackgroundProps } from "@/app/_types/background";
import Image from "next/image";
import "./background.css";

export default function Background({
  src,
  alt,
  overlay = "transparent",
  children,
}: IBackgroundProps) {
  return (
    <div className="background">
      <Image src={src} alt={alt} height={1000} width={1000} />
      {overlay && (
        <div className="overlay" style={{ backgroundColor: overlay }} />
      )}
      {children}
    </div>
  );
}
