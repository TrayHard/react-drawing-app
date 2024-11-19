

const Canvas = ({ width, height }) => {
  const localCanvasStyle = {
    border: "1px solid black",
  }
  return (
    <canvas
      id="canvas"
      width={width}
      height={height}
      style={localCanvasStyle}
    />
  )
}


export default Canvas;

