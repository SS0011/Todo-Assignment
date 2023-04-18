import React,{ useEffect , useState } from 'react'
import Buttons from '../../Atoms/Button/Button'
import Navbar from '../../Component/Navbar/Navbar'
import Style from './Home.module.css'

export default function Home() {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
      const allContacts = JSON.parse(localStorage.getItem("userDatas"))
      setContacts(allContacts)
    },[])

    const handleDelete=()=>{
        localStorage.removeItem("userDatas")
        setContacts([])
    }
 return(
 <div className={Style.wrapper}>
    <Navbar/>
    <div className={Style.Main}>   
    <h1 className={Style.message}>Welcome to our Todo App!</h1> <span> Stay organized and focused with our user-friendly task management tool. With our app, you can easily create, prioritize, and track your to-dos in one place. Say goodbye to missed deadlines and hello to increased productivity. Get started today and make managing your tasks a breeze!</span>
    <Buttons buttonText = 'Clear' onClick={handleDelete} className={Style.clearButton} />
    <h3>All Contacts</h3>

 
  
        {
            contacts?.map((contact)=>
            <ul key={contact.id}>
                <li>{contact.firstName} {contact.lastName}</li>
            </ul>
            )
        }
       </div>
 </div>
 )   
}