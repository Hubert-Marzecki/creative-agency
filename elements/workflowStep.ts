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
        text: "Chętnie odpowiem na wszystkie pytania i na pewno wypytam o szczegóły projektu. Chciałbym wiedzieć na co zwrócić szczególną uwagę przy projektowaniu rozwiązań i w jaki sposób będzie przebiegać między nami komunikacja.",
        title: "POZNAJEMY SIĘ"
    },
    {
        img:rose3 ,
        text: "Na tym etapie spisujemy wszyskie założenia współpracy i omawiamy priorytety. Pozwoli nam to szybko ocenić ile zajmie praca przy projekcie i jakiego efektu końcowego oczekujemy.",
        title: "OMAWIAMY TWOJE CELE"
    },
    {
        img:rose2 ,
        text: "Zawsze oferuje, któtkie umowy, które dają klientowi elastyczność na wypadek gdybyśmy się nie dogadali. Czasem obniżam stawkę projektu, dzięki czemu możesz poczuć się bezpieczniej, jeśli jeszcze nie zbudowaliśmy zaufania do siebie.",
        title: "PODPISUJEMY UMOWĘ NA OKRES PRÓBNY"
    },
    {
        img:rose ,
        text: "Staram się być w stałym kontakcie z klientami, dzięki temu praca przebiega szybko, przyjemnie i bez zbędnych nieporozumień . Zachęcam do zadawania pytań na temat pracy jak i bierzącej oceny posunięć.",
        title: "OMAWIAMY NA BIERZĄCO POSUNIĘCIA"
    },
    {
        img:roseClean ,
        text: "Wprowadzamy ewenentualne poprawki do projektu. Zamykając projekt zawsze lubię poświęcić chwilę na analizę współpracy. W ten sposób stale się uczę i polepszam jakość rozwiązań. ",
        title: "ANALIZUJEMY OSIĄGNIĘCIA"
    },

]