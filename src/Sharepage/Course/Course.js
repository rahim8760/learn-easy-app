import React from 'react';

const Course = ({cours}) => {
const{image_url, name, details,price,rating, author,enroll}=cours
    return (
        <div className=''>
           <div className="card w-96 bg-base-100 shadow-xl grid-rows-3">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    </h2>
                    <div className="card-actions justify-between ">
                        <div>
                            <img className='w-16' src={author.img} alt="" />
                        </div>
                        <div>

                        <div className="justify-start"><small>Modaretor Name {author.name}</small></div> 
                        <div className="justify-end"><small>Publish Date {author.published_date}</small></div>
                        </div>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline bg-red-500">Price $ {price}</div> 
                    <div className="badge badge-outline bg-amber-200">Student Enroll {enroll}</div>
                    </div>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Read More</button>
                        <button className="btn btn-primary">Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;