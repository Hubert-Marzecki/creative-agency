import styled from "@emotion/styled";
import Link from "next/link";

export function Header(props: {bgColor: string}) : JSX.Element {

    const StyledHeader = styled.header`
        .nav{
          max-width: 100vw;
          display: flex;
          justify-content: flex-end;
          background-color: ${props.bgColor};
        }
        .link {
        display: inline-block;
        padding: 1em;
        margin-left: 1em;
        margin-right: 1em;
        cursor: pointer;
        }
`
    return (

        <StyledHeader>
            <nav className="nav">
                <Link href="/#">
                    <li className="link">
                        Honey
                    </li>
                </Link>
                <Link href="/projekty" >
                    <li className="link">
                        Projekty
                    </li>
                </Link>
                <Link href="/workflow" >
                    <li className="link">
                        WorkFlow
                    </li>
                </Link>
                <Link href="/omnie" >
                    <li className="link">
                       O mnie
                    </li>
                </Link>
                <Link href="" >
                    <li className="link">
                       Kontakt
                    </li>
                </Link>
            </nav>
        </StyledHeader>

    )

}

