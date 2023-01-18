import React, {useState} from "react";

function NewTaskForm( {onTaskFormSubmit, categories} ) {
  const [newItemFields, setNewItemsFields] = useState( {
    text: "", 
    category: "Code"
  } )

  function handleFields(e){
    const {name, value} = e.target
    setNewItemsFields({...newItemFields, [name]: value})
  }
  return (
    <form className="new-task-form" onSubmit ={(e) => {
      e.preventDefault()
      onTaskFormSubmit(newItemFields)
    }}>
      <label>
        Details
        <input type="text" name="text" value = {newItemFields.text}
        onChange = {handleFields}/>
      </label>
      <label>
        Category
        <select name="category" value ={newItemFields.category}
        onChange = {handleFields}>
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (
            <option key = {index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
