import React, { useEffect } from "react";

function display({ tecla }) {

  useEffect(() => {
  }, []);

  return (
    <>
      <div id="pantalla" className="centrar">
        <div id="visor">
          <p id="resultado" maxLength="16">
            {tecla}
          </p>
        </div>
      </div>
    </>
  );
}

export default display;
