import { WorkflowStepModel } from "../Model";
import imageOne from '../public/work-1.jpg'
import imageTwo from '../public/work-2.png'
import imageThree from '../public/work-3.jpg'
import imageFour from '../public/work-4.jpg'
import roseClean from  '../public/yellow-rose.png'

import rose from  '../public/yellow-rose-1.png'
import rose2 from  '../public/yellow-rose-2.png'
import rose3 from  '../public/yellow-rose-3.png'
import rose4 from  '../public/yellow-rose-4.png'

export const workflowStep : WorkflowStepModel[] = [
    {
        img:rose4 ,
        text: "",
        title: "POZNAJEMY SIĘ"
    },
    {
        img:rose3 ,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "OMAWIAMY TWOJE CELE"
    },
    {
        img:rose2 ,
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        title: "PODPISUJEMY UMOWĘ NA OKRES PRÓBNY"
    },
    {
        img:rose ,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "OMAWIAMY NA BIERZĄCO POSUNIĘCIA"
    },
    {
        img:roseClean ,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        title: "ANALIZUJEMY OSIĄGNIĘCIA"
    },

]