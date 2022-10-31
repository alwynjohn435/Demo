import React from "react";
import pic from './Images/dribble.jpg'
export default function AllData(props){
    return(
        <>
<div className="col-12 text-center ">

<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={pic} className="img-fluid rounded-start" alt="..."/>
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
</div>
        </>
    )
}