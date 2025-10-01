// app/page.tsx (Next.js 13+ with App Router)
"use client";
import { useRef, useEffect } from "react";

const Sandbox = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw circle
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(250, 200);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw circle
    ctx.beginPath();
    ctx.arc(300, 100, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    // Draw text
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Welcome to Sandbox", 120, 280);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-black"
      />
    </main>
  );
};

export default Sandbox;
