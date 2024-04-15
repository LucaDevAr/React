import { useEffect, useState } from "react";
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) window.addEventListener("pointermove", handleMove);
    console.log(enabled);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#000a",
          borderRadius: "50%",
          border: "1px solid #fff",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;