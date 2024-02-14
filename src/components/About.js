import React from 'react'

export default function About(props) {

    // const[myStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // });
    // const[btnText,setBtnText]= useState("Enable Light Mode");

    // const toggleStyle=()=>{
    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setBtnText("Enable Dark mode");
    //     }else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });
    //         setBtnText("Enable Light mode");
    //     }
    // };
    
    let myStyle={
        backgroundColor: props.mode === 'light'?'white':'rgb(36 74 104)',
        color:props.mode === 'light'?'#042743':'white'
    }
    let styleFromPropsContainer={
        color:props.mode === 'light'?'#042743':'white'
    }

  return (
    <div className="container" style={styleFromPropsContainer}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatable
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
