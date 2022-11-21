import { useEffect, useState } from 'react';
import Login from '../../Components/Login';
import OnboardingStart from '../../Components/OnboardingStart';
import SignUp from '../../Components/SignUp';
import styles from './OnBoarding.module.css';

const OnBoarding = () => {
	const [screen, setScreen] = useState(0);
	const [component, setComponent] = useState(<OnboardingStart />);

	useEffect(() => {
		switch (screen) {
			case 0:
				setComponent(<OnboardingStart setscreen={setScreen} />);
				break;
			case 1:
				setComponent(<Login setscreen={setScreen} />);
				break;
			case 2:
				setComponent(<SignUp setscreen={setScreen} />);
				break;
			default:
				setComponent(<OnboardingStart setscreen={setScreen} />);
		}
	}, [screen]);
	return <>{component}</>;
};

export default OnBoarding;
