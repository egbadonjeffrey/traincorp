import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiMap, FiSettings } from "react-icons/fi";
import { TbTrain } from "react-icons/tb";

const Navigation = () => {
  const [landingPage, setLandingPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLandingPage(false);
    } else {
      setLandingPage(true);
    }
  }, [location]);

  return (
    <>
      {landingPage && (
        <div className={styles.wrapper}>
          <div className={styles.menuIcons}>
            <Link to="">
              <FiHome className={styles.NavIcon} />
            </Link>
            <Link to="">
              <TbTrain className={styles.NavIcon} />
            </Link>
            <Link to="">
              <FiMap className={styles.NavIcon} />
            </Link>
            <Link to="">
              <FiSettings className={styles.NavIcon} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  wrapper: `
  w-[100%]
    `,

  menuIcons: ` 
        flex
        flex-row
        items-center
        justify-center
        w-[70%]
        gap-[3rem]
        mx-auto
    `,

  NavIcon: `
        h-[2rem]
        w-[2rem]
        text-[#ccc]
`,
};

export default Navigation;
