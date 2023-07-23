import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className="contact">
			<h1>Contact</h1>
			<button onClick={handleGoBack}>Go Back</button>
		</div>
	);
};

export default Contact;
