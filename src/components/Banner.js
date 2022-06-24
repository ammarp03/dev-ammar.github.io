import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<span className="tagline">Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm M.Ammar`}{" "}
										<span className="txt-rotate">
											<Typewriter
                      
												className="wrap"
												options={{
													autoStart: true,
													loop: true,
													delay: 60,
													strings: [
														"Frontend Developer😎",
														"Backend Developer🚓",

														"React Developer🛰",

														"Wordpress Developer🔥",
													],
												}}
											/>
										</span>
									</h1>
									<p className="banner-paragraph">
										Full Stack Developer (Front-end components) by using HTML ,
										CSS ,JavaScript , React JavaScript and Docker and as a
										(Back-end component) by using SQL ,PYTHON , DJANGO ,FLASK
										and Building RESTful APIs
									</p>
									<button onClick={() => console.log("connect")}>
										Let’s Connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}
								>
									<img src={headerImg} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
