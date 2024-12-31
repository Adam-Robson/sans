import localFont from "next/font/local";

const inconsolata = localFont({
  src: "./Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf",
  variable: "--inconsolata",
  display: "swap",
});

const sourceCode = localFont({
  src: "./Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf",
  variable: "--source-code",
  display: "swap",
});

export { inconsolata, sourceCode };
