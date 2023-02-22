import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'
import axios from 'axios'

const ProductView = () => {
    const {id} = useParams()


    const fetchData = async () => {
      try{
        const { data  } = await axios.get(`api/v1/level/63e9f3816535915f297abe23`)
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>{id}</div>
  )
}

export default HOC(ProductView)