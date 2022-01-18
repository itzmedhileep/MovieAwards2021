import React from "react"
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdThumbsUp } from "react-icons/io";
import styles from './SuccessModal.module.css'

const SuccessModal = (props) => {
  const {
    data = {},
    closePopup
  } = props;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.mask} onClick={closePopup}></div>
      <div className={styles.modalContainer} onClick={(e) => e.preventDefault() }>
        <AiFillCloseCircle className={styles.modalCloseIcon} onClick={closePopup} />
        <div className={styles.modalTitleContainer}>
          <div className={styles.modalTitle}>
            Success
          </div>
        </div>
        <div className={styles.modalContentContainer}>
          <div className={styles.IconContainer}>
            <IoMdThumbsUp className={styles.thumbsupIcon} />
          </div>
          <div className={styles.modalDescriptionContainer}>
            <div className={styles.modalDescription}>
              You have successfully submitted the nominations!
            </div>
            <div className={styles.nominationWrapper}>
              {
                Object.keys(data).map((dataKey) => 
                  <div className={styles.nomination}> {data[dataKey].catTitle} - {data[dataKey].title} </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;