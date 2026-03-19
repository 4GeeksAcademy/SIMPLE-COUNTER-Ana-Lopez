import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container text-center bg-dark mt-5 p-5 text-white">

			<h1>Simple Counter</h1>

			<div className="row mt-3">
				<div className="col counter-box rounded text-white p-3 m-2">
					<i className="fa-regular fa-clock text-white"></i>
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digSix}
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digFive}
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digFour}
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digThree}
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digTwo}
				</div>
				<div className="col counter-box rounded text-white p-3 m-2">
					{props.digOne}
				</div>
			
			</div>
			<div class="d-grid gap-2">
				<button class="btn btn-success mt-2 reset" type="button" onClick={props.onReset} >Reset</button>
			</div>
		</div>


	);
};

export default Home;