import { useEffect, useState } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div
        className="centrize full-width"
        style={{ display: loaded ? "none" : "table" }}
      >
        <div className="vertical-center">
          <div className="spinner-logo">
            <img src="images/logo.png" alt="image" />
            <div className="spinner-dot">
              <div className="spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
