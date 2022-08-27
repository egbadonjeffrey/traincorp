import React from "react";
import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import GoogleMap from "../images/thumbnail.jpeg";

const TripData = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div>
            <IoMdArrowBack className={styles.icon} />
          </div>
          <div className={styles.pageTitleAndDate}>
            <div className={styles.tripLocationDesc}>
              <h2 className={styles.tripLocation}>LAGOS TO IBADAN</h2>
              <p className={styles.tripDate}>25th May 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mapContainer}>
          <img src={GoogleMap} alt="google map" className={styles.googleMap} />
        </div>

        <div className={styles.tripDataContainer}>
          <div className={styles.tripData}>
            <div className={styles.tripLocationTimeAndPrice}>
              <div className={styles.tripLocationAndTime}>
                <h2>LAGOS TO IBADAN</h2>
                <p>8:00AM - 10:30AM</p>
              </div>
              <div className={styles.tripPrice}>$500</div>
            </div>
            <div className={styles.departureAndArrivalStation}>
              <p>Departure - Lagos Railway Station</p>
              <p>Arrival - Ibadan Railway Station</p>
            </div>
            <div className={styles.buttonAndNotificationBell}>
              <button type="button" className={styles.button}>
                View
              </button>

              <IoMdNotificationsOutline className={styles.notificationBell} />
            </div>
          </div>
        </div>

        <div className={styles.viewButton}>
          <button type="button" className={styles.button}>
            View Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
  w-[100%]
    `,

  headerContainer: `    
        shadow-lg
        shadow-[#B4B4B4]-500/50
        items-center
        justify-between
        py-[1rem] 
        mb-[2.5rem]
    `,

  header: `
        w-[90%]
        mx-auto
        flex
        items-center
        justify-between
    `,

  icon: `
        h-[1.5rem]
        w-[1.5rem]  
    `,

  pageTitleAndDate: `
        w-[100%]
        flex
        justify-center
        text-center
    `,

  tripLocation: `
        text-xl
        font-semibold  
    `,

  tripDate: `
        text-sm
        font-normal 
        text-[#00000080]
    `,

  contentWrapper: `
    flex
    flex-col
    gap-[2rem]
    mb-[3.5rem]
  overflow-scroll
`,

  mapContainer: `
  w-[90%]
  h-[400px]
  mx-auto
  rounded-2xl
  bg-primary
`,

  googleMap: `
  w-[100%]
  h-[100%]
  rounded-2xl
`,

  tripDataContainer: `
        w-[90%]
        mx-auto
`,

  tripData: `
        flex
        flex-col
        gap-[1rem]
        border-2
        px-[1rem]
        py-[1rem]
        rounded-xl
    `,

  viewButton: `
        flex
        items-center
        justify-center  
    `,

  buttonAndNotificationBell: `
    flex
    items-center
    justify-between  
`,

  button: `
        h-[3rem]
        w-[30%]
        bg-primary
        text-white
        text-lg
        font-semibold
        rounded-xl
    `,

  notificationBell: `
    h-[2rem]
    w-[2rem]  
    text-[#00000080]
`,
};

export default TripData;
