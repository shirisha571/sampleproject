import logo from './logo.svg';
import './App.css';
import {MdClose} from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from "axios"
import Formtable from './components/formTable';

axios.defaults.baseURL = "http://localhost:3000/"

function App() {
  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)
  const [formData,setFormData] = useState({
    name : "",
    email : "",
    mobile : "",
    id :""
  })

  const [formDataEdit,setFormDataEdit] = useState([])

  const handleOnChange = (e)=>{
    const {value,name} = e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name] : value
      }

    })
  }

  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
    }
  }
  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])

  const handleSubmitandleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
      
      if(data.data.success){
        getFetchData()
        alert(data.data.message)

      }
    }
    const handleUpdate = asynce(id) => {


    }
    const handleEditOneChange = async()=>{
      const {value,name} = e.target
    setFormEdit((preve)=>{
      return{
        ...preve,
        [name] : value
      }

    })

    }

    
  
  return (
    <>
       <div className="container">
        <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add details</button>
      {
        addSection && (
          <Formtable
          handlsubmit={handleSubmit}
          handleOneChange={handleOneCange}
          handleclose = {()=>setAddSection(false)}
          />
        )
      }

      {
        editSection && (
          <Formtable
          handlsubmit={handleSubmit}
          handleOneChange={handleOneCange}
          handleclose = {()=>setEditSection(false)}
          />

        )
      }
      <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>
                  
                </th>
              </tr>
            </thead>
            
              { dataList[0] ? (
                <tbody>
                  dataList.map((el) => {
                  return(
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.mobile}</td>
                    <td>
                      <button className='btn btn-edit' onClick={()=>
                        setEditSection(true)
                      }>Edit</button>
                      <button className='btn btn delete' onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                  )
                  </tbody>
                }))
                
                : (
                  <p style={{textAlign:"center"}>No data</p>
                )
              }
          </table>
        </div>

        
       </div>
    </>
  );
}

export default App;
