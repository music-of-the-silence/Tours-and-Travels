import React, { useEffect } from 'react';
import './main.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpeg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpeg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import img10 from '../../Assets/img10.jpg';
import img11 from '../../Assets/img11.jpg';
import img12 from '../../Assets/img12.jpg';
import img13 from '../../Assets/img13.jpg';
import img14 from '../../Assets/img14.jpg';
import img15 from '../../Assets/img15.jpg';
import img16 from '../../Assets/img16.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Data = [
  {
      id: 1,
      imgSrc: img,
      destTittle: "Kyoto Tour",
      location: "Kyoto",
      grade:"RELIGION MEDITATION ",
      fees: "35,000/-",
      description: "It’s a beautiful destination that you should definitely try to explore next year. Seems like a picture postcard, and comes complemented with gardens, Buddhist temples, Shinto shrines, and charming traditional wooden houses. In short, Kyoto presents a captivating sight. The location takes on a surreal charm during the evening, making it an ideal destination for delightful long walks if you appreciate such leisurely strolls."
  },
  {
      id: 2,
      imgSrc: img2,
      destTittle: "Florence Tour",
      location: "Florence",
      grade:"HISTORY ARCHITECTURE ",
      fees: "45,000/-",
      description: "Florence, the birthplace of the Renaissance, is a treasure trove of art, architecture, and history. Admire masterpieces at the Uffizi Gallery, stroll across the Ponte Vecchio, and be captivated by the stunning Florence Cathedral, a testament to the location's enduring beauty."
  },
  {
      id: 3,
      imgSrc: img3,
      destTittle: "Cape Town Tour",
      location: "Cape Town",
      grade:"NATURE LANDSCAPE ",
      fees: "30,000/-",
      description: "Nestled between the mountains and the sea, Cape Town is a location of unparalleled beauty. Table Mountain provides a breathtaking backdrop, while the vibrant neighborhoods of Bo-Kaap and the Cape of Good Hope offer diverse landscapes and cultural experiences."
  },
  {
      id: 4,
      imgSrc: img4,
      destTittle: "Prague Tour",
      location: "Prague",
      grade:"ROMANTIC ARCHITECTURE ",
      fees: "45,000/-",
      description: "Prague's mediaeval charm, cobblestone streets, and Gothic architecture create a fairytale ambiance. Wander through Old Town Square, marvel at the astronomical clock, and cross the iconic Charles Bridge as you immerse yourself in the romantic allure of this European gem."
  },
  {
      id: 5,
      imgSrc: img5,
      destTittle: "Rio de Janeiro Tour",
      location: "Rio de Janeiro",
      grade:"MOUNTAIN SEA BEACHES ",
      fees: "37,000/-",
      description: "The marvelous location of Rio de Janeiro, with its iconic Christ the Redeemer statue overlooking the location, is a vibrant metropolis set against a backdrop of lush mountains and golden beaches. Explore the lively neighborhoods of Copacabana and Ipanema, and ascend Sugarloaf Mountain for panoramic views."
  },
  {
      id: 6,
      imgSrc: img6,
      destTittle: "Srinagar Tour",
      location: "Srinagar",
      grade:"HEAVEN EARTH ",
      fees: "27,000/-",
      description: "Srinagar in Kashmir is a beauty beyond words, and rightfully justifies its tag, the ‘Heaven on Earth.’ Set in a region located in the northern part of the Indian subcontinent, this place is known for its breathtaking landscapes, stunning natural beauty, and cultural richness."
  },
  {
      id: 7,
      imgSrc: img7,
      destTittle: "Bergen Tour",
      location: "Bergen",
      grade:"FJORDS FIRSTHAND ",
      fees: "47,000/-",
      description: "Bergen in Norway also features in our list due to its breathtaking location amid majestic fjords and mountains. The vibrant wooden houses along the waterfront present a mesmerizing spectacle. Referred to as the ‘Capital of the Fjords’, Bergen lives up to its title, and the reasons behind it become evident once you experience the location firsthand."
  },
  {
      id: 8,
      imgSrc: img8,
      destTittle: "Istanbul Tour",
      location: "Istanbul",
      grade:"TAPESTRY CULTURE ",
      fees: "29,000/-",
      description: "Straddling Europe and Asia, Istanbul has a rich tapestry of history and culture. Admire the grandeur of the Hagia Sophia, explore the Blue Mosque, and wander through the bustling markets of the Grand Bazaar, where East meets West in a mesmerizing fusion."
  },
  {
      id: 9,
      imgSrc: img9,
      destTittle: "Dubrovnik Tour",
      location: "Dubrovnik",
      grade:"HISTORIC ADRIATIC ",
      fees: "39,000/-",
      description: "Dubrovnik, with its mediaeval location walls and shimmering Adriatic Sea, exudes timeless beauty. Walk along the historic location walls, explore the marble-paved streets of the Old Town, and absorb the coastal splendor from Fort Lovrijenac."
  },
  {
      id: 10,
      imgSrc: img10,
      destTittle: "Havana Tour",
      location: "Havana",
      grade:"CULTURE ARCHITECTURE ",
      fees: "40,000/-",
      description: "Havana in Cuba boasts of a remarkable reputation, not only as a globally acclaimed nightlife hotspot and renowned for its iconic cigars, but also for its diverse attractions. Old Havana, adorned with Spanish colonial architecture, features landmarks like the National Capitol Building and Catedral de San Cristóbal. Without a doubt, Havana merits inclusion in your travel plans for 2024."
  },
  {
      id: 11,
      imgSrc: img11,
      destTittle: "Vietnam Tour",
      location: "Vietnam",
      grade:"SEA BEACHS MOUNTAIN ",
      fees: "43,000/-",
      description: "Vietnam is one stunning and naturally blessed Southeast Asian nation that boasts a rich history and culture. From the bustling streets of Hanoi to the serene landscapes of Ha Long Bay, the nation offers a diverse range of experiences. The cost of living is low, and street food is not just a culinary delight but also a budget-friendly option. Explore ancient temples, vibrant markets, and breathtaking landscapes without spending too much! Happy exploration!"
  },
  {
      id: 12,
      imgSrc: img12,
      destTittle: "Sri Lanka Tour",
      location: "Sri Lanka",
      grade:"SEA BEACHS MOUNTAIN ",
      fees: "35,000/-",
      description: "Calling Sri Lanka, the pearl of the Indian Ocean won’t be incorrect! The country is just a short flight away from India. This tropical heaven is waiting to be discovered. With its pristine beaches, lush tea plantations, and ancient ruins, the country offers a perfect amalgam of relaxation and exploration. The cost of accommodation, food, and transportation is quite pocket friendly, making it an ideal destination for budget-conscious travelers. So, get going and don't miss the chance to experience the warmth of Sri Lankan hospitality."
  },
  {
      id: 13,
      imgSrc: img13,
      destTittle: "Mexico Tour",
      location: "Mexico",
      grade:"CULTURE LANDSCAPE ",
      fees: "42,000/-",
      description: "Mexico is so much more than its delicious tacos! The country attracts visitors from across the globe with its vibrant culture and diverse landscapes. This North American beauty is perfect for budget travelers. Explore the historic streets of Mexico location, relax on the beaches of Tulum, or marvel at the ancient Mayan ruins. The cost of living in Mexico is relatively low, and local markets provide a colorful array of affordable goods."
  },
  {
      id: 14,
      imgSrc: img14,
      destTittle: "Thailand Tour",
      location: "Thailand",
      grade:"CULTURE SEA BEACHS ",
      fees: "40,000/-",  
      description: "Also known as the Land of Smiles, Thailand is a Southeast Asian gem that is the perfect pick for budget-conscious travelers. The place is all about bustling markets of Bangkok to the tranquil beaches of Phuket, Thailand offers a diverse range of experiences. The cost of living is reasonable, and street food is not only a culinary delight but also a budget-friendly option. Immerse yourself in the vibrant street life, explore ancient temples, and indulge in the unique blend of Thai flavors without burning a hole in your pocket."
  },
  {
      id: 15,
      imgSrc: img15,
      destTittle: "Cambodia Tour",
      location: "Cambodia",
      grade:"HISTORY NATURE ",
      fees: "48,000/-",
      description: "Another stunning South Asian country, Cambodia is home to the iconic Angkor Wat. The nation is a beautiful blend of history and natural beauty. While the temples of Angkor are a must-visit, Cambodia offers much more, including the vibrant location of Phnom Penh and the idyllic beaches of Sihanoukville. The cost of accommodation and local transportation is quite affordable."
  },
  {
      id: 16,
      imgSrc: img16,
      destTittle: "Dacca Tour",
      location: "Dacca",
      grade:"CULTURE NATURE ",
      fees: "30,000/-",
      description: "Dhaka (or Dacca) is the capital and largest location of Bangladesh. It is the cultural and economic hub of the country. Having a colossal historical background, the old part of the location, known as Old Dhaka or Old Town, is home to a broad range of architectural heritage starting from the vestiges of the Mughal Empire to the British Colonial buildings. Being the centre of the independence movements of Bangladesh, Dhaka also hosts some significant national monuments and structures. There are a number of annual cultural events held in Dhaka like Pohela Falgun, Pohela Baishakh and Ekushe Book Fair which add a unique flavour to the location."
  }
]

const Main = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <section className="main content section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTittle, location, grade, fees, description}) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTittle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTittle}</h4>
                  <span className="continent flex">
                    <IoLocationOutline className='icon' /> {location}
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5><FaIndianRupeeSign className="icon"/>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main