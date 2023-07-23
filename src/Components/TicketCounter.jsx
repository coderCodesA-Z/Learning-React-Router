import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketCounter = () => {
	const [counter, setCounter] = useState(10);
	const navigate = useNavigate();

	const handleCounterExit = () => {
		navigate("/");
	};

	return (
		<div className="ticket-counter">
			<div className="ticket-counter-content">
				<h1>Tickets Left : {counter}</h1>
				<button
					onClick={() =>
						setCounter((counter) => (counter === 0 ? 0 : counter - 1))
					}
				>
					Buy Ticket
				</button>
				<button onClick={() => setCounter(10)}>Restore Tickets</button>
				<button onClick={handleCounterExit}>Exit Ticket Counter</button>
			</div>
		</div>
	);
};

export default TicketCounter;
