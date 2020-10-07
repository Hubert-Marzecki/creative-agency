import styled from "@emotion/styled";
import Link from "next/link";
import logo from '../../public/my-logo-small.png';

export function Header() : JSX.Element {
    return (
        <header className="text-gray-500 body-font bg-black pt-6">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <img src={logo} alt=""/>
            {/* <span className="ml-3 text-xl">tailblocks</span> */}
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <Link href="/">
            <a className="mr-5 hover:text-gray-300 cursor-pointer">Home</a>
            </Link>
            <Link href="/">
            <a className="mr-5 hover:text-gray-300 cursor-pointer">Projekty</a>
            </Link>
            <Link href="/omnie">
            <a className="mr-5 hover:text-gray-300 cursor-pointer">O mnie</a>
            </Link>
            <Link href="/workflow">
            <a className="mr-5 hover:text-gray-300 cursor-pointer">Jak pracuje</a>
            </Link>
          </nav>
          <Link href="/">
          <button className="inline-flex text-white items-center bg-yellow-600 border-0 py-2 pb-3 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0">Kontakt
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
        </div>
      </header>
    )
}

