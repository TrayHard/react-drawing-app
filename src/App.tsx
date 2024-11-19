/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null | undefined>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx!.lineCap = 'round';
    ctx!.lineWidth = 5;
    ctxRef.current = ctx;
  }, [])

  function onMouseDown (evt) {
    setIsDrawing(true);
    ctxRef?.current?.beginPath();
    ctxRef?.current?.moveTo(evt.clientX, evt.clientY);
  }

  function onMouseMove (evt) {
    if (!isDrawing) return;
    ctxRef?.current?.lineTo(evt.clientX, evt.clientY);
    ctxRef?.current?.stroke();
  }

  function onMouseUp () {
    ctxRef?.current?.closePath();
    setIsDrawing(false);
  }


  return (
    <div id="App">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      />
    </div>
  )
}

export default App
