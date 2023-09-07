
function PaymentHelp() {
    return ( 
        <>
        <div className='text-danger f-2' style={{textAlign : 'center', marginTop : '100px'}}>
            <h3 style={{fontSize : 50}}>Payment Help</h3>
        </div>
        <div className='container-fluid d-flex' style={{marginTop:"100px", marginBottom:"265px"}}>

                <div className="col-md-8 col-lg-9" style={{paddingLeft:"50px", display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <h4 style={{display: "inline-block"}}>
                        <span className='text'>
We accept all VISA and MasterCard, both Indian and International. Click on the "BUY" button and select "Pay By Credit Card" on the following page. To use American Express Cards please choose the "Pay by Net banking" option. We also accept general mode of payments.

We also accept general mode of payments.
                        </span>
                    </h4>
                    
                </div>
        </div>
        </>
    );
}

export default PaymentHelp;