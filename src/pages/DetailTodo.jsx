import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/axios'

const DetailTodo = () => {
  const { id } = useParams()

  const [data,setData] =useState()
  useEffect(() => {
    api.get(`tasks/${id}?populate=*`).then((data) => {
      setData(data.data.data)
    })
  },[id])


  return (
    <div>{
      JSON.stringify(data)
    }</div>
  )
}

export default DetailTodo