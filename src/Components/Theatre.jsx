// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Theatre = () => {
	const navigate = useNavigate();

	const handleCounterEntry = () => {
		navigate("/ticket-counter");
	};
	return (
		<div>
			<button onClick={handleCounterEntry}>
				{/* <Link to="/ticket-counter">Go to Ticket Counter</Link> */}
				Go to Ticket Counter
			</button>
		</div>
	);
};

export default Theatre;
