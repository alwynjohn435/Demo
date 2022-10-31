

import React from "react";
 import Dataapi from "./Dataapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add( faCoffee);
export default function App(){
    return(

<>
<br/>
<br/>
<br/>
<br/>
<div class="container text-center bg-light shadow-none p-1  mb-5 bg-light rounded-4">
  <div class="row">
    <div class="col">
    <h1 className="my-1 fs-4 fw-semibold">Hunt Jobs</h1>
    
    <ul class="nav flex-column">
   
  <li class="nav-item">
  <FontAwesomeIcon icon={faCoffee} /><a class="nav-link active py-4 my-4 text-dark" aria-current="page" href="#" >Home</a>
  </li>
  <li class="nav-item">
  <a class="nav-link py-5" href="#">FindWork</a>
  </li>
  <li class="nav-item">
    <a class="nav-link py-4 text-dark" href="#">My Jobs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link py-4 text-dark" href="#">My Activity</a>
  </li>
  <li class="nav-item">
    <a class="nav-link py-4 text-dark" href="#">Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link py-3 text-dark" href="#">Reports</a>
  </li>
  
</ul>


    </div>
    <div class="col">
    <nav class="navbar bg-light ">
  <form class="container-fluid">
    <div class="input-group">
      
      <input type="text" class="form-control rounded-5" placeholder="Search by category,company,or" aria-label="Username" aria-describedby="basic-addon1"/>
     
    </div>
  </form>
  <button type="button" class="btn btn-primary btn-sm my-2 rounded-4">UX Designer</button>
  <button type="button" class="btn btn-outline-dark btn-sm my-2 rounded-4">UI Designer</button>
  <button type="button" class="btn btn-primary btn-sm my-2 rounded-4">Product Designer</button>
  <h5 className="fw-light fs-5">Clear filters</h5>
  jobs for you 
  
</nav>
<Dataapi/>
</div>
    
    <div class="col">
    sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto

Last updated 3 mins ago
<hr/>
<h5>Minimum Qualificatons</h5>
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
<h5>Preferred Qualifications</h5>
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
<hr/>
<h5>About the job</h5>
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
<br/>
<button type="button" class="btn btn-primary rounded-5 w-75">Apply now</button>
    </div>
  </div>
</div>

</>
    )
}