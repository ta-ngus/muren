"use client";

import { useRef } from "react";

export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlayRef.current?.style.setProperty("--x", `${x}px`);
    overlayRef.current?.style.setProperty("--y", `${y}px`);
  };

  return (
  <div onMouseMove={handleMove} className={`relative overflow-hidden ${className}`}>
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(500px circle at var(--x, 50%) var(--y, 10%), rgba(45,212,191,0.16), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}