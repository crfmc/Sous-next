import { AppProps } from "next/app";

export default function Navigation({ Component, pageProps }: AppProps) {
  

  return (
    <div>
      { props.sticky ? "Sticky Navigation" : "Navigation" }
    </div>
  );
}