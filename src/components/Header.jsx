/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import avatar from '../res/b6pu-xN_L9g.jpg';
import AboutMe from './AboutMe';

const Header = () => {
	return (
		<div
			css={css`
				z-index: 4;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
			`}
		>
			<img
				src={avatar}
				css={css`
					margin: 20px 0;
					width: 150px;
					height: 150px;
					border-radius: 50%;
					box-shadow: 0px 10px 10px #0001;
				`}
			/>
			<div
				css={css`
					font: 12pt Montserrat;
					text-align: center;
					color: white;
					text-shadow: 0px 5px 10px #0003;
					@media (min-width: 768px) {
						font-size: 20pt;
					}
				`}
			>
				Hi, I'm Hicka, and I am
			</div>
			<AboutMe />
		</div>
	)

};
export default Header;