import styled from "@emotion/styled";

export default function Paragraph() {
    return (
        <>
            <StyledParagraph>
                <div className="holder">
                    <h3 className="title">Misja</h3>
                    <p className="text">Studia kierunkowe ukończyłem 3 lata temu na najelpszej placówce gastronomiczno - kosmiczno  - ekologicznej  wpołudniowej zabbabwi. Lubie lampki nocne i kolorowe koty () Lubię wiele rzeczy i rozwijaćsię w otoczeniu geniuszy</p>
                </div>
            <div className="holder">
                <h3 className="title">Umiejętności</h3>
                <p className="text">We want to know all about you and your business, hear about your goals, why you started, what went well and certainly what didn't. Taking your audience feedback and analytics into play, we align everyone on the (new) common goal ... and surpass it.
                </p>
            </div>
                <div className="holder">
                    <h3 className="title">Jak Pracuję</h3>
                    <p className="text">We want to know all about you and your business, hear about your goals, why you started, what went well and certainly what didn't. Taking your audience feedback and analytics into play, we align everyone on the (new) common goal ... and surpass it.
                    </p>
                </div>
                <div className="holder">
                    <h3 className="title">Hobby</h3>
                    <p className="text">We want to know all about you and your business, hear about your goals, why you started, what went well and certainly what didn't. Taking your audience feedback and analytics into play, we align everyone on the (new) common goal ... and surpass it.
                    </p>
                </div>

            </StyledParagraph>

        </>

    )
}

const StyledParagraph = styled.div`
width: 50%;
margin: 0 auto;
text-align: justify;
   @media(max-width: 700px) {
        width: 90vw;
        }

.holder{
margin-top: 4em;
}
  .title{
      font-size: 1.2em;
      font-weight: 600;
  }
  
  .text{
     margin-top: 1em;
     line-height: 1.2em;
     font-style: italic;
     font-weight: 100;
  }
`