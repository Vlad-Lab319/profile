import React, { useRef, useEffect } from 'react';


function Overbracket(props) {

  const {width, height} = props;

  const refBrackets = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    const baseLength = ctx.canvas.width/2 - 20;
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.quadraticCurveTo(20, 30, 30, 30);
    ctx.lineTo(baseLength, 30);
    ctx.quadraticCurveTo(baseLength + 10, 30, baseLength + 20, 20);
    ctx.quadraticCurveTo(baseLength + 30, 30, baseLength + 40, 30);
    ctx.lineTo(baseLength * 2, 30);
    ctx.quadraticCurveTo(baseLength * 2 + 20, 30,baseLength * 2 + 20, 40);
    ctx.stroke();
  }

  useEffect(() => {

    const canvas = refBrackets.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    // <div>
      <canvas ref={refBrackets} width={width} height={height}/>
    // </div>
  )
}

export default Overbracket;