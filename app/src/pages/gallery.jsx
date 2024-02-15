import React from "react";
import "../styles/gallery.css";
import skullpic1 from "../components/assets/skullpic1.jpg";
import FB_IMG_1705376759569 from "../components/assets/ FB_IMG_1705376759569.jpg";
import 5bb55918050940d7a43e68665e25e119 from "../components/assets/5bb55918050940d7a43e68665e25e119.jpg;
import FB_IMG_1707888972177 from "../components/assets/ FB_IMG_1707888972177.jpg";
import FB_IMG_1705526212462 from "../components/assets/FB_IMG_1705526212462.jpg ";
import beanie from "../components/assets/beanie.jpg";
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
										<div className="{pic2 FB_IMG_1705376759569.jpg} alt="" />
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
											<img src={FB_IMG_1707888972177} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>charity</p>
											<p>2022</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic4">
											<img src={FB_IMG_1705526212462} alt="" />
											<p>Miss Face of Orange Farm </p>
											<p>founder </p>
											<p>Phumeza Lukhele </p>
										</div>
									</div>
									
										
											
												
												
											
											
											
									
											
											
										
									</div>
									
										
											
											
											
											
										
									</div>
									
										
											
											
											
											
										
									</div>
									
										
											
											
											
											
										
									</div>
									
										
										
											
											
										
										
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
