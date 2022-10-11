/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import {useEffect, useRef} from 'react';
import {useState} from 'react';

const AboutMe = () => {
	const 누구야 = [
		'an hobbyist developer',
		'a tetris player',
		'an Office fan',
		'한국어를 배우는',
		'a photographer sometimes',
		'an EDM and K-pop listener',
		'the f*cking lizard king'
	];
	const [selected, setSelected] = useState(0);
	const nextSelected = () => selected + 1 === 누구야.length ? 0 : selected + 1;
	const container1 = useRef(null);
	const container2 = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			if (!container1.current || !container2.current)
				return;
			container1.current.style.transition =
				container2.current.style.transition = 'transform .8s ease';
			container1.current.style.transform = 'translateY(-150%)';
			container2.current.style.transform = 'translateY(0)';
			setTimeout(() => {
				setSelected(nextSelected());
				container1.current.style.transition =
					container2.current.style.transition = '';
				container1.current.style.transform =
					container2.current.style.transform = '';
			}, 850);
		}, 4000);
	}, [selected]);
	return (
		<div
			css={css`
				margin: 10px 0;
				padding: 5px 0;
				font-family: Montserrat;
				font-size: 12pt;
				text-align: center;
				color: white;
				overflow: hidden;
				position: relative;
				width: 100%;
				height: 20px;
				@media (min-width: 320px) {
					font-size: 14pt;
					height: 23px;
				}
				@media (min-width: 768px) {
					font-size: 25pt;
					height: 41px;
				}
		`}
		>
			<div ref={container1}>
				{누구야[selected]}
			</div>

			<div
				ref={container2}
				css={css`
					position: absolute;
					top: 5px;
					width: 100%;
					transform: translateY(150%);
				`}
			>
				{누구야[nextSelected()]}
			</div>
		</div>
	);
};
export default AboutMe;
