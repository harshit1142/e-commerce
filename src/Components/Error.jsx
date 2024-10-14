/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="p-4 bg-white pt-5">
			<div>
				<div className="text-center">
					<div
						className="position-relative"
						style={{
							height: "500px",
							backgroundImage:
								"url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}>
						<h1 className="position-absolute top-50 start-50 translate-middle text-dark fw-bold">
							404 - Page Not Found !!
						</h1>
					</div>

					<div className="mt-n5">
						<h3 className="fs-2 mb-2 fw-semibold">Looks like you're lost</h3>

						<p className="fw-semibold">
							The page you are looking for is not available!
						</p>

						<Link
							to="/"
							className="btn px-4 py-2 fs-5 bg-success bg-gradient text-white rounded-pill fw-semibold mt-3">
							Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
