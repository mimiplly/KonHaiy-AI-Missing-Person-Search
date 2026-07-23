import React, {  useState } from 'react'
import "./formmissing.css"
import axios from "axios"
import formimage from "../../images/form.gif"
const Formmissing = () => {
  const [user, setUser] = useState({name:'',email:'',datemissing:'',identification:'',identification_number:'',address:'',height:0,Gender:'',phonenumber:''})
  const [image, setImage] = useState(null)
  const [submitStatus, setSubmitStatus] = useState({type:'',message:''})

  const handleinput=(e)=>{
    let nameval=e.target.name
    let value=e.target.value
    if(nameval!=='image'){
      setUser({...user,[nameval]:value})
    }
    else{
      setImage(e.target.files[0])
    }
  }
  
  const postdata= async(e)=>{
    e.preventDefault();
    setSubmitStatus({type:'',message:''})
    
    console.log('[DEBUG] Form submitted with values:', user)
    console.log('[DEBUG] Image selected:', image ? image.name : 'none')
    
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'
    const endpoint = `${API_URL}/api/missingpeople/addperson`
    console.log('[DEBUG] POST endpoint:', endpoint)
    
    if (!image) {
      setSubmitStatus({type:'error',message:'Please select a person image before submitting.'})
      return
    }
    
    const formData = new FormData();
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    formData.append('image', image)
    
    console.log('[DEBUG] FormData entries:')
    for (const [key, value] of formData.entries()) {
      console.log(`  ${key}:`, value)
    }
    
    try {
      const res = await axios.post(endpoint, formData);
      console.log('[DEBUG] Response status:', res.status)
      console.log('[DEBUG] Response data:', res.data)
      
      if(res.status === 200){
        setSubmitStatus({type:'success',message:'Registration successful! The missing person has been registered.'})
        setUser({name:'',email:'',datemissing:'',identification:'',identification_number:'',address:'',height:0,Gender:'',phonenumber:''})
        setImage(null)
      } else {
        setSubmitStatus({type:'error',message:res.data?.message || 'Registration failed with unknown error.'})
      }
    } catch (error) {
      console.error('[ERROR] Registration failed:', error)
      const errorMessage = error.response?.data?.message || error.message || 'Network error. Please try again.'
      setSubmitStatus({type:'error',message:`Registration failed: ${errorMessage}`})
    }
  }


  return (
    
  <div className="fullformpage">
 
  <div className='formout'>
  <div className="containerform">
    <div className="title">Registration</div>
    {submitStatus.message && (
      <div style={{
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
        color: submitStatus.type === 'success' ? '#155724' : '#721c24',
        border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
      }}>
        {submitStatus.message}
      </div>
    )}
    <div className="content">
      <form onSubmit={postdata}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter person's name" name="name" value={user.name} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" name="email" value={user.email} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Date missing</span>
            <input type="date" placeholder="Enter your email" name="datemissing" value={user.datemissing} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">identification</span>
            <input type="text" placeholder="Enter person's identificaion mark" name="identification" value={user.identification} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Identification number</span>
            <input type="text" placeholder="Enter person's identification number" name="identification_number" value={user.identification_number} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">address</span>
            <input type="text" placeholder="Enter person's address" name="address" value={user.address} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">height</span>
            <input type="number" placeholder="enter person's height in foot" name="height" value={user.height} onChange={handleinput} required/>
          </div>
          <div className="input-box">
            <span className="details">Phonenumber</span>
            <input type="number" placeholder="enter contact number" name="phonenumber" value={user.phonenumber} onChange={handleinput} required/>
          </div>
          {/* <div className="input-box">
            <span className="details">Nationality</span>
            <input type="number" placeholder="enter person's nationality" required/>
          </div> */}

          <div className="input-box" >
            <span className="details">person image</span>
            <input type="file" placeholder="enter person's image" name="image"  onChange={handleinput} required />
          </div>


        </div>
        
        <div className="gender-details">
          <input type="radio" name="Gender" id="dot-1" value="male" onChange={handleinput}/>
          <input type="radio" name="Gender" id="dot-2" value="female" onChange={handleinput}/>
          <input type="radio" name="Gender" id="dot-3" value="others"  onChange={handleinput}/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">others</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>

</div>

<div className="photoform">
<div className="textphoto">
  Get the missing person Registered with us and get him found with our face recognition methods
</div>
  <img src={formimage} alt=""  width='400px'/>
</div>
    
</div>
  )
}

export default Formmissing