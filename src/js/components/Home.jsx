import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container text-center bg-dark mt-5 p-5">

			<h1>Simple Counter</h1>

			<div className="row mt-3">
				<div className="col rounded-1 border border-secondary-subtle p-3">
					<i className="fa-regular fa-clock text-white"></i>
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digSix}
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digFive}
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digFour}
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digThree}
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digTwo}
				</div>
				<div className="col rounded-1 border border-secondary-subtle p-3">
					{props.digOne}
				</div>
			
			</div>
		</div>


	);
};

export default Home;