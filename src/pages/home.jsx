import React from "react";
import ProfilePic from "../images/profilePic.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.profilePicNameNotification}>
          <div className={styles.profilePicAndName}>
            <div className={styles.profileImage}>
              <img src={ProfilePic} alt="profile pic" />
            </div>
            <h2>Hy Aiby,</h2>
          </div>

          <div className={styles.notificationBell}>
            <IoMdNotificationsOutline className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.bodyWrapper}>Body</div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex
        flex-col
        container
        h-[90vh]
        w-[90%]
        mx-auto
      `,

  header: `
      my-[2rem]  
    `,

  profilePicNameNotification: `
        flex
        flex-row
        justify-between
  `,

  profilePicAndName: `
        flex
        items-center
        gap-[1rem]
`,
  icon: `
        h-[2rem]
        w-[2rem]
  `,
};

export default Home;
