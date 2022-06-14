import React from 'react'
import classes from './MyButton.module.css'

const MyButtonLoadMore = ({children, ...props}) => {
    return (
      <button {...props} className={classes.myButtonLoadMore}>
        {children}
      </button>
    )
  }

export default MyButtonLoadMore