import { futimes } from "fs/promises";
import EmailForm from "../components/Form/EmailForm";

export default function Kontakt () : JSX.Element  {
    return (
        <div className="bg-black py-10">
             <div className="text-white text-center text-3xl font-bold">
            <p>Hubert Marzecki
                </p >
           <p className="p-2">509 007 902
               </p> 
        </div>
        <EmailForm />
       
        </div>
    )
}