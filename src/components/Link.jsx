/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import {useEffect} from 'react';
import {useRef} from 'react';

const Link = ({icon}) => {
	const elm = useRef(null);
	const mousemove = e => {
		const target = elm.current;
		const centerX = target.offsetLeft + target.offsetWidth / 2;
		const centerY = target.offsetTop + target.offsetHeight / 2;
		const diffX = e.clientX - centerX;
		const diffY = e.clientY - centerY;
		const tX = diffX / 5;
		const tY = diffY / 5;
		elm.current.style.transform = `scale(1.1) translate(${tX}px, ${tY}px)`;
	};
	const mouseleave = () => {
		if (elm.current)
			elm.current.style.transform = '';
	};
	return (
		<div
			ref={elm}
			onMouseMove={mousemove}
			onMouseLeave={mouseleave}
			css={css`
				width: 60px;
				height: 60px;
				margin: 10px;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0px 5px 10px 5px #00000020;
				transition: .4s ease;
				&:hover {
					transition: .2s ease;
					transform: scale(1.1);
					box-shadow: 0px 10px 20px 10px #00000020;
					background: #ffffff20;
				}
				@media (min-width: 768px) {
					width: 100px;
					height: 100px;
					margin: 0 20px;	
				}
			`}
		>
			<img
				css={css`
					width: 60%;
				`}
				src={icon}
			/>
		</div>
	);
};

export default Link;