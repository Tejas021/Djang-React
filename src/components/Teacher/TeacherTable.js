import React from 'react'
import {useState,useEffect} from 'react'
// import axios from 'axios'



   
    // const data =  axios.get('http://localhost:8000/api/studenttable/').then((res)=>res.json())
//    let data2
//     axios.get('http://localhost:8000/api/studenttable/')
//     .then(res => {
//         data2 = res.data2;
//         console.log(data2)
//     })
//     .catch(err => {})
   
// const t=fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// const data=[{'id':1,'name':'tejas' ,'marks':20},{'id':2,'name':'tejas' ,'marks':20},{'id':3,'name':'tejas' ,'marks':20}]

const TeacherTable = () => {
    const [marks, setMarks] = useState([])

    useEffect(() => {
        const getMarks = async () => {
          const tasksFromServer = await fetchMarks()
          setMarks(tasksFromServer)
        }
        getMarks()
      }, [])

      const fetchMarks = async () => {
        const data = await fetch('http://localhost:8000/api/teachertable/').then((res)=>res.json())
        return data
      }
    
    
    return (
        
        <div>
            <div className="TableCont">
            <div className="table-responsive">
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col" rowSpan="2">Roll no</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>IA-1</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>IA-2</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>Term Work</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>
            End Sem exam
          </th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>
            Total pointer
          </th>
        </tr>
      </thead>
      <thead>
        <tr>

    
          <th scope="col"></th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
        </tr>
      </thead>
     <tbody>       
{/* {console.log()} */}
     {
     marks.map((data) => (
        // <th style={{color:'white',background:'black'}}>{data.id}</th>
        
        <tr key={data.id}>
        <th >{data.student_roll}</th>
      <td>{data.ia1}</td>
      <td>20</td>
      <td>{data.ia2}</td>
      <td>20</td>
      <td>{data.termwork}</td>
      <td>25</td>
      <td>{data.endsem}</td>
      <td>80</td>
      <td>{data.ia1}</td>
      <td>{data.ia1}</td>
     </tr>
     ))}
         
         
         
         
         
         
         </tbody>
    
    
    
    </table>
  </div>
            </div>
                       

        </div>
    )
}

export default TeacherTable
