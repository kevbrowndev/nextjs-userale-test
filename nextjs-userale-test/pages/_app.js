import '../styles/globals.css'
import dynamic from "next/dynamic";

const UserAle = dynamic(() => import("./UserAle"), { ssr: false });




export default function MyApp({ Component, pageProps }) {
  return <>
    <UserAle />
    <Component {...pageProps} />
  </>
}

