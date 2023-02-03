import React from "react";
import { Link } from "react-router-dom";
import ExerciseDetail from "./ExerciseDetail";
import { FaChalkboardTeacher } from "react-icons/fa"
import { FaHandHoldingHeart } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
import { BiArea } from "react-icons/bi"
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const customers = document.getElementById('satCustomers');
    const trainings = document.getElementById('aerTrainings');
    function mediaEditor(){
        if(window.screen.width < 500){
          customers.innerHTML = "Customers &#8594;"
          trainings.innerHTML = "Aerobic tr. &#8594;"
        }
        }
        mediaEditor();
  }, []);
  return (
    <div className="HomeWrapper">
      <div className="Home">
        <div className="Hero-Text">
          <h4>Monster Gym Club</h4>
          <h1>
            Eat, Train <br></br> & Repeat
          </h1>
          <p>Check out the most effective excercises personalized to you.</p>
          {/* <button>Explore Exercises</button> */}
          <Link
            style={{ textDecoration: "none" }}
            to="/exercises"
            element={<ExerciseDetail />}
          >
            <button>Explore Exercises</button>
          </Link>
        </div>
        <div className="HeroBg"></div>
      </div>
      <div className="SeparatorWrapper">
        <div className="separatorItem">
          <div className="sep-left">
            <h2 className="sep-upper"><span className="sep-icon"><FaChalkboardTeacher /></span> 23 +</h2>
            <h3 className="sep-lower">Trainers &#8594;</h3>
          </div>
          <div className="sep-right">
            <div className="v-line"></div>
          </div>
        </div>
        <div className="separatorItem">
          <div className="sep-left">
            <h2 className="sep-upper"><span className="sep-icon"><FaHandHoldingHeart /></span> 1200 +</h2>
            <h3 id="satCustomers" className="sep-lower">Satisfied customers &#8594;</h3>
          </div>
          <div className="sep-right">
            <div className="v-line"></div>
          </div>
        </div>
        <div className="separatorItem">
          <div className="sep-left">
            <h2 className="sep-upper"><span className="sep-icon sl"><SlDiamond /></span> 19 +</h2>
            <h3 id="aerTrainings" className="sep-lower">Aerobic trainings &#8594;</h3>
          </div>
          <div className="sep-right">
            <div className="v-line"></div>
          </div>
        </div>
      </div>
      <div className="Introduction">
        <div className="leftIntroduction">
          <div className="h-line"></div>
          <h1>Welcome to Monster Gym</h1>
          <p className="IntroductionText">Over 10 years of experience with 6 Monster Gym centers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam augue tellus, vel luctus augue dapibus in. Praesent eleifend viverra nunc ac eleifend. Proin molestie odio in imperdiet convallis. Proin in volutpat est. Sed ultricies vitae justo quis aliquam. Nulla pulvinar neque ultricies ante faucibus suscipit. Sed id lobortis ligula.</p>
          <p className="IntroductionText">Train better and be the best version of yourself!</p>
          <div className="IntroductionBox">
            <div className="circleBackground"><span className="box-icon"><BiArea /></span></div>
            <div className="BoxText">
              <h2>Surface</h2>
              <p>Total surface of over 12.000 m/sq.</p>
            </div>
            </div>
            <div className="IntroductionBox">
            <div className="circleBackground"><span className="box-icon"><BiArea /></span></div>
            <div className="BoxText">
              <h2>Surface</h2>
              <p>Total surface of over 12.000 m/sq.</p>
            </div>
            </div> 
            <div className="IntroductionBox">
            <div className="circleBackground"><span className="box-icon"><BiArea /></span></div>
            <div className="BoxText">
              <h2>Surface</h2>
              <p>Total surface of over 12.000 m/sq.</p>
            </div>
            </div>
            <button>Contact Us</button>      
        </div>
        <div className="rightIntroduction">
          <div className="introduction-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
