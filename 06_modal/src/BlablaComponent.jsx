import React, { useState } from "react";

function BlablaComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>눌러주쇼</button>

      {isModalOpen && (
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 24,
              left: 50,
              background: "white",
            }}
          >
            나 모달임
          </div>
        </div>
      )}
    </div>
  );
}

export default BlablaComponent;
