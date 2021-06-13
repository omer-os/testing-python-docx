import React , {useEffect, useState} from 'react'
import {db} from './firebase.jsx'
import './app.css'

export default function App() {

  const [Name, setName] = useState('')
  const [Gender, setGender] = useState('')
  const [Age, setAge] = useState('')
  const [City, setCity] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')



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
          'name': Name,
          'age':Age,
          'gender':Gender,
          'State':City,
          'email':Email,
          'phone':Phone
        })
      }




        
    return (
      <div className="container">  
          <form id="contact">
            <h3>تقنيات صناعة الاسنان</h3>
            <h4>جامعة الكتاب</h4>
            
            
            <fieldset>
              <input placeholder="الاسم" onChange={(e)=>{setName(e.target.value)}} type="text" tabindex="1" required autofocus/>
            </fieldset>


            <fieldset>
              <input placeholder="العمر" onChange={(e)=>{setAge(e.target.value)}} type="text" tabindex="1" required autofocus/>
            </fieldset>

            
            <fieldset className='radios'>

              <div className='inside_radios'>
                <p>الجنس</p>

                <label htmlFor="">
                  ذكر
                  <input value='male' onChange={(e)=>{setGender(e.target.value)}} required name='gender' type="radio"/>  
                </label>
                <label htmlFor="">
                  انثى
                  <input value='female' onChange={(e)=>{setGender(e.target.value)}} required name='gender' type="radio"/>
                </label>
              </div>

            </fieldset>



            <fieldset>
              <input placeholder="الايميل الجامعي" onChange={(e)=>{setEmail(e.target.value)}} type="text" tabindex="2" required/>
            </fieldset>


            <fieldset>
              <input placeholder="رقم الهاتف" onChange={(e)=>{setPhone(e.target.value)}} type="tel" tabindex="3" required/>
            </fieldset>
            <fieldset>
              <input placeholder="من اي محافضة" onChange={(e)=>{setCity(e.target.value)}} type="text" tabindex="4" required/>
            </fieldset>

            <fieldset>
              <button name="submit" type="submit" id="contact-submit" onClick={sendData}>الارسال</button>
            </fieldset>
            <p className="copyright">by omar chatin</p>
            <p className="copyright">source code on <a href="" target="_blank" title="Colorlib">my github</a></p>
          </form>
      </div>
  )
}
