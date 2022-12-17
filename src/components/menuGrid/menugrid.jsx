import React from 'react'
import './menugrid.scss'
import MenuItem from '../menuItem/menuItem'
import {getCategory} from '../../services/user.service'
import Pagination from '@mui/material/Pagination';




function Menugrid({success, setSuccess}) {
    const [items,setItems] = React.useState([]);
    const [loading,setLoading] = React.useState(false);
    const [currentPage,setCurrentPage] = React.useState(1);
    const [allData,setAllData] =  React.useState();
    

    React.useEffect(()=>{
       const fetch = async() =>{
            try{
             setLoading(true)
             const res = await getCategory((currentPage-1) *6);
             setItems(res.data.records);
             setAllData(res.data.total_records_count);
             setSuccess(false)
             setLoading(false)
            }
            catch(err){
             console.log(err)
            }
        }
        fetch();
    },[success,currentPage])

    const toUpperCase = (string) =>{
        return string[0].toUpperCase() + string.slice(1)
       }  
       
   
    
  return (
    <div className="grid-container">
    {items.map((item)=>{
          
       
        return (
            
            <div className='grid-item' key={item.id}>
            <MenuItem 
            title = {toUpperCase(item.category_name)}
            image = {item.logo_url}
            id={item.id}
            items={items}
            setItems ={setItems}
            status ={item.status}
            
            />
            </div>
        )
    })}
    <div className="paginationContainer">
     <Pagination count={Math.ceil(allData/6)} size="small" onChange={( e,value) => setCurrentPage(value)} className='pagination'/>
    </div>
    
    </div>
  )
}

export default Menugrid