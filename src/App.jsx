/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import Header from './components/Header';
import Link from './components/Link';
import GitHub from './res/github.png';
import Twitter from './res/twitter.png';
import Tetris from './res/tetris.png';
import RGBdle from './res/rgbdle.png';
function App() {
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
			<div
				css={css`
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
