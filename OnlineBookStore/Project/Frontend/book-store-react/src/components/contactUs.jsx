function ContactUs() {
    return (
        <>
            <div className='text-danger f-2' style={{textAlign : 'center', marginTop : '70px'}}>
                <h3 style={{fontSize : 50}}>Contact Us</h3>
        </div>
        <div className='container-fluid d-flex' style={{marginTop:"170px", marginLeft:"20px"}}>
                <div className="col-md-4 col-lg-3  d-flex align-items-center justify-content-center" style={{padding: "25px", minHeight: "300px"}} >
                    <img src="https://us.123rf.com/450wm/279photo/279photo1706/279photo170600421/80191064-contact-us-for-company-feed-back-on-stone-office-desk-background-top-view-mock-up.jpg?ver=6" alt='contact_us' style={{height:300, width:500}} />
                </div>  

                <div className="col-md-8 col-lg-9" style={{paddingLeft:"50px"}}>
                    <h5 style={{display: "inline-block"}}>
                        <span >Yashwin Pvt. Ltd., B-1904, ground floor , Hinjewadi road, Hinjewadi, Pune, 411057</span>
                    </h5>
                    <br/>
                    <hr size="5px"></hr>
                    <div style={{display:"inline", marginTop:"20px"}}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        <span style={{fontSize:"20px"}}>&nbsp;&nbsp;&nbsp;yashwinB1904@gmail.com</span>
                        </div>
                        <br/>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span style={{fontSize:"20px"}}>&nbsp;&nbsp;&nbsp;011-41521569, <b>Closed on Sundays and Public Holidays</b></span>
                        </div>
                        <br/>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-clock-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        <span style={{fontSize:"20px"}}>&nbsp;&nbsp;&nbsp;9:00 am to 6:00 pm</span>
                        </div>
                    </div>
                </div>
        </div>
        </>
      );
}

export default ContactUs;