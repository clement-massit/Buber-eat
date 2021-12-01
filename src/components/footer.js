import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";
import "./footer.css"

const Footer = () => {
	return (
		<Box>

			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>

					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="/products">Products</FooterLink>
						<FooterLink href="/pricing">Pricing</FooterLink>

					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="/contact">Contact</FooterLink>

					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink>



							<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>

						

							<ul>
								<li>
									<div href="/https://www.facebook.com/lepolycrew">
										<i class="fab fa-facebook-f icon"></i>
									</div>
								</li>
								<li>
									<div href="/https://www.instagram.com/le_polycrew/?hl=fr">
										<i class="fab fa-instagram icon"></i>
									</div>
								</li>
								<li>
									<div href="#">
										<i class="fab fa-twitter icon"></i>
									</div>
								</li>
								<li>
									<div href="#">
										<i class="fab fa-linkedin-in icon"></i>
									</div>
								</li>
								
							</ul>

						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box >
	);
};
export default Footer;
