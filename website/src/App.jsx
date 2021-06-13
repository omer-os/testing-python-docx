import React , {useEffect, useState} from 'react'
import {db} from './firebase.jsx'
import { FormHelperText, FormControl, InputLabel , Input } from '@material-ui/core';

function App() {

  const [Name, setName] = useState('')

  const [studentDetails, setstudentDetails] = useState([])
    useEffect(()=>{

      const students = []
        db.collection('data').get()
            .then(snapshot => {
                snapshot.docs.forEach(student => {
                    let currentID = student.id
                    let appObj = { ...student.data(), ['id']: currentID }
                    students.push(appObj)

                    students.push(student.data())
            })
            setstudentDetails(students)
        })
        console.log(studentDetails)
    },[])

    const sendData = ()=>{
      db.collection('data').add({
        'name': 'omar chatin',
        'age':'15'
      })
    }



  return (
    <div>
      {/* <TextField value={Name} onChange={(e)=>{setName(e.target.value)}} id="standard-basic" label="Your Name" />
      <Button onClick={sendData}>Submit</Button> */}
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
    </div>
  )
}

export default App

