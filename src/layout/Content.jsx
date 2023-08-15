import React from 'react'
import Header from '../components/Content/Header'
import TweetBox from '../components/Content/TweetBox'
import FeedList from '../components/Content/FeedList'

function Content() {
  return (
    <main className='flex-1 border-r border-l overflow-auto'>
      <Header />
      <TweetBox />
      <FeedList />
    </main>
  )
}

export default Content