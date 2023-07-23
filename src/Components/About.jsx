import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className="about">
			<h1>About</h1>
			<button onClick={handleGoBack}>Go Back</button>
		</div>
	);
};

export default About;
