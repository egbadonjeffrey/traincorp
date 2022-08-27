import React from "react";
import ProfilePic from "../images/profilePic.png";
import { IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      {/*  TOP PROFILEPIC AND NAME STARTS */}

      <div className={styles.header}>
        <div className={styles.profilePicNameNotification}>
          <div className={styles.profilePicAndName}>
            <div className={styles.profileImage}>
              <img src={ProfilePic} alt="profile pic" />
            </div>
            <h2 className={styles.profileName}>Hi Aiby,</h2>
          </div>

          <div className={styles.notificationBell}>
            <IoMdNotificationsOutline className={styles.icon} />
          </div>
        </div>
      </div>

      {/* TOP PROFILEPIC AND NAME ENDS */}

      {/* DESTINATION SEARCH STARTS */}

      <div className={styles.destinationSearchContainer}>
        <img src="" alt="tripIcon" />
        <div className={styles.destinationInputFieldContainer}>
          <div className={styles.locationInput}>
            <BiSearchAlt2 className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Lagos"
              className={styles.locationInputField}
            />
          </div>
          <div className={styles.locationInput}>
            <BiSearchAlt2 className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Ibadan"
              className={styles.locationInputField}
            />
          </div>
        </div>
      </div>

      {/* DESTINATION SEARCH ENDS  */}

      {/* TRIP PLANNING STARTS */}

      <div className={styles.tripPlanning}>
        <div className={styles.onewayAndReturnTabs}>
          <p>One Way</p>
          <p>Return</p>
        </div>
        <div className={styles.inputfieldContainers}>
          <div className={styles.departurePassengerInputContainer}>
            <input
              type="text"
              placeholder="Departure date"
              className={styles.departurePassengerInput}
            />
            <FaCalendarAlt className={styles.inputIcon} />
          </div>
          <div className={styles.departurePassengerInputContainer}>
            <input
              type="text"
              placeholder="No of Passengers"
              className={styles.departurePassengerInput}
            />
            <IoMdArrowDropdown className={styles.inputIcon} />
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button}>
              Results
            </button>
          </div>
        </div>
      </div>

      {/* TRIP PLANNING ENDS */}

      {/* UPCOMING TRIPS */}

      <div className={styles.upcomingTripsWrapper}>
        <p>Upcoming Trips</p>
        <div className={styles.tripsList}>
          <div className={styles.trips}>
            <div>
              <p>25th May 2022</p>
              <h2 className={styles.tripsDestination}>Lagos to ibadan</h2>
            </div>
            <div className={styles.tripsTime}>8:00AM - 10:30AM</div>
          </div>
          <div className={styles.trips}>
            <div>
              <p>25th May 2022</p>
              <h2 className={styles.tripsDestination}>Lagos to ibadan</h2>
            </div>
            <div className={styles.tripsTime}>8:00AM - 10:30AM</div>
          </div>
          <div className={styles.trips}>
            <div>
              <p>25th May 2022</p>
              <h2 className={styles.tripsDestination}>Lagos to ibadan</h2>
            </div>
            <div className={styles.tripsTime}>8:00AM - 10:30AM</div>
          </div>
          <div className={styles.trips}>
            <div>
              <p>25th May 2022</p>
              <h2 className={styles.tripsDestination}>Lagos to ibadan</h2>
            </div>
            <div className={styles.tripsTime}>8:00AM - 10:30AM</div>
          </div>
          <div className={styles.trips}>
            <div>
              <p>25th May 2022</p>
              <h2 className={styles.tripsDestination}>Lagos to ibadan</h2>
            </div>
            <div className={styles.tripsTime}>8:00AM - 10:30AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex
        flex-col
        container
        h-auto
        w-[90%]
        mx-auto
      `,

  header: `
      my-[2rem]
      text-primary  
    `,

  profileName: `
      text-[1.2rem] 
      font-semibold 
    `,

  destinationSearchContainer: `
        bg-primary
        flex
        items-center
        justify-center
        py-[1rem]
        rounded
        w-full

  `,

  departurePassengerInputContainer: `
        flex
        flex-row
        gap-[2rem]
        justify-between
        items-center
        h-[3rem]
        my-[.6rem]
        px-[1rem] 
        shadow-lg 
        shadow-[#B4B4B4]-500/50 
  `,

  departurePassengerInput: `
        outline-none
        my-[.4rem]
        w-full
        rounded-md
        text-[#B4B4B4]
  `,

  onewayAndReturnTabs: `
        flex
        gap-[2rem]
        mt-[2rem]
        text-[#B4B4B4]
        font-bold
        text-[1.2rem]
  `,

  inputfieldContainers: `
        my-[1rem]
  `,

  locationInput: `
        flex
        flex-row
        items-center
        bg-white
        mb-[1rem]
        w-[100%]
        rounded-md
    `,

  inputIcon: `
        text-[#B4B4B4] 
        ml-[1rem] 
    `,

  //   locationTwoInput: `
  //         flex
  //         flex-row
  //         items-center
  //         bg-white
  //   `,

  locationInputField: `
        outline-none
        h-[2.5rem]
        py-[.4rem]
        px-[.6rem]
        rounded-md
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

  buttonContainer: `
  flex
  justify-center
  h-[100%]
  w-[70%]
  my-[5rem]
  mx-auto
`,

  button: `
  bg-[#39B400]
  px-[4rem]
  py-[1rem]
  uppercase
  text-white
  font-bold
  rounded
  w-[100%]
`,

  upcomingTripsWrapper: `
    flex
    flex-col
    gap-[.4rem]
    -mt-[3rem]  
`,

  tripsList: `
    flex
    flex-col
    gap-[1rem]
    mb-[3rem]
`,

  trips: `
  flex  
  items-center
  justify-between
  text-primary
  font-normal
  h-[3rem]
  border-2
  rounded-xl
  py-[3rem]
  px-[1rem]
`,
  tripsDestination: `
    text-[#2C2C2C]
    uppercase
    font-semibold
`,
};

export default Home;
