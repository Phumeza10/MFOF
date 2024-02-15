import React from "react";
import "../styles/about.css";
import pic3 from "../components/assets/pic3.jpg";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			<section className="about container" id="about">
				<div className="content">
					<div className="title">
						<span>About us</span>
					</div>
					<div className="about-details">
						<div className="image">
							<img src={pic3} alt="" id="logo" />
						</div>
						<div className="right">
							<div className="topic">
								Miss Face of Orange Farm 
							</div>
							<br />
							<br />
							<p> Miss face of orange farm specializes with young women and men who are talented and want to fulfill their modelling career. Miss face of orange Farm was founded in 2021 the whole objective is to help the youth discover their natural gift and talent so as to develop it. In the MFOF we train the young people to discover their self to understand personal life purpose and prepare the young woman for them to enter the miss south africa one day.

								
								
								
							
							
								
							
								
							
	
							</p>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default About;
