import React from 'react';
import './Cards.css'

export const Cards = () => {

let persons =[

{ firstname : "Iheb" ,
 lastname :"Manai" , 
 address : "Medina Jedida" ,
 image : "iheb.jpeg"
} ,

{ firstname : "Ayoub" ,
 lastname :"Bouguerra" , 
 address : "Medina Jedida" ,
 image : "ayoub.png"

},
{ firstname : "Mohamed Anouar" ,
 lastname :"Grami" , 
 address : "Mdjez El Beb" ,
 image : "ayoub.png"
} , 

{ firstname : "Hakim" ,
 lastname :"Barouni" , 
 address : "Bizerte" ,
 image : "ayoub.png"
}

]




    return (
        <div id="cards">
            
            {
               persons.map (el => (
                <div className="card" style={{width: '18rem'}}>
                <img src={el.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{el.firstname} {el.lastname}</h5>
                  <p className="card-text">{el.address}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>



               ))




            }


    




        </div>
    )
}

export const Paragraphe =() => {

return (

<p>Je suis un paragraphe</p>


)

}

