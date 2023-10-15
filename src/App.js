import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "",
    streetAddress : "",
    city : "",
    stateProvince : "",
    zipCode : "",
    comments : false,
    candidates : false,
    offers : false,
    notification : "",

  });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData(prev => {
      return{
        ...prev,
        [name] : type === "checkbox" ? checked : value,
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing all User Detail : ");
    console.log(formData);
  }

  return (
    <section>
      {/* form */}
      <form onSubmit={submitHandler}>
        <label>First Name</label><br/>      
        <input onChange={changeHandler} name='firstName' placeholder='Irshad' type='text' value={formData.firstName}/><br/>

        <label>Last Name</label><br/>      
        <input onChange={changeHandler} name='lastName' placeholder='Ansari' type='text' value={formData.lastName}/><br/>

        <label>Email address</label><br/>      
        <input onChange={changeHandler} name='email' placeholder='dummy@gmail.com' type='mail' value={formData.email}/><br/>

        <label htmlFor='country'>Country</label><br/>
        <select onChange={changeHandler} id='country' name='country' value={formData.country}>
          <option values="Nepal">Nepal</option>    
          <option values="United State">United State</option>
          <option values="Canada">Canada</option>
          <option values="Mexico">Mexico</option>
        </select><br/>

        <label>City</label><br/>      
        <input onChange={changeHandler} name='city' placeholder='Hetauda' type='text' value={formData.city}/><br/>

        <label>Street address</label><br/>      
        <input onChange={changeHandler} name='streetAddress' placeholder='123 Main st' type='text' value={formData.streetAddress}/><br/>

        <label>State/Province</label><br/>      
        <input onChange={changeHandler} name='stateProvince' placeholder='Bagmati' type='text' value={formData.stateProvince}/><br/>

        <label>Zip / Postal code</label><br/>      
        <input onChange={changeHandler} name='zipCode' placeholder='44100' type='text' value={formData.zipCode}/><br/>

        <div>
        <input type='checkbox' onChange={changeHandler} id='comments' name='comments' checked={formData.comments}/>    
          <label htmlFor='comments'>Comments</label><br/>
          <p>Get notified when someones posts a comment on a posting.</p>
        </div>

        <div>
        <input type='checkbox' onChange={changeHandler} id='candidates' name='candidates' checked={formData.candidates}/>
          <label htmlFor='candidates'>Candidates</label><br/>
          <p>Get notified when a candidate applies for a job.</p>
        </div>    
        
        <div>
        <input type='checkbox' onChange={changeHandler} id='offers' name='offers' checked={formData.offers}/> 
          <label htmlFor='offers'>Offers</label><br/>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>   

        <label>Push Notifications</label>
        <p> These are delivered via SMS to your mobile phone. </p>

        <input type='radio' onChange={changeHandler} name='notification' id='everything' value="everything" checked={formData.notification === "everything"}/>
        <label htmlFor='everything'>Everything</label><br/>

        <input type='radio' onChange={changeHandler} name='notification' id='sameasemail' value="sameasemail" checked={formData.notification === "sameasemail"}/>
        <label htmlFor='sameasemail'>Same as email</label><br/>

        <input type='radio' onChange={changeHandler} name='notification' id='nopush' value="nopush" checked={formData.notification === "nopush"}/>
        <label htmlFor='nopush'>No push notifications</label><br/>

        <button>Save</button>

      </form>


    </section>
  );
}

export default App;
