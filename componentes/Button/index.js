import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
	return (
		<>
			<button onClick={onClick}>{children}</button>
			<style jsx>{`
				button {
					display: flex;
					align-items: center;
					margin: 16px;
					background: ${colors.black};
					border: 0;
					color: #fff;
					border-radius: 9999px;
					font-weight: 700;
					font-size: 16px;
					cursor: pointer;
					padding: 8px 24px;
					transition: opacity 0.3s ease;
				}

				button > :global(svg) {
					margin-right: 7px;
				}

				button:hover {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
}
