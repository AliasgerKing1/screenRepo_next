import React from 'react'

const Sidebar = () => {
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
      {/* <a *ngFor="let c of Category" style="cursor: pointer">{ c }</a> */}
    </div>
  </div>
</section>

    </>
  )
}

export default Sidebar