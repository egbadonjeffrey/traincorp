import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const TicketData = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.backButton}>
          <IoMdArrowBack className={styles.backButtonIcon} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: `
        headerContainer
    `,
};

export default TicketData;
