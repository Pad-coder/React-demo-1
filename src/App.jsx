import React from 'react'
import Card from './Card'
function App() {
  let data=[
    {
      title:"Taj Mahal",
      Description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
      imgurl:"https://media.cntraveler.com/photos/576af69fc06bba921a97a0bc/master/w_960%2Cc_limit/Taj-Mahal-GettyImages-485899645.jpg"
    },
    {
      title:"Raja Ampat Islands",
      Description:"Raja Ampat, or the Four Kings, is an archipelago located off of the northwest tip of Bird's Head Peninsula (on the island of New Guinea), Southwest Papua province, Indonesia. It comprises over 1,500 small islands, cays, and shoals around the four main islands of Misool, Salawati, Batanta, and Waigeo, and the smaller island of Kofiau.",
      imgurl:"https://media.cntraveler.com/photos/576af69b4a3399cb31f9da38/master/w_960%2Cc_limit/Raja-Ampat-GettyImages-497311417.jpg"
    },
    {
      title:"Tanah Lot, Bali",
      Description:"Tanah Lot is in Beraban, Kediri district, Tabanan Regency, approximately 13 kilometers (8 miles) south of Tabanan and 20 kilometres (12 mi) northwest of Denpasar. It sits on a large offshore rock and is only accessible on foot at low tide.",
      imgurl:"https://media.cntraveler.com/photos/576af6954a3399cb31f9da37/master/w_960%2Cc_limit/Tanah-Lot-Temple-GettyImages-528050777.jpg"
    },
    {
      title:"Masada, Israel",
      Description:"Masada is an ancient fortification in southern Israel, situated on top of an isolated rock plateau, akin to a mesa. It is located on the eastern edge of the Judaean Desert, overlooking the Dead Sea 20 km (12 mi) east of Arad. Herod the Great built two palaces for himself on the mountain and fortified Masada between 37 and 31 BCE.",
      imgurl:"https://media.cntraveler.com/photos/576af692c06bba921a97a0b9/master/w_960%2Cc_limit/Masada-ruins-GettyImages-490659527.jpg"
    },
    {
      title:"Isfahan, Iran",
      Description:"Isfahan is a major city in the Central District of Isfahan County, Isfahan province, Iran. It is the capital of the province, the county, and the district. It is located 440 kilometres (270 miles) south of Tehran. The city has a population of approximately 2,220,000, making it the third-most populous city in Iran, after Tehran and Mashhad, and the second-largest metropolitan area.",
      imgurl:"https://media.cntraveler.com/photos/576af6934a3399cb31f9da36/master/w_960%2Cc_limit/Isfahan-GettyImages-569028689.jpg"
    },
    
      {
        title:"Himeji Castle, Japan",
        Description:"Himeji Castle is a hilltop Japanese castle complex situated in Himeji, a city in the Hyōgo Prefecture of Japan. The castle is regarded as the finest surviving example of prototypical Japanese castle architecture, comprising a network of 83 rooms with advanced defensive systems from the feudal period. The castle is frequently known as Hakuro-jō or Shirasagi-jō (White Egret Castle or White Heron Castle) because of its brilliant white exterior and supposed resemblance to a bird taking flight.",
        imgurl:"https://media.cntraveler.com/photos/576af68f558ff1e22af12770/master/w_960%2Cc_limit/Himeji-Castle-GettyImages-140686660.jpg"
      }
  ]
  
  return<>
 
<div className="container">
  <h1 className="my-4">World iconics</h1>
  <div className="row">
  {
    data.map((e,i)=>{
      return <Card
      imgUrl ={e.imgurl}
      description={e.Description}
      title={e.title}
      key={i}
      />
    })
  }
    </div>
   </div>
  </>
}

export default App




