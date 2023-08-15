import React, { useEffect, useState } from 'react'
import FeedItem from '../Content/FeedItem'
import axios from 'axios'

function FeedList() {
  const [isLoading, setIsLoading] = useState(true)
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setDataList(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };

    fetchData();
  }, [dataList]);

  return (
    <div>
      {isLoading ? (
          <div>Loading...</div>
        ) : (
        dataList.map((item, id) => (
          <FeedItem item={item} key={id}/>
        ))
      )}
    </div>
  )
}

export default FeedList