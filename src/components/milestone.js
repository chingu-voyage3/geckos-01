import React, { Component } from "react";
import 'bootstrap';
import 'react-bootstrap';


class Milestone extends Component {
	render() {
		return (
			<div id="accordion" role="tablist" aria-multiselectable="true">
				<div class="milestone list-group">
					<div class="milestone-header" role="tab" id="headingOne">
						<a class="mb-0 list-group-item active" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="heading">
							Milestone 1 <span class="down-arrow">&#x25BC;</span>
						</a>
					</div>
					<div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic A</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic B</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic C</a>
						</div>
					</div>
				</div>
				<div class="milestone list-group">
					<div class="milestone-header" role="tab" id="headingTwo">
						<a class="mb-0 list-group-item active" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="heading">
							Milestone 2 <span class="down-arrow">&#x25BC;</span>
						</a>
					</div>
					<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic A</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic B</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic C</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic D</a>
						</div>
					</div>
				</div>
				<div class="milestone list-group">
					<div class="milestone-header" role="tab" id="headingThree">
						<a class="mb-0 list-group-item active" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="heading">
							Milestone 3 <span class="down-arrow">&#x25BC;</span>
						</a>
					</div>
					<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic A</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic B</a>
						</div>
						<div class="milestone-block">
							<a href="#" class="list-group-item list-group-item-action">Topic C</a>
						</div>
					</div>
				</div>
			</div>
		);}
}
export default Milestone;