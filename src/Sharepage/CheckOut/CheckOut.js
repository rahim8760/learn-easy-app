import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const CheckOut = () => {
    const [singlecours]=useLoaderData([])
    const{name, image_url,enroll, author,price,id, details}=singlecours;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      
        content: () => componentRef.current,
    });
    return (
        <div className=''>
           <div  ref={componentRef} className="card w-3/6 my-24 bg-base-100 shadow-xl mx-auto">
                <figure><img className='w-full ' src={image_url} alt="Shoes" /></figure>
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
                    <div>
                            <p>{details}</p> 
                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline bg-cyan-400 py-5 px-2">Price $ {price}</div> 
                        <div className="badge badge-outline bg-fuchsia-500 py-5 px-2">Student Enroll {enroll}</div>
                    </div>
                </div>
            </div>
                    <div className="card-actions justify-end">
                        <button onClick={handlePrint} className="btn btn-primary">Download</button>
                    </div>
        </div>
    );
};

export default CheckOut;