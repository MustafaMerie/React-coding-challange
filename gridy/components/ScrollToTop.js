import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import to_top_icon from "../public/svgs/up-arrow-svgrepo-com.svg";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showTopBtn && (
        <div className={styles.scroll_to_top_btn}>
          <Button
            className=""
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            variant="light"
          >
            <Image
              src={to_top_icon}
              width={25}
              height={25}
              alt="Scroll to top"
            />
          </Button>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
