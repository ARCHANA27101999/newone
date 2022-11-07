import React, { useState } from 'react'
import './Loginn.css'
import imageofpaymentoo from './images/Group 92 (1).png'
import page from './images/page.png'
import page2 from './images/Group 243 (1).png'
import page3 from './images/Frame (1).png'
import india from './images/92131_india_icon.png'
import {Carousel} from 'react-bootstrap'










function LOginn() {
  const [Signup, setSignup] = useState(false)
  function sgnup1(){
    setSignup(true)
  }
  return (
    
        <div style={{height:"100%"}} class="container-fluid">

          {/* created a row */}
      
        <div  style={{height:"100%",backgroundColor:"black"}}class="row">
          
          {/* diving row into 2   div*/}

         {/*first div  */}
 
        <div    id="firstrow" class="col-sm-6 bg-dark " >

          {/* image of paymento */}
  
      
       <img   id="imageofpaymento" alt="" src={imageofpaymentoo}></img>

      {/* code of carousel  */}


       < div  id=""style={{textAlign:"center"}}>
       <div id="carosel" style={{ display: 'block',Width: 500, paddingTop:"20px", margin:"auto" }}>
      
      <Carousel  id="carouselparent" controls={false}>
      <Carousel.Item    >
      <img className="d-block w-100" src={page2}  id="imagecarousel"     alt=" One"/>
      </Carousel.Item   >
      <Carousel.Item  >
      <img className="d-block w-100" src={page}  id="imagecarousel"     alt=" One"/>

        </Carousel.Item>
        <Carousel.Item >
          <img  className="d-block w-100" src={page3}    id="imagecarousel"      alt="Two"     />

          
        </Carousel.Item>
      </Carousel>

    </div>

      </div>

{/* end of carousel */}
      
    <centre><p id="id"style={{color:"white",textAlign:"center"}}> Bill Payments made easy !</p></centre>
<p  style={{color:"white",textAlign:"center"}}>Help your customers pay their bills using paymento</p>

<p style={{color:"white",textAlign:"center",paddingTop:"80px"}}>GRIEVANCE <span style={{paddingLeft:"10px"}}>  </span>| <span style={{paddingLeft:"10px"}}>  </span> KYC DOCUMENTS <span style={{paddingLeft:"10px"}}>  </span>| <span style={{paddingLeft:"10px"}}>  </span>TERMS AND CONDITIONS</p>

<p style={{color:"white",textAlign:"center",fontSize:"10px"}}>205/206, Sai Deep, Chembur, Station Road, Mumbai-470001, Maharashtra, India | mail@transprocess.in</p>
       
    </div>
    {/* second row */}


    <div id="secondrow"class="col-sm-6" >
      <div>

      <h1 id="paymentowelcome" style={{paddingTop :"139px",marginLeft:"39px",position:"relative"}} >Welcome to Paymento </h1>
      
      
      





    { Signup === false ?
     <div >
      <p  className="secondrowele"  style={{marginLeft:"53px"}}>Login</p> 
       
     
      <p  class="secondrowele"  style={{marginLeft:"53px",paddingTop :"39px"}} >Phone Number</p>
      
      <div id="indiadiv">
      <input  class="secondrowele" placeholder='+91-' style={{marginLeft:'53px' ,paddingLeft:"35px",width:"450px"}}  ></input>
      <img  id ="indiaicon"alt=""src={india}></img>
      

      </div>
     

      <p  class="secondrowele"  style={{marginLeft:'53px'}}>password</p>
    
      <div id="passwrddiv">
      <input  class="secondrowele"  style={{marginLeft:'53px',width:"450px"}} type="text"></input>
      <i  id="passicon" class='fas'>&#xf06e;</i>
      </div>
      <p id="forgtpasswrd" style={{marginLeft:"390px"}}>forget password</p>


     
      
    </div>
    
    
    
    
    :   
    

<div > 
<p  className="secondrowele"  style={{marginLeft:"53px"}}>Sign Up</p>
     
       <p  class="secondrowele"  style={{marginLeft:"53px",paddingTop :"39px"}} >Select your registeration type</p>
       
       <div id="indiadiv">
       <input  class="secondrowele"  style={{marginLeft:'53px' ,paddingLeft:"35px",width:"450px"}}  ></input>
      
       
 
       </div>
      
 
       <p  class="secondrowele"  style={{marginLeft:'53px'}}>Enter your referral code</p>
     
       <div id="passwrddiv">
       <input  class="secondrowele"  style={{marginLeft:'53px',width:"450px",marginBottom:"20px"}} type="text"></input>
       
       </div>

       
  


 
 
      
       
     </div>
     
     




    

    
    
    
    
    }
   
      <button  class="secondrowele"   style={{marginLeft:'53px',width:"450px",color:"white",background:"black"}} type="submit">Login</button>
         <h6 id="sgnup2" >  Dont you have an account yet!!!  <span onClick={sgnup1} >Signup</span></h6>


      </div>
     







      
    </div>
       
      








    </div>


   


  </div>








    

  )
}

export default LOginn