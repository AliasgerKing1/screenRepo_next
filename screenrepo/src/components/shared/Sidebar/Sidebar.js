import React from 'react'
import {useSelector} from "react-redux"
const Sidebar = () => {


  let state = useSelector(state=>(state.AllImageReducer))
  console.log(state)
  return (
    <>
    <section>
  <div className="sidebar">
    <div className="row">
      <div className="col-md-2">
        <img src="/assets/images/logo.svg" alt="logo" className="ms-5" />
      </div>
    </div>
    <p className="para ms-4">Apps</p>
    <div className="group ms-2">
    {
state.map((c)=> {
return(
  <a style={{cursor: 'pointer'}} key="c._id">{ c }</a>
)
})
    }
      
    </div>
  </div>
</section>

    </>
  )
}

export default Sidebar