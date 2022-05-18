import React, { useRef, useState } from 'react';

const AddTask = () => {

    const nameRef=useRef();
    const descriptionRef= useRef();

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');


    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const name=nameRef.current.value;
        const description=descriptionRef.current.value;

        setName(name);
        setDescription(description);
        
    } ;
        
        
    
    return (
      <div>
        <div>
          <form onClick={handleFormSubmit}>
            <input ref={nameRef} type="text" placeholder="Task Name" />
            <input
              ref={descriptionRef}
              type="text"
              placeholder="Task Details"
            />
            <button >+</button>
          </form>
        </div>

        <h4>TODO Name: {name}</h4>
        <p>Description: {description}</p>
      </div>
    );
};

export default AddTask;