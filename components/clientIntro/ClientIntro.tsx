import { ClientIntroModel } from "../../Model";

export default function ClientIntro(props: ClientIntroModel) {

    function isLinking () : JSX.Element | null {

        if(props.isUrl) {
            return (
                <a className="cursor-pointer text-yellow-500 inline-flex items-center"
                href={props.url}
                >
                  Zobacz stonę
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
            )
        } else {
            return null
        }
      
       
    }

    return (
        <section className="text-gray-100 body-font ">
        <div className="container  sm:px-20 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto w-3/4">
 
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-base sm:pr-8 sm:py-8">
            
                <div className="flex flex-col">
                  <h2 className="font-medium title-font mt-4 text-gray-100 text-lg font-bold">
                    Branża
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-1"></div>
                  <p className="text-base text-gray-400 leading-relaxed ">
                  {props.market}
                  </p>

                  <h2 className="font-medium title-font mt-4 text-gray-100 text-lg font-bold">
                    Zakres działań
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  <p className="text-base text-gray-400 leading-relaxed ">
                    {props.taskOne}
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed ">
                  {props.taskTwo}
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed ">
                  {props.taskThree}
                  </p>
           
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  {props.text}
                </p>
                
                {isLinking()}

        
                

              </div>
            </div>
          </div>
        </div>
      </section>
    )
}