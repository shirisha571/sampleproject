import React from 'react'import"../App.css"

const Formtable = ({handleSubmit,handleOneChange,andleclose} => {
    return {
     <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={andleclose}><MdClose/></div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" onChange={handleOnChange}/>

          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" onChange={handleOnChange}/>

          <label htmlFor="number">Number : </label>
          <input type="number" id="mobile" name="mobile" onChange={handleOnChange}/>

          <button className="btn">Submit</button>
        </form>
     </div>
    }
}

export default Formtable