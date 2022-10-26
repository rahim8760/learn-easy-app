import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Topheader = () => {
    return (
        <div className='navbar justify-between'>
            <div className='mx-5 mt-2'>
                <button className='btn btn-circle btn-outline btn-accent mx-2'><FaFacebook></FaFacebook></button>
                <button className='btn btn-circle btn-outline btn-warning mx-2'><FaInstagram></FaInstagram></button>
                <button className=' btn btn-circle btn-outline btn-info mx-2'><FaTwitter></FaTwitter></button>
            </div>
            <div>
                <button className='text-1xl btn btn-outline btn-warning my-2 mx-2'><FaGoogle className='mr-2'></FaGoogle>  Login With Google</button>
                <button className='btn btn-outline btn-drak mx-2 py-0'><FaGithub className='mr-2'></FaGithub>  Login With Github</button>
                
            </div>
        </div>
    );
};

export default Topheader;