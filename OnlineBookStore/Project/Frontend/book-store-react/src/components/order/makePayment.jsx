import { useNavigate } from "react-router-dom"
import "./makePayment.css"
import { useEffect, useState } from "react";


function MakePayment() {


    const [count, setCount] = useState(4);
    const navigate = useNavigate();
    useEffect(() => {
        toHome();
    },[])

    const toHome = () => {
        window.setTimeout(() => {
            navigate("/");
        },5000)
    }

    const int = window.setInterval(() => {
        setCount(count -1);
    },1000)
    
   

    return (<>
        <br></br><br></br><br></br><br></br><br></br><br/>
        {/* <div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"centers", height:"500px"}}>
            <div class="card text-bg-success mb-3" style={{maxWidth: "18rem", height:"15rem"}}>
                <div class="card-header">Success</div>
                <div class="card-body">
                    <h5 class="card-title">Your Order Placed Successfully</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        </div> */}

        <center>        <div style={{
            background: "white",
            padding: "60px",
            borderRadius: "4px",
            boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            display: "inline-block",
            margin: "0 auto",
        }}>
            <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "rgb(227 255 222)", margin:"0 auto"}}>
                <i style={{
                    color: "#34aa1c",
                    fontSize: "100px",
                    lineHeight: "200px",
                    marginLeft:"-15px",
                }}>✓</i>
            </div>
            <h1 style={{
                color: "#34aa1c",
                fontFamily: "",
                fontWeight: "900",
                fontSize: "40px",
                marginBottom: "10px",
            }}>Success</h1>
            <p style={{
                color:" #404F5E",
                fontFamily: "sans-serif",
                fontSize:"20px",
                margin: "0",
            }}>Order Placed Successfully. Thank You For Choosing Us.</p>
            <p style={{
                color:" #2356b9",
                fontFamily: "sans-serif",
                fontSize:"20px",
                margin: "0",
            }}>Redirecting To Homepage in {count}</p>
        </div>
        </center>

    </>)
}

export default MakePayment;