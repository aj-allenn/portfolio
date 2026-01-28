// "use client";

// import { useEffect, useRef } from "react";

// type CubesProps = {
//   gridSize?: number;
//   maxAngle?: number;
//   radius?: number;
//   borderStyle?: string;
//   faceColor?: string;
//   rippleColor?: string;
//   rippleSpeed?: number;
//   autoAnimate?: boolean;
//   rippleOnClick?: boolean;
// };

// export default function Cubes({
//   gridSize = 6,
//   radius = 2,
//   borderStyle = "2px dashed #B19EEF",
//   faceColor = "#1a1a2e",
//   rippleColor = "#ff6b6b",
//   rippleSpeed = 1.5,
//   autoAnimate = true,
//   rippleOnClick = true,
// }: CubesProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const cubes = containerRef.current.children;

//     if (autoAnimate) {
//       Array.from(cubes).forEach((cube, i) => {
//         (cube as HTMLElement).animate(
//           [
//             { transform: "translateZ(0px)" },
//             { transform: "translateZ(20px)" },
//             { transform: "translateZ(0px)" },
//           ],
//           {
//             duration: 3000 + i * 200,
//             iterations: Infinity,
//           }
//         );
//       });
//     }
//   }, [autoAnimate]);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 grid place-items-center"
//       style={{
//         display: "grid",
//         gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
//         gap: "1rem",
//         perspective: "800px",
//       }}
//     >
//       {Array.from({ length: gridSize * gridSize }).map((_, i) => (
//         <div
//           key={i}
//           onClick={() => rippleOnClick && console.log("Ripple")}
//           className="w-16 h-16 transition-transform"
//           style={{
//             background: faceColor,
//             border: borderStyle,
//             borderRadius: `${radius}px`,
//             transformStyle: "preserve-3d",
//           }}
//         />
//       ))}
//     </div>
//   );
// }
