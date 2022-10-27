import React from 'react';
import Carousel from '../../Sharepage/Carousel/Carousel';

const Blog = () => {
    return (
        <div>
            <Carousel></Carousel>
                
                <div className="grid max-w-sm gap-5 m-auto w-100 mb-8 lg:grid-cols-4 sm:mx-auto lg:max-w-full">
                    <div className="px-10 py-20 border rounded lg:px-5 lg:py-10 xl:py-20">
                        
                        
                        <a
                            href="/"
                            className="text-center text-2xl inline-block max-w-xs mx-auto md-5 font-extrabold leading-7"
                        >
                            What is Cors ?
                        </a>
                        <p className="max-w-xs mt-8 mx-auto mb-2 text-gray-700">
                        An HTTP-header based system called Cross-Origin Resource Sharing (CORS) enables a server to specify any origins (domain, scheme, or port) other than its own from which a browser should be able to load resources. Additionally, CORS depends on a method wherein browsers send a "preflight" request to the server hosting the cross-origin resource to see if the server would allow the actual request
                        </p>
                        
                    </div>
                    <div className="px-10 py-20 border rounded lg:px-5 lg:py-10 xl:py-20">
                        
                        <a
                            href="/"
                            className="text-center text-2xl inline-block max-w-xs mx-auto md-5 font-extrabold leading-7"
                        >
                            Why are you using firebase.What other options do you have to improve authentication?
                        </a>
                        <p className="max-w-xs mt-8  mx-auto mb-2 text-gray-700">
                        The Firebase Realtime Database lets you build strong, collaborative apps by giving secure access to the database directly from client-side code. A responsive experience is offered because to local data storage and real-time events that continue to occur even while the user is offline.
Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        </p>
                        
                    </div>
                    <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">
                        
                        <a
                            href="/"
                            className="text-center text-2xl inline-block max-w-xs mx-auto md-5 font-extrabold leading-7 "
                        >
                            How does private route works?
                        </a>
                        <p className="max-w-xs mt-8  mx-auto mb-2 text-gray-700">
                        If the user is signed in, the react private route component will render children, or child components. The user gets sent to the /login page if they are not logged in, with the return url passed in the location state propertye experience.
                        </p>
                        
                    </div>
                    <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">
                        
                        <a
                            href="/"
                            className="text-center text-2xl inline-block max-w-xs mx-auto  font-extrabold leading-7"
                            aria-label="Read article"
                        >
                            What is Node and  how dose it use for ?
                        </a>
                        <p className="max-w-xs mx-auto mt-8 mb-2 text-gray-700">
                        A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to.
Node enables programmers to create JavaScript code that executes within the computer's operating system rather than a browser. Because Node has access to the operating system, file system, and everything else needed to create fully functional apps, it may be used to create server-side applications.

                        </p>
                        
                    </div>
                    
                </div>
            
        </div>
    );
};

export default Blog;