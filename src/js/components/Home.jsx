import React, {useEffect, useState} from "react";

import SecondsCounter from "../secondscounter";


//create your first component
const Home = () => {

	let [seconds, setSeconds] = useState(0)
	useEffect(()=> {
		const intervalo = setInterval(()=> {
			setSeconds(seconds++) 
		}, 1000)
		return () => clearInterval(intervalo)
	}, []);

	return (
		<div className="text-center">
            <SecondsCounter seconds = {seconds} />


		</div>
	);
};

export default Home;