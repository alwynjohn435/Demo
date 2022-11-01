import React from "react";
import pic from './Images/google.png'
export default function AllData(props){
    return(
        <>
<div className="card mb-3 " style={{width:"620px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={pic} className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


        </>
    )
}