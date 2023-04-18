import React, { useState ,useEffect} from "react";
import Input from "../../Atoms/Input/Input";
import Buttons from "../../Atoms/Button/Button";
import Navbar from "../../Component/Navbar/Navbar";
import Style from "./Contact.module.css"

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [allUserDetails, setAllUserDetails] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("userDatas")) {
      let usersDetails = JSON.parse(localStorage.getItem("userDatas")) || []
      console.log(usersDetails, "i am from local storage data");
      setAllUserDetails(usersDetails);
    }
  }, []);
  function handleEmail(e) {
    setEmail(e.target.value)
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(e.target.value)) {
      setErrorEmail("Please enter a valid email address");
    } else {
      setErrorEmail("");
    }
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/
    if (nameRegex.test(e.target.value.trim())) {
      setErrorLastName("");
    } else {
      setErrorLastName("Please enter a valid last name");
    }
  }

  function handleName(e) {
    setFirstName(e.target.value);
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/
    if (nameRegex.test(e.target.value.trim())) {
      setErrorFirstName("");
    } else {
      setErrorFirstName("Please enter a valid first name");
    }
  }

  function handlePhone(e) {
    setPhone(e.target.value);
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(e.target.value)) {
      setErrorPhone("Please enter a valid 10-digit phone number");
    } else {
      setErrorPhone("");
    }
  }

  function handleSubmit() {
    const alreadyRegister = allUserDetails.find(
      (x) => x.email === email && x.phone === phone
    );
    if (alreadyRegister) {
      alert(
        `${alreadyRegister.firstName} is already in the contact`
      );
    } else {
      if (email === "" || phone === "" || firstName === "" || lastName === "") {
        alert("Please fill the input box");
      } else if (errorEmail || errorFirstName || errorLastName || errorPhone) {
        alert(`You have enter wrong details`)
      } else {
        const userData = {
          id: Math.floor(Math.random() * 10000),
          firstName,
          lastName,
           email, 
           phone, 
        };
        allUserDetails.push(userData);
        setAllUserDetails([...allUserDetails]);
        localStorage.setItem("userDatas", JSON.stringify(allUserDetails));
        alert(`${userData.firstName} successfully added`);
      }
  
  
  }
}
  

  return (
    <>   
     <Navbar/>
  <div className={Style.main}>
    <div className={Style.Wrapper}> <h1>Create Your Contact 📞<br/> with Us!!🤩</h1>  </div>
      
      <div className= {Style.ContactForm}>
      <Input label="First Name" value={firstName} onChange={handleName} />
      {errorFirstName && <p>{errorFirstName}</p>}
      <Input label="Last Name" value={lastName} onChange={handleLastName} />
      {errorLastName && <p>{errorLastName}</p>}
      <Input label="Email" value={email} onChange={handleEmail} />
      {errorEmail && <p>{errorEmail}</p>}
      <Input label="Phone No" type="tel" value={phone} onChange={handlePhone} />
      {errorPhone && <p>{errorPhone}</p>}
      <Buttons buttonText="Submit" onClick={handleSubmit} className={Style.Buttons} />
    </div>
 
    </div>
    </>
  
  );
}