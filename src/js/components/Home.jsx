import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center bg-dark">

			<h1>Simple Counter</h1>

			<div className="row">
				<div className="col">
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="col">
					{props.digSix}
				</div>
				<div className="col">
					{props.digFive}
				</div>
				<div className="col">
					{props.digFour}
				</div>
				<div className="col">
					{props.digThree}
				</div>
				<div className="col">
					{props.digTwo}
				</div>
				<div className="col">
					{props.digOne}
				</div>
			
			</div>
		</div>


	);
};

export default Home;