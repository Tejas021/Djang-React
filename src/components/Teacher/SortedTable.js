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
        const sortlist= fetch('http://localhost:8000/api/sort').then((res)=>res.json())
        return sortlist
    }

return (
<div >
    <h4 style={{margin: "20px",textAlign:'left'}}>Sorted Students :</h4>
         
<div className="container-fluid">
    <div className="row">
<div className="col-md-4 bg-danger table-responsive"><table className='table'>

<thead><tr><th>Slow Learners</th></tr></thead>
<tbody>
{(!sortList.slow)?<tr><td>loading</td></tr>:sortList.slow.map((roll)=>(<tr key={roll.id}><td>{roll}</td></tr>))}
</tbody>

</table></div>




<div className="col-md-4 bg-warning table-responsive"><table className='table'>

<thead><tr><th>Average Learners</th></tr></thead>
<tbody>
{(!sortList.med)?<tr><td>loading</td></tr>:sortList.med.map((roll)=>(<tr key={roll.id}><td>{roll}</td></tr>))}
</tbody>

</table></div>

<div className="col-md-4 bg-success table-responsive"><table className='table table-hover'>

<thead><tr><th>Fast Learners</th></tr></thead>
<tbody>
{(!sortList.fast)?<tr><td>loading</td></tr>:sortList.fast.map((roll)=>(<tr key={roll.id}><td>{roll}</td></tr>))}
</tbody>

</table></div>


    </div>
</div>
       
</div>
    )
}

export default SortedTable
// {(!sortList.fast)?<tr><td>loading</td></tr>:sortList.fast.map((roll)=>(<tr key={roll.id}><td>{roll}</td></tr>))}