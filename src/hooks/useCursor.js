import { useEffect, useRef } from "react";

export default function useCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };

    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.15;
      pos.current.ry += (my - pos.current.ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + "px";
        ringRef.current.style.top  = pos.current.ry + "px";
      }
      raf.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const onHover    = () => ringRef.current?.classList.add("hovered");
  const onUnhover  = () => ringRef.current?.classList.remove("hovered");

  return { cursorRef, ringRef, onHover, onUnhover };
}