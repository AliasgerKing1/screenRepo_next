import React from 'react'
import {useSelector} from "react-redux"
const Sidebar = () => {


  let state = useSelector(state=>(state.AllImageReducer))
  const comp = state;
  const comp_name = [...new Set(comp.map(obj => obj.compName))];
  return (
    <>
  <div className="sidebar">
    <div className="row">
      <div className="col-md-2">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
    </div>
    <p className="para mt-2 mb-1">Apps</p>
    <div className="group ms-2">
{
  comp_name.map((c)=>( <a style={{cursor: 'pointer'}} key={c}>{ c}</a> ))
}
      
    </div>
  </div>
    </>
  )
}

export default Sidebar