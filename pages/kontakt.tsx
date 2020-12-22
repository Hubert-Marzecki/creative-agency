import { futimes } from "fs/promises";
import EmailForm from "../components/Form/EmailForm";
import {Header} from "../components/Header/Header";
import React from "react";

export default function Kontakt () : JSX.Element  {
    return (
        <>
            <Header bgColor={"black"} />
        <div className="bg-black py-10">
             <div className="text-white text-center text-3xl font-bold">
            <p>Hubert Marzecki
                </p >
           <p className="p-2">509 007 902
               </p> 
        </div>
        <EmailForm />


        </div>
            </>
    )
}