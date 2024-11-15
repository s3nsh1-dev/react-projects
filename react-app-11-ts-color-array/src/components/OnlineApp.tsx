import React from 'react'
import FetchOnlineData from './FetchOnlineData'
import CrudButtons from './CrudButtons'

export default function OnlineApp() {
  return (
    <div>
      <CrudButtons/>
      <FetchOnlineData/>
    </div>
  )
}
