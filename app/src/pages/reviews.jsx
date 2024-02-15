import React from "react";
import "../styles/reviews.css";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import z from "../components/assets/z.jpg";
import k from "../components/assets/k.jpg";
import si from "../components/assets/si.jpg";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const Reviews = () => {
	return (
		<div>
			<Navbar />
			<section className="review container" id="review">
				<div className="middle-text">
					<h4>Our Models</h4>
					<h2>Clients Reviews About Our Beauty pageant</h2>
				</div>

				<div className="review-content">
					<div className="box">
						<p>
							I am absolutely thrilled with my beauty pageant experience
							at Miss Face of Orange Farm. The quality of the clothing
							exceeded my expectations and detail in the models designs
							is exceptional.
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={z} alt="" />
							</div>
							<div className="bxx-text">
								<h4>Lorraine Nkonzo</h4>
								<h5>Clothing Vlogger</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<p>
							The Registration process was smooth and my Models arrived
							promptly.The fit was mostly accurate and all
							concerns were quickly addressed. While my overall
							experience was excellenct,a small hiccup prevented
							me from giving a full 5 star,nonetheless I highy
							recommend miss face of orange farm for their fashion-forward styles and
							committmented beauty pageant.
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={k} alt="" />
							</div>
							<div className="bxx-text">
								<h4>Lerato Maseko</h4>
								<h5>Content Creator</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarHalfFill />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<p>
							Absolutely love the fabric used for the models outfits,impeccable
							quality,trendy styles and fantastic service.Can't
							get enough of it we have the most talented and beautiful models.
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={si} alt="" />
							</div>
							<div className="bxx-text">
								<h4>Reatlehile Mantse</h4>
								<h5>Journalist</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
								</div>
							</div>
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

export default Reviews;
