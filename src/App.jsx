/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from 'react';
import {jsx, css} from '@emotion/react';
import Header from './components/Header';
import BetterCaulSaulxD from './res/goodman.mp4';
import Link from './components/Link';
import GitHub from './res/github.png';
import Twitter from './res/twitter.png';
import Tetris from './res/tetris.png';
import RGBdle from './res/rgbdle.png';
function App() {
	const vid = useRef();
	window.addEventListener('click', () => {
		vid.current.play();
	});
	return (
		<div css={css`
			position: relative;
			background-color: #FF9A8B;
			background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
			min-height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		`}>
			<Header />
			<video
				src={BetterCaulSaulxD}
				ref={vid}
				autoPlay
				controls={false}
				playsInline
				preload='auto'
				loop
				css={css`
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			>
			</video>
			<div
				css={css`
					z-index: 4;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					margin: 20px 0;
				`}
			>
				<a href='https://github.com/hickatheworld'>
					<Link icon={GitHub} />

				</a>
				<a href='https://twitter.com/hickatheworld'>
					<Link icon={Twitter} />
				</a>
				<a href='https://jstris.jezevec10.com/u/hicka'>
					<Link icon={Tetris} />
				</a>
				<a href='https://rgbdle.hicka.world'>
					<Link icon={RGBdle} />
				</a>
			</div>
		</div >
	);
}

export default App;
