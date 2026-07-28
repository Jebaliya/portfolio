import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  layer: number;
}

/**
 * A quiet, literal signature for an AI/ML portfolio: a sparse neural-net
 * style node graph that drifts and links nearby nodes with faint edges.
 * Reacts gently to the cursor. Respects prefers-reduced-motion by
 * rendering one static frame instead of animating.
 */
export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const LAYERS = 4;
    const NODES_PER_LAYER = 6;
    const LINK_DIST = 190;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      nodes = [];
      for (let l = 0; l < LAYERS; l++) {
        for (let i = 0; i < NODES_PER_LAYER; i++) {
          const colX = (width / (LAYERS - 1)) * l;
          const jitterX = (Math.random() - 0.5) * (width / LAYERS) * 0.5;
          const y = (height / (NODES_PER_LAYER - 1)) * i;
          const jitterY = (Math.random() - 0.5) * 40;
          nodes.push({
            x: colX + jitterX,
            y: y + jitterY,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            layer: l,
          });
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // edges between adjacent layers within link distance
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (Math.abs(a.layer - b.layer) !== 1) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.16;
            ctx!.strokeStyle = `rgba(91, 140, 255, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const glow = distToMouse < 160 ? (160 - distToMouse) / 160 : 0;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6 + glow * 2, 0, Math.PI * 2);
        ctx!.fillStyle =
          glow > 0
            ? `rgba(47, 230, 196, ${0.35 + glow * 0.5})`
            : "rgba(91, 140, 255, 0.4)";
        ctx!.fill();

        if (!prefersReduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20 || n.x > width + 20) n.vx *= -1;
          if (n.y < -20 || n.y > height + 20) n.vy *= -1;
        }
      }
    }

    function loop() {
      draw();
      if (!prefersReduced) {
        raf = requestAnimationFrame(loop);
      }
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    loop();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  );
}
