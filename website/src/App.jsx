import React , {useState} from 'react'
import {db} from './firebase.jsx'
import './app.css'

export default function App() {

  const [Name, setName] = useState('')
  const [Gender, setGender] = useState('')
  const [Age, setAge] = useState('')
  const [City, setCity] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')



  

        
              
      const sendData = ()=>{
          if (!(Name === '') && !(Gender === '') && !(Age === '') && !(City === '') && !(Email === '') && !(Phone === '')){
            db.collection('data').add({
              'name': Name,
              'age':Age,
              'gender':Gender,
              'State':City,
              'email':Email,
              'phone':Phone
            })
            alert('! تم الارسال بنجاح ')
          }
          else{
            alert('. رجاءا ادخل المعلومات بشكل صحيح ثم اضغط لزر الارسال ')            
          }
      }




        
    return (
      <div className="container">  
          <form id="contact">
            <h3>تقنيات صناعة الاسنان</h3>
            <h4>جامعة الكتاب</h4>
            
            
            <fieldset>
              <input placeholder="الاسم" maxLength='20' onChange={(e)=>{setName(e.target.value)}} type="text" tabIndex="1" required autoFocus/>
            </fieldset>


            <fieldset>
              <input placeholder="العمر" maxLength='2' onChange={(e)=>{setAge(e.target.value)}} type="text" tabIndex="1" required autoFocus/>
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
              <input placeholder="الايميل الجامعي" maxLength='25' onChange={(e)=>{setEmail(e.target.value)}} type="text" tabIndex="2" required/>
            </fieldset>


            <fieldset>
              <input placeholder="رقم الهاتف" maxLength='11' onChange={(e)=>{setPhone(e.target.value)}} type="tel" tabIndex="3" required/>
            </fieldset>
            <fieldset>
              <input placeholder="من اي محافضة" onChange={(e)=>{setCity(e.target.value)}} type="text" tabIndex="4" required/>
            </fieldset>

            <fieldset>
              <button name="submit" type="button" id="contact-submit" onClick={sendData}>الارسال</button>
            </fieldset>
            <p className="copyright">by omar chatin</p>
            <p className="copyright">source code on <a href="https://github.com/omer-os/testing-python-docx" rel="noopener noreferrer"  title="Colorlib">my github</a></p>
          </form>
      </div>
  )
}
