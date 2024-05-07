import React, { useEffect } from 'react';
import './footer.css';
import video from '../../Assets/video.mp4';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'




const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])




  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Solo travel isn’t easy — that’s what makes it so worth doing. It teaches you to be where you are, a skill largely lost in our modern world. When traveling on your own, there’s no past that others know.
            </div>
            <div data-aos="fade-up" className="footerSocial flex">
              <RiTwitterXLine className="icon"/>
              <AiOutlineYoutube className="icon"/>
              <FaInstagram className="icon"/>
              <SlSocialFacebook className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Services
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Agency
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Tourism
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Payment
              </li>

            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Rentcars
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Hostel World
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Trivago
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Trip Advisor
              </li>

            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUITS
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> London
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> California
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Indonesia
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Europe
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" /> Oceania
              </li>

            </div>

          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - NATH 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer