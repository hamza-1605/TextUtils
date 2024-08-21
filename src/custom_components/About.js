import React, {useState} from 'react'


export default function About() {

    const [theme, setTheme] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnValue, setBtnValue] = useState('Enable Dark Mode') ;

    const toggleStyle = () => {
        if(theme.color === 'white'){
            setTheme({
                color: 'black' ,
                backgroundColor: 'white' ,
            })
            setBtnValue('Enable Dark Mode')
        }
        else{
            setTheme({
                color: 'white' ,
                backgroundColor: 'black',
                border: '1px solid white'  
            })
            setBtnValue('Disable Dark Mode')
        }
    }
  return (
    <>
        <div className="container" style={theme}>

            <div className="accordion accordion-flush my-3 py-3 style={theme}" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div style={theme} id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div style={theme} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div style={theme} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div style={theme} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div style={theme} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div style={theme} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>

            <button onClick={toggleStyle} type='button' className='btn btn-primary my-3'>{btnValue}</button>
        </div>
    </>
  )
}
