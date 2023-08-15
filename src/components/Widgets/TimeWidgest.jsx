import React from 'react'
import { Timeline } from 'react-twitter-widgets'

function TimeWidgest() {
  return (
    <>
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'reactjs'
            }}
            options={{
                height: '900'
            }}
        />
    </>
  )
}

export default TimeWidgest