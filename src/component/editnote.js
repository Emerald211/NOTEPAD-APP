import React,{useState} from 'react'
import { Link } from 'react-router-dom'


function Editnote() {
    const noteChanges = () => {
        
     }

    noteChanges();
    const fetchIndex = localStorage.getItem("index");
    const fetchContent = JSON.parse(localStorage.getItem("localNote"));

    const [titleName, setTitle] = useState(fetchContent[fetchIndex].name);
    const[message, setMessage] = useState( fetchContent[fetchIndex].message)

    const handleChange = (e) => {
        setTitle(e.target.value)
    } 

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }


    const saveChanges = (e) => {
        e.preventDefault();

        const titleContent = document.querySelector("#title-content");
        const textareaContent = document.querySelector('#textarea-content');
        const fetchData = JSON.parse(localStorage.getItem("localNote"))
        const date = new Date();
        const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes()
        let AM = ''
        
        
        
        
        
        if (hour < 12) {
          hour = `0${date.getHours()}`
          AM = "AM"
        } else {
          AM = "PM"
        }
        
        if (minute < 10) {
          minute = `0${date.getMinutes()}`
        }
        console.log(hour)
        console.log(minute)
        
        const fullDate = `${hour}:${minute}${AM} ${Months[month]} ${day} ${year}`
        
        console.log(fullDate)
        

        const data = {
            name: titleContent.value,
            message: textareaContent.value,
          date: fullDate,
            id: Math.floor((Math.random() * 500) + 1)
        }

        console.log(data)
        console.log(fetchContent[fetchIndex])
        
        fetchData.splice(fetchIndex, 1, data)

        

        console.log(fetchData)

        localStorage.setItem("localNote", JSON.stringify(fetchData))

    

        

        const updateBtn = document.querySelector("#update");
        updateBtn.textContent = "Updated Sucessfully"
        updateBtn.style.width = "130px"
        updateBtn.style.backgroundColor = "blue"
        updateBtn.style.color = "white"


        
    }

    

  return (
      <div>
          <div className='add-note-section'>
              <form id='form' onSubmit={saveChanges}  action="">
                  <input id='title-content' value={titleName} onChange={handleChange}  name='title' className='title' type="text" placeholder='Enter a Title' required />
                  <textarea onChange={handleMessage} id='textarea-content' className="text-area" >{ message }</textarea>
                      
                 
                  
                  <div className="buttons">
                      <Link className='link' to="/">
                          <button>Cancel</button>
                      </Link>
                      <button id='update' type="submit">
                        Add
                      </button>
                     
                       
                    
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Editnote;