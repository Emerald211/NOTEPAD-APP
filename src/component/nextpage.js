import React from 'react'
import {Link} from 'react-router-dom'

function AddNote() {
    const saveData = (e) => {
        e.preventDefault();
        const dataForm = document.querySelector('form');
        const formMessage = document.querySelector('.text-area')
        const date = new Date();
        const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes()
        let AM = ''
        
        
        
        
        
        if (hour < 12) {
          hour = `${date.getHours()}`
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
        

        console.log(dataForm);


        const dataBase = [
        
        ];

        if (!localStorage.getItem("localNote")){
            
            localStorage.setItem("localNote", JSON.stringify(dataBase))
        
            const fetchLocalDatabase = JSON.parse(localStorage.getItem('localNote'));
    
            const data = {
                name: dataForm.title.value,
                message: formMessage.value,
                date: fullDate,
                id: Math.floor((Math.random() * 500) + 1)
            }
    
            fetchLocalDatabase.push(data);
    
    
            console.log(fetchLocalDatabase)
    
            localStorage.setItem("localNote", JSON.stringify(fetchLocalDatabase));
        } else {
            const fetchDb = JSON.parse(localStorage.getItem("localNote")) 

            const parseDb = {
                name: dataForm.title.value,
                message: formMessage.value,
                date: fullDate,
                id: Math.floor((Math.random() * 500) + 1)
            }

            fetchDb.push(parseDb);

            localStorage.setItem("localNote", JSON.stringify(fetchDb))
        }

       


        
        dataForm.reset();

        const addBtn = document.querySelector("#add")

        addBtn.textContent = "Added sucessfully"
        addBtn.style.backgroundColor = "blue"
        addBtn.style.color = "white"
        addBtn.style.width = "130px"

    
    }
  return (
      <div>
          <div className='add-note-section'>
              <form onSubmit={saveData} action="">
                  <input  name='title' className='title' maxLength="10" type="text" placeholder='Enter a Title' required />
                  <textarea className="text-area" ></textarea>
                      
                 
                  
                  <div className="buttons">
                      <Link className='link' to="/">
                          <button>Close</button>
                      </Link>
                      <button id='add' type="submit">
                        Add
                      </button>
                     
                       
                    
                  </div>
              </form>
          </div>
        
      </div>
  )
}

export default AddNote