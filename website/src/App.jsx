import React , {useEffect, useState} from 'react'
import {db} from './firebase.jsx'
import './app.css'

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
        <div className="container">  
          <form id="contact" action="" method="post">
            <h3>تقنيات صناعة الاسنان</h3>
            <h4>جامعة الكتاب</h4>
            
            
            <fieldset>
              <input placeholder="الاسم" type="text" tabindex="1" required autofocus/>
            </fieldset>

            
            <fieldset className='radios'>

              <div className='inside_radios'>
                <p>الجنس</p>

                <label htmlFor="">
                  ذكر
                  <input value='male' required name='gender' type="radio"/>  
                </label>
                <label htmlFor="">
                  انثى
                  <input value='female' required name='gender' type="radio"/>
                </label>
              </div>

            </fieldset>



            <fieldset>
              <input placeholder="الايميل الجامعي" type="text" tabindex="2" required/>
            </fieldset>
            <fieldset>
              <input placeholder="رقم الهاتف" type="tel" tabindex="3" required/>
            </fieldset>
            <fieldset>
              <input placeholder="من اي محافضة" type="text" tabindex="4" required/>
            </fieldset>

            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">الارسال</button>
            </fieldset>
            <p className="copyright">by omar chatin</p>
            <p className="copyright">source code on <a href="" target="_blank" title="Colorlib">my github</a></p>
          </form>
      </div>  
    </div>
  )
}

export default App

