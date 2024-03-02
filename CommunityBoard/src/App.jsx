import './App.css'
import Stars from './Components/Stars'
import highline from './assets/highline.jpg'
import empire from './assets/nyc.png'
import high from'./assets/starhigh.jpg'
import vanderbuilt from './assets/vanderbuilt.png'
import star from './assets/star.jpg'
import park from './assets/parkstargazing.jpg'
import pic7 from './assets/pic7.jpg'
import pic8 from './assets/pic8.png'
import pic9 from './assets/pic9.jpg'
import pic10 from './assets/pic10.jpg'


const App=() =>{
  const starEvents =
    [
      {
        image: high,
        location: 'The Highline',
        time: '9pm - 11pm'
      },
      {
        image: vanderbuilt,
        location: 'Summit One Vanderbuilt',
        time: '10pm - 12am'
      },
      {
        image: empire,
        location: 'Empire State',
        time: '10pm - 1am'
      },
      {
        image: highline,
        location: 'Fort Green',
        time: '9pm - 12am'
      },
      {
        image: star,
        location: 'Great Kills Park',
        time: '11pm - 1am'
      },
      {
        image: park,
        location: 'Floyd Bennet Field',
        time: '10pm - 2am'
      },
      {
        image: pic7,
        location: 'Van Cortlandt Nature Center',
        time: '8pm - 12am'
      },
      {
        image: pic8,
        location: 'Brooklyn Bridge Park',
        time: '10pm - 3am'
      },
      {
        image: pic9,
        location: 'Gantry Plaza State Park',
        time: '11pm - 1am'
      },
      {
        image: pic10,
        location: 'Rockefellar State Park Preserve',
        time: '10pm - 12am'
      }
    ]
  
  return (
    
    <div className="App">
      <h1>Find Stargazing Events In NYC </h1>
      {
      starEvents.map((event, i) =>{
        return(
          <Stars
          image={event.image}
          key={i}
          location={event.location}
          time={event.time}
          />
        )
      })
    }
    {/* <Stars image="./assets/nyc.png" location="High Line" time="10pm-12am" />
    //   <Stars image="highline" location="Empire State" time="11pm -1am"/>
    //   <Stars image="highline" location="Empire State" time="11pm -1am"/>
    //   <Stars image="highline" location="Empire State" time="11pm -1am"/>
    //   <Stars image="highline" location="Empire State" time="11pm -1am"/>
    //   <Stars image="highline" location="Empire State" time="11pm -1am"/> */}

     </div>
  )
}
export default App;