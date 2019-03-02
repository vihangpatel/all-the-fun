import React, { Fragment } from "react"
import Header from "../header"
import Checkbox from "../logos/checkbox"
import tickets from "../data/tickets"

const data = tickets.tickets
const priceData = tickets.tickets

const Deliverables = props => (
	<div className="deliverables-table">
		<div className="header">Deliverables</div>

		{props.data.deliverables.map(deliverable => (
			<Fragment>
				{deliverable.checkbox && (
					<div className="item">
						<span>{deliverable.text}</span>
						<span>
							<Checkbox />
						</span>
					</div>
				)}
				{!deliverable.checkbox && (
					<div className="undeliverable-item" key={deliverable.text}>
						<span>{deliverable.text}</span>
					</div>
				)}
			</Fragment>
		))}
	</div>
)

const Price = props => (
	<div className="deliverables-table">
		<div className="header price">Price</div>

		{props.data.prices.map(deliverable => (
			<div className="item" key={deliverable.text}>
				<span>{deliverable.text}</span>
				<span>{deliverable.value}</span>
			</div>
		))}
	</div>
)

const BookButton = ({ url }) => (
	<div className="ticket-book-button" target="_blank" onClick={() => (location.href = url)}>
		BOOK TICKETS
	</div>
)

export default () => (
	<Fragment>
		<Header />
		<div className="tickets-container">REACT INDIA 2019 TICKETS EXPLAINED </div>
		<div className="container">
			<div className="row">
			{tickets.tickets.map(ticket => (
				
				<div className="col-12 col-sm-6 col-md-4">
					<div className="ticket-type-card">
						<div className="ticket-header">{ticket.type}</div>
						<Deliverables data={ticket} />
						<Price data={ticket} />
						<BookButton url={ticket.buyticketUrl} />
					</div>
				</div>
			))}
			</div>
		</div>
	</Fragment>
)
