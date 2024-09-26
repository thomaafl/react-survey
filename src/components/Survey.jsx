import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialFormData = {
    colour_rating: "",
      activity: [],
      thoughts: "",
      name: "",
      email: ""
  }
  const [answersList, setAnswersList] = useState([])
  const [formData, setFormData] = useState(initialFormData)


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    if (formData.email === ""){
      console.log("write your email please")
      return
    }
    setFormData(initialFormData)
    setAnswersList([...answersList, formData])
  }

  const handleChange = (event) => {
    const { name, value, type } = event.target
    if (type === "checkbox") {
      setFormData((prevData) => {
        const activity = prevData.activity.includes(value) ? prevData.activity.filter((item) => item !== value) : [...prevData.activity, value]
        return { ...prevData, [name] : activity}})
    } else {
      setFormData({...formData, [name] : value})
    }
  } 


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>

      </section>
      <section className="survey__form">{
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            
            <label>
              <input type="radio" name="colour_rating" value="1" onChange={handleChange} /> 1
            </label>
            <label>
              <input type="radio" name="colour_rating" value="2" onChange={handleChange} /> 2
            </label>
            <label>
              <input type="radio" name="colour_rating" value="3" onChange={handleChange} /> 3
            </label>
            <label>
              <input type="radio" name="colour_rating" value="4" onChange={handleChange} /> 4
            </label>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <label>
              <input type="checkbox" name="activity" value="bathing" checked={formData.activity.includes('bathing')} onChange={handleChange} /> Bathing
            </label>
            <label>
              <input type="checkbox" name="activity" value="playing" checked={formData.activity.includes('playing')} onChange={handleChange} /> Playing
            </label>
            <label>
              <input type="checkbox" name="activity" value="cooking" checked={formData.activity.includes('cooking')} onChange={handleChange} /> Cooking
            </label>
            <label>
              <input type="checkbox" name="activity" value="sleeping" checked={formData.activity.includes('sleeping')} onChange={handleChange} /> Sleeping
            </label>
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="thoughts"
              cols="30"
              rows="10"
              onChange = {handleChange}
              value={formData.thoughts}
            ></textarea>
          </label>
          <label
            >Put your name here (if you feel like it):<input
              type="text"
              name="name"
              onChange = {handleChange}
              value= {formData.name}
            />
          </label>
          <label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              onChange = {handleChange}
              value= {formData.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      
      /* a form should be here */}</section>
    </main>
  );
}

export default Survey;
