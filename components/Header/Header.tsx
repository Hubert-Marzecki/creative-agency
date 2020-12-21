import styled from "@emotion/styled";
import Link from "next/link";
import logo from '../../public/smallrose.png';
import { useRouter } from 'next/router'
export function Header(props: {bgColor: string}) : JSX.Element {
  const router = useRouter()
  const HeaderStyle = styled.header`
  background-color: ${props.bgColor};

a{
}
`


    return (
        <HeaderStyle className="text-gray-200 pt-6">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
          <a className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-0 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
              <Link href="/">
            <img src={logo} alt="" className="cursor-pointer h-20"/>
            </Link>
          </a>

            {/* <span className="ml-3 text-xl">tailblocks</span> */}
          <nav className="md:ml-auto flex flex-wrap items-center font-bold text-base justify-center ">
            <Link href="/">
            <a className={
              router.pathname === "/" ? 
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ...":
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 ..." 
              }>Home</a>
            </Link>
            <Link href="/projekty">
            <a className={
              router.pathname === "/projekty" ? 
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ...":
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 ..." 
              }>Projekty</a>
            </Link>
            <Link href="/omnie">
            <a   className={
              router.pathname === "/omnie" ? 
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ...":
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 ..." 
              }>O mnie</a>
            </Link>
            <Link href="/workflow">
            <a 
            
            className={
              router.pathname === "/workflow" ? 
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ...":
              "mr-5 sm:mr-10 hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 ..." 
              }>
                Jak pracuje</a>
            </Link>
          </nav>
          <Link href="/kontakt">
          <button className="cursor-pointer inline-flex text-white items-center bg-yellow-600 border-0 py-2 pb-3 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-6 md:mt-0 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">Kontakt
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
        </div>
      </HeaderStyle>
    )
}
