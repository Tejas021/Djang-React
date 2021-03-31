import {useEffect,useState} from 'react'

const SortedTable = () => {
    const [sortList, setsortList] = useState([])


    useEffect(() => {
        const fetchSorted=async()=>{
            const sorted= await getSortList()
            setsortList(sorted)
        }
       
        fetchSorted()
    }, [])


    const getSortList= async()=>{
        const sortlist=await fetch('http://localhost:8000/api/sort').then((res)=>res.json())
        return sortlist
    }

return (
<div className="TableCont">
    <h4 style={{marginLeft: "20px",textAlign:'left'}}>Sorted Students</h4>
    <div className="table-responsive">
        <table className="table table-bordered table-dark">
            <thead>
                <tr>
                    {console.log(sortList)}
                    <th scope="col" colSpan="1" style={{textAlign:'center'}}>Slower Leaners</th>
                    <th scope="col" colSpan="1" style={{textAlign:'center'}}>Average Leaners</th>
                    <th scope="col" colSpan="1" style={{textAlign:'center'}}>Faster Leaners</th>
               </tr>
            </thead>
            
            <tbody>

   
                <tr>
                
                    <td>da</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                   
                </tr>
                <tr>
                 
                    <td>vhgu</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                   
                </tr>
                <tr>
                    
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                   
                </tr>
                <tr>
                    
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                   
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default SortedTable
