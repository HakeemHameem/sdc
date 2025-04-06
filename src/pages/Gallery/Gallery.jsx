import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import Ellipse from "../../images/Ellipse";
import galleryPoster from "../../images/gallery.svg";
import Masonry, { MasonryBox } from "../../Layout/Masonry/Masonry";
import images from "../../utils/gallery";
import "./gallery.css";

const Gallery = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);

	return (
		<main className="gallery">
			<section className="gallery-hero">
				<Dots className="gallery-hero-dots" data-index="1" />
				<Dots className="gallery-hero-dots" data-index="2" />
				<Ellipse className="gallery-hero-ellipse" />
				<div className="gallery-hero-head">
					<span>Gallery</span>
				</div>
				<div className="team-hero-body">
					<img src={galleryPoster} alt="Gallery Poster" />
				</div>
			</section>
			<section className="gallery-body">
				<Masonry lg={4} md={3} sm={2}>
					{images.map((image, index) => (
						<MasonryBox key={index}>
							<div className="gallery-body-img">
								<img src={image} alt={image} />
							</div>
						</MasonryBox>
					))}
				</Masonry>
			</section>
		</main>
	);
};

export default Gallery;
