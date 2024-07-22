import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.userCentricExcellenceOurAParent}>
        <div className={styles.userCentricExcellenceOurContainer}>
          <span className={styles.userCentricExcellence}>
            User-Centric Excellence
          </span>
          <span className={styles.ourAppDevelopmentServicesT}>
            <span className={styles.our}>{`: Our `}</span>
            <b className={styles.appDevelopmentServices}>
              App Development services
            </b>
            <span className={styles.tacklesYourPain}>
              {" "}
              Tackles Your Pain Points
            </span>
          </span>
        </div>
        <div className={styles.experienceASeamlessContainer}>
          <span>{`Experience a Seamless Digital Journey with `}</span>
          <span className={styles.desun}>Desun</span>
          <span>
            <span>
              {" "}
              - Where Every Line of Code Resolves Your Challenges and
            </span>
            <span className={styles.span}>{` `}</span>
          </span>
          <b className={styles.elevatesYourApp}>Elevates Your App Experience</b>
          <span> to Unparalleled Heights.</span>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/group-1@2x.png" />
      <div className={styles.leaveYourContactsAndWeWilParent}>
        <b className={styles.leaveYourContactsContainer}>
          <p className={styles.leaveYourContacts}>
            Leave your contacts and we will call you back
          </p>
          <p className={styles.leaveYourContacts}>within 30 minutes</p>
        </b>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.fullNameParent}>
                <div className={styles.fullName}>Full name</div>
                <div className={styles.myNameWrapper}>
                  <div className={styles.myName}>My Name</div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/vector-214.svg"
                />
              </div>
              <div className={styles.fullNameParent}>
                <div className={styles.fullName}>Phone number</div>
                <div className={styles.frameParent1}>
                  <div className={styles.image4Wrapper}>
                    <img
                      className={styles.image4Icon}
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className={styles.myName}>+91</div>
                  <div className={styles.myName}>0000000000</div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/vector-214.svg"
                />
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.fullNameParent}>
                <div className={styles.fullName}>Business name</div>
                <div className={styles.myNameWrapper}>
                  <div className={styles.myName}>ABC Technologies PVT LTD</div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/vector-214.svg"
                />
              </div>
              <div className={styles.fullNameParent}>
                <div className={styles.fullName}>Business mail</div>
                <div className={styles.myNameWrapper}>
                  <div className={styles.myName}>demoaccount@gmail.com</div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/vector-214.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.getConsultationWrapper}>
            <div className={styles.getConsultation}>
              <p className={styles.leaveYourContacts}>Get</p>
              <p className={styles.leaveYourContacts}>consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
