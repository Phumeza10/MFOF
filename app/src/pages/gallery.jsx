import React from "react";
import "../styles/gallery.css";
import skullpic1 from "../components/assets/skullpic1.jpg";
import FB_IMG_1705376759569 from "../components/assets/ FB_IMG_1705376759569.jpg";
import 5bb55918050940d7a43e68665e25e119 from "../components/assets/5bb55918050940d7a43e68665e25e119.jpg;
import rivallry2 from "../components/assets/rivallry2.jpg";
import skullsnake from "../components/assets/skullsnake.jpg";
import findyourpurpose2 from "../components/assets/findyourpurpose2.jpg";
import safaricap from "../components/assets/safaricap.jpg";
import panelcap from "../components/assets/panelcap.jpg";
import beanie from "../components/assets/beanie.jpg";
import beanie2 from "../components/assets/beanie2.jpg";
import beanie3 from "../components/assets/beanie3.jpg";
import hoodies from "../components/assets/hoodies.jpg";
import Footer from "./footer";

import Navbar from "../components/utils/navbar";

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<div className="gallery_main container">
				<div className="gallery">Our Gallery</div>
				<div className="trending">
					<div className="trend_container">
						<div className="left_box">
							<div className="header">
								<div className="heading">
									<h2> Miss Face of Orange Farm Models </h2>
								</div>
							</div>
							<div className="product">
								<div className="grid-container">
									<div className="grid-item">
										<div className="pic1">
											<img src={skullpic1} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>T-shirt</p>
											<p>R100</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="{pic2FB_IMG_1705376759569.jpg} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>Queen</p>
											<p>R2022</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic1">
											<img src={5bb55918050940d7a43e68665e25e119.jpg} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>Charity Queen</p>
											<p>R2022</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic4">
											<img src={charity} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>charity</p>
											<p>2022</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic5">
											<img src={founder} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>founder </p>
											<p>Phumeza Lukhele </p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic6">
											<img
												src={co-founder}
												alt=""
											/>
											<p>Miss Face of Orange Farm </p>
											<p>
												co-founder 
											</p>
											<p>Phindile Maduna</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic7">
											<img src={co-founder} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>co-founder</p>
											<p>Penuel</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic8">
											<img src={sponsor} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>sponsor</p>
											<p>hplogo</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic9">
											<img src={sponsor} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>sponsor </p>
											<p>Adidas</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic10">
											<img src={crown} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>crown</p>
											<p>R90</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic11">
											<img src={logo} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>logo</p>
											<p>MFOF</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic12">
											<img src={hoodies} alt="" />
											<p>Miss Face of Orange Farm</p>
											<p>Black and Orange Hoodies</p>
											<p>R300 each</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Gallery;
