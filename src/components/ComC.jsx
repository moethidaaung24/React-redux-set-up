import React from 'react'
import { connect } from 'react-redux'
const ComC = ({usersUi}) => {
   const {username,phone}=usersUi
  return (
      <div>ComC-username -{username} phone -{phone} </div>
  )
}

const mapStateToProps = (state) => ({
    usersUi :state?.usersRoot
})

export default  connect(mapStateToProps,null) (ComC)