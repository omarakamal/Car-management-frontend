import {useState,useEffect} from 'react'
import axios from 'axios'

function StudentsPage() {

  useEffect(()=>{
    axios.get('https://omar-class-api.adaptable.app/students')
    .then((res)=>{
      console.log(res)
    })
  })
  return (
    <div>StudentsPage</div>
  )
}

export default StudentsPage