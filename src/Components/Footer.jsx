import React from 'react'
import Styles from './footer.module.css'


export default function Footer({compltedTodos}) {
  return (
    <div className={Styles.footer}>
        <span>Completed Todos: {compltedTodos}</span>
    </div>
  )
}
