import React from 'react';
import data from '../Admin/Admin-data';



export const Admin = () => {
  return (
    <div>
        <section className="dashboard-title pt-5 pb-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-name">
          <h5>DASHBOARD</h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="dashboard-menu pb-5">
<div className="container">
    <div className="row">
    <div className="col-md-12">
        <ul className='admin-menu-listing'>
            
        

        {
            data.map((priyanka)=>{
                const {id,name,img}=priyanka
                return(
                  
                        <li key={id}>
                            <a href="#">
                            <div className="menu-icon">
                                <img src={img} className="img-fluid" alt={name} />
                                <div className="icon-name">{name}</div>
                            </div>
                            </a>
                        </li>

                   
                );
            })
        }
        </ul>
    </div>
    </div>
</div>
</section>
    </div>
  )
}
