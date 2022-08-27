import React from "react";
import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Trips = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <IoMdArrowBack className={styles.icon} />
        </div>
        <div className={styles.pageTitle}>Your Trips</div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.tripOnSaidDate}>
          <p className={styles.tripDateClass}>25th May 2022</p>
          <div className={styles.tripsOnDateList}>
            <Link to="/tripdata">
              <div className={styles.tripData}>
                <div className={styles.tripLocationTimeAndPrice}>
                  <div className={styles.tripLocationAndTime}>
                    <h2>LAGOS TO IBADAN</h2>
                    <p>8:00AM - 10:30AM</p>
                  </div>
                  <div className={styles.tripPrice}>$900</div>
                </div>
                <div className={styles.departureAndArrivalStation}>
                  <p>Departure - Lagos Railway Station</p>
                  <p>Arrival - Ibadan Railway Station</p>
                </div>
                <div className={styles.buttonAndNotificationBell}>
                  <button type="button" className={styles.button}>
                    View
                  </button>

                  <IoMdNotificationsOutline
                    className={styles.notificationBell}
                  />
                </div>
              </div>
            </Link>

            <div className={styles.tripData}>
              <div className={styles.tripLocationTimeAndPrice}>
                <div className={styles.tripLocationAndTime}>
                  <h2>LAGOS TO IBADAN</h2>
                  <p>8:00AM - 10:30AM</p>
                </div>
                <div className={styles.tripPrice}>$700</div>
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
        </div>

        <div className={styles.tripOnSaidDate}>
          <p className={styles.tripDateClass}>5th August 2022</p>
          <div className={styles.tripsOnDateList}>
            <div className={styles.tripData}>
              <div className={styles.tripLocationTimeAndPrice}>
                <div className={styles.tripLocationAndTime}>
                  <h2>LAGOS TO IBADAN</h2>
                  <p>8:00AM - 10:30AM</p>
                </div>
                <div className={styles.tripPrice}>$1500</div>
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
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        w-[100%]
    `,

  header: `
        w-[100%]
        flex
        items-center
        justify-between
        h-[3rem]
        shadow-lg
        shadow-[#B4B4B4]-500/50
        mb-[2.5rem]
        px-[.6rem]
    `,

  icon: `
        h-[1.5rem]
        w-[1.5rem]  
    `,

  pageTitle: `
        w-[100%]
        flex
        justify-center
        font-bold
        text-lg
    `,

  contentWrapper: `
        flex
        flex-col
        gap-[2rem]
        w-[90%]
        mx-auto
        overflow-y-scroll
    `,

  tripsOnDateList: `
        flex
        flex-col
        gap-[.6rem]  
    `,

  tripDateClass: `
        font-semibold
        text-[#00000080] 
    `,

  tripOnSaidDate: `
        flex
        flex-col
        gap-[.5rem]
        mb-[3.5rem]
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

  tripLocationTimeAndPrice: `
        flex
        justify-between  
    `,

  tripPrice: `
        text-primary 
        font-semibold
        text-lg
    `,

  departureAndArrivalStation: `
        text-sm
        text-[#00000080]  
    `,

  buttonAndNotificationBell: `
        flex
        items-center
        justify-between  
    `,

  button: `
    h-[2.5rem]
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

export default Trips;
