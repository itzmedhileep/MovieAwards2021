import React from 'react';
import clsx from 'clsx';
import { AiFillCheckCircle } from "react-icons/ai";
import styles from '../../styles/Home.module.css'

const NomineeCard = (props) => {
  const {
    id: catId = '',
    title: catTitle = '',
    data = {},
    selectItem,
    selected = false
  } = props;

  const {
    id = '',
    photoUrL = '',
    title = ''
  } = data;

  return (
    <div className={clsx(styles.card, selected && styles.selected)}>
      <h3 className='h2'> {title} </h3>
      <img className={styles.image} src={photoUrL} alt={title} />
      <button className={clsx(styles.button, selected && styles.selectedButtton)} onClick={ () => selectItem(catId, catTitle, data) }>
        { 
          selected
            ? <>
              <AiFillCheckCircle className={styles.selectedIcon} /> Selected
            </>
            : "Select"
        }
      </button>
    </div>
  );
};

export default NomineeCard;