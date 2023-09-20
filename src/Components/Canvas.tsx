const Canvas = ({ width, height }) => {
	return (
		<canvas
			width={width}
			height={height}
			style={canvasStyle}
		/>
	)
}

const canvasStyle = {
	border: "1px solid black"
}

export default Canvas;

