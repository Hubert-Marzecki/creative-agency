import { futimes } from "fs/promises";
import EmailForm from "../components/Form/EmailForm";
import {Header} from "../components/Header/Header";
import React, { useState } from "react";

export default function Kontakt () : JSX.Element  {


    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                name: "",
                email: "",
                message: "",
            });
        } else {
            setStatus(s => { return (
                {...s,
                info: { error: true, msg: msg },
            }
            )});
        }
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        });
        const text = await res.text();
        handleResponse(res.status, text);
    };


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
        {/*<EmailForm />*/}

            <div className="pb-40">
                <h1 className="font-bold text-5xl text-black text-center  ">
                    Kontakt
                </h1>
                <section className={`flex flex-wrap  px-10 container mx-auto justify-center`}>


                    <div className="w-screen sm:w-1/2 sm:pr-20 pb-20 sm:pl-20 ">
                        <form
                            className=" flex flex-row justify-center flex-wrap w-full mt-10"
                            onSubmit={handleOnSubmit}
                        >
                            <div className="flex flex-col mr-auto mt-4 w-full ">
                                <input
                                    id="name"
                                    className="px-2  border-b  w-full py-3 rounded  text-gray-700"
                                    type="text"
                                    onChange={handleOnChange}
                                    required
                                />
                                <label className="label mt-2 text-white " htmlFor="name">
                                    Imię
                                </label>
                            </div>
                            <div className="flex flex-col mr-auto mt-4 w-full ">
                                <input
                                    id="email"
                                    className="px-2 border-b  w-full py-3 rounded  text-gray-700"
                                    type="email"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.email}
                                />
                                <label className="label mt-2 text-white " htmlFor="email">
                                    E-mail
                                </label>
                            </div>
                            <div className="w-full flex flex-col mt-10">
                <textarea
                    className=" text-gray-700 w-full border rounded  p-2 h-40 focus:outline-none focus:border-gray-500"
                    id="message"
                    onChange={handleOnChange}
                    value={inputs.message}
                    required
                />
                                <label className="mt-2 text-white " htmlFor="message">
                                    Wiadomość
                                </label>
                            </div>
                            <div className="">
                                <button
                                    className=" mr-1 bg-yellow-600 hover:bg-yellow-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest"
                                    type="submit"
                                    value="Wyślij"
                                    disabled={status.submitting}
                                >
                                    {" "}
                                    {!status.submitting
                                        ? !status.submitted
                                            ? "Wyślij"
                                            : "Wysłano"
                                        : "Wysyłanie..."}{" "}
                                </button>
                            </div>
                        </form>
                        {status.info.error && (
                            <div className="error">Error: {status.info.msg}</div>
                        )}
                        {!status.info.error && status.info.msg && (
                            <div className="success">{status.info.msg}</div>
                        )}

                    </div>
                </section>
            </div>
        </div>

            </>
    )
}