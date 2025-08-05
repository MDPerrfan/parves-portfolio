import React, { createContext,  useEffect, useState } from 'react'
import{toast} from 'react-toastify'
import axios from 'axios'
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendUrl="https://devparvesserver.vercel.app/";
    const [projectData,setProjectData]=useState([]);
    const[loading,setLoading]=useState()
    const getProjectData=async()=>{
        try{
            setLoading(true)
            const {data}=await axios.get(backendUrl+'/api/portfolio/get-portfolio-data')
            if(data){
                setProjectData(data.projects);
                setLoading(false)
            }else{
                toast.error("Failed to fetch projects");
            }
        }catch(error){
            console.log(error);
        }
    }

    const value = {
        projectData,
        getProjectData,
        backendUrl,
        loading
    }
    useEffect(()=>{
        getProjectData();
    },[])
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
