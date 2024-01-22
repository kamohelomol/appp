import React, {useState} from "react";
import { Link } from "react-router-dom";
import '.././App.css';
import { useNavigate } from "react-router-dom"
import './auth.css';


function Auth () {
    const navigate = useNavigate();

    const [ loaded, loadedtag] = useState('true');

    const handleLoad = () => {
        if(loaded){
            (navigate('./loaded'));
        } 

    }



    const [tagData, setTagData] = useState ({

                 busTagNumber: '',
                 cardNumber: '',
                expirationDate: '',
                cvv: '',  
                amountToLoad: '',
        
           });

           const handleChange = (e) => {
        
                     const { name, value } = e.target;
                    setTagData({ ...tagData, [name]: value});
            
                 };



                 const handleBuy = (e) => {
                         e.preventDefault();
                
                         console.log('Tag purchased with data:' , tagData);
                        
                         setTagData({
                             busTagNumber:'',
                           cardNumber:'',
                          expirationDate:'',
                            cvv:'',
                            amountToLoad: '',
                         });
                     };


document.addEventListener('DOMContentLoaded', function (){
    const loadButton = document.getElementsByClassName('loadButton');

    loadButton.addEventListener('click', function () {
        window.location.href= 'loaded.js';
    });

});


                     return(
                    <body1> 

                        <div class="tag-container">
                            <hheader> 
                                <h1> ReaVaya</h1> 
                                 </hheader> 
                            <h4> Load Bus Tag </h4>
           
                        <div class="app">
                            <div class="left">
                        <div class="maint">
                  Top up your Rea Vaya bus tag in less than 5 minutes, easy! 
                </div>
                <div class='subt'>
                  Bypass lengthy lines and top up your bus tag hassle free. 
                  Try our service and stay up to date with all information partaining to your daily commute
                </div> 

                            </div>

                            <div class="right">
                                 
                            <form onSubmit={handleBuy}> 
                                <input type="password" placeholder="Bus Card Number "> 
                                </input>

                                <input type="date" placeholder="Exp Date">
                                </input >

                                <input type="password" placeholder="Bank Acc Number">
                                </input>

                                <input type="password" placeholder="Cvv">
                                </input>

                                <input type="number" placeholder="Amount to load">
                                </input>


                            </form>

                            </div>

                         </div>

                         <div class="load-container"> 
                            <button type='submit' onClick={handleLoad}> Load Tag  </button> 
                        </div>

                        </div>



                    </body1>
                        

)


                    


















    const  Auth  = () => { 
        
        <body>

        <div class='maindiv'>
            <header>
            <h3>BusTag Connect 🎫</h3>
             </header>
    
    <div class='userdetails'>
                 Hey man
             </div>
    
         </div>
    
     </body>
}

 }

        {/* <button className="loadButton">
                         Load Tag 
                           </button> */}
{/* <a href="loaded"> load </a> */}


//     const [tagData, setTagData] = useState ({

//         busTagNumber: '',
//         cardNumber: '',
//         expirationDate: '',
//         cvv: '',  

//     });


//     const handleChange = (e) => {
        
//         const { name, value } = e.target;
//         setTagData({ ...tagData, [name]: value});

//     };


    // const handleBuy = (e) => {
    //     e.preventDefault();

    //     console.log('Tag purchased with data:' , tagData);
        
    //     setTagData({
    //         busTagNumber:'',
    //         cardNumber:'',
    //         expirationDate:'',
    //         cvv:'',
    //     });
    // };




    // return(


//         <div className="tag-container">
//         <h2> Load Bus Tag </h2>
// {
//         <form onSubmit={handleBuy}>

//            <div>
//                 Bus Tag Number: 
//                 <input type="text" name="busTagNumber"  value={tagData.busTagNumber} onChange={handleChange}> </input>
//             </div>

//             <div> 
//                 Card Number: 
//                 <input type="text" name="cardNumber"  value={tagData.cardNumberNumber} onChange={handleChange}> </input>
//             </div>

//            <div>
//                 Expiration Date: 
//                 <input type="text" name="expirationDate"  value={tagData.expirationDate} onChange={handleChange}> </input>
//             </div>

//             <div> </div>
//                 Cvv: 
//                 <input type="text" name="cvv"  value={tagData.cvv} onChange={handleChange}> </input>
            


//             <button type="submitt">
//                 Load 
//             </button>


//         </form> }
//     </div>
// );
// };












     

 
export default Auth   ; 