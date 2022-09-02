import React from "react";

import s from "./Footer.module.css";

const Footer = ({itemsLeft, filter, changeFilter, deleteCompleted, completedTodo}) => {

  return (
    <footer className={s.footer}>
      <div>{itemsLeft} items left</div>
      <section className={s.buttons}>
        <button className={filter === 'ALL' ? s.filterBtnActive : s.filterBtn}
                onClick={() => changeFilter('ALL')}>All
        </button>
        <button className={filter === 'ACTIVE' ? s.filterBtnActive : s.filterBtn}
                onClick={() => changeFilter('ACTIVE')}>Active
        </button>
        <button className={filter === 'COMPLETED' ? s.filterBtnActive : s.filterBtn}
                onClick={() => changeFilter('COMPLETED')}>Completed
        </button>
      </section>
      <button className={completedTodo ? s.deleteCompletedBtnActive : s.deleteCompletedBtn} onClick={deleteCompleted}>Clear completed</button>
    </footer>
  )
}

export default Footer;
