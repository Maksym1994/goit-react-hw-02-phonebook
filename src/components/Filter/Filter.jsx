import React from 'react';
import s from 'components/Filter/Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3 className={s.titleFilter}>Find contacts by name</h3>
      <input className={s.inputFilter} type="text" value={filter} onChange={onChange} />
    </>
  );
};
export default Filter;
