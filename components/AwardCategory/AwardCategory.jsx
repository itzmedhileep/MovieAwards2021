import React from 'react'
import { NomineeCard } from '../../components'
import styles from '../../styles/Home.module.css'

const AwardCategory = (props) => {
  const {
    data: {
      id = '',
      items = {},
      title = ''
    } = {},
    selectItem,
    selectedValue
  } = props;

  return (
    <div className={styles.categoryWrapper}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {
          items.map(nominee => {
            const { id: nomId = '' } = nominee

            return (
              <NomineeCard
                key={nomId}
                id={id}
                title={title}
                data={nominee}
                selectItem={selectItem}
                selected={Boolean(selectedValue[id]?.id === nomId)}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default AwardCategory;