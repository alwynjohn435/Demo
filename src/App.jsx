

import React from "react";
 import Dataapi from "./Dataapi";
import pic from './Images/google.png'
import './mystyle.css'
export default function App(){
    return(

<>

<div className="bg1">
<div className="container shadow-none p-1 rounded-4 mb-5   ">
  <div className="row">
    <div className="col bg-body rounded-start ">
    <h1 className="my-5 fs-4 fw-bold mx-4"><span className="text-primary">Hunt</span> Jobs</h1>
    
    <ul className="nav flex-column">

  <li className="nav-item">
  <a className="nav-link active my-4 text-dark mx-4" aria-current="page" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</a>
  </li>
  <li className="nav-item">
  <a className="nav-link py-2 mx-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>&nbsp;&nbsp;&nbsp;FindWork</a>
  </li>
  <li className="nav-item">
    <a className="nav-link py-4 text-dark mx-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;My Jobs</a>
  </li>
  <li className="nav-item">
    <a className="nav-link py-4 text-dark mx-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>&nbsp;&nbsp;&nbsp;My Activity</a>
  </li>
  <li className="nav-item">
    <a className="nav-link py-4 text-dark mx-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>&nbsp;&nbsp;&nbsp;Messages</a>
  </li>
  <li className="nav-item">
    <a className="nav-link py-3 text-dark mx-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-bar-graph-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reports</a>
  </li>
  
</ul>


    </div>
    <div className="col bg ">
    <nav className="navbar">
  <form className="container-fluid">
    <div className="input-group">
      
      <input type="text" className="form-control rounded-5 my-5" placeholder="Search by category,company,or" aria-label="Username" aria-describedby="basic-addon1"/>
     
    </div>
  </form>
  <button type="button" className="btn btn-primary  mb-5 mx-1 rounded-5 w-25">UX Designer</button>
  <button type="button" className="btn btn-outline-dark mx-1 mb-5 rounded-5 btn-light w-25">UI Designer</button>
  <button type="button" className="btn btn-primary   rounded-5 mx-1 mb-5 w-25">Product Designer</button>
  <h5 className="fw-light fs-5 mb-5 text-primary">Clear filters</h5>
  <h5 className="mb-4 fw-semi-bold">Jobs For You<span className="mx-3 text-primary">Popular</span></h5>
  
</nav>

<Dataapi/>
</div>
    
    <div className="col bg-body rounded-end">
    <img src={pic} className="w-25 rounded-4  my-5 img-fluid mx-auto d-block"/>
    <h5 className="bg2 text-center">Data Jobs</h5>
    <h5 className="fw-light bg3 text-center">Data inc Shanghai China</h5>
 
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
<button type="button" className="btn btn-primary border rounded-5 btn-lg my-4 w-75">Apply now</button>
    </div>
  </div>
</div>
</div>
</>
    )
}