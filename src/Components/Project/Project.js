import React from 'react';
import Navbar from '../Nabvar/Navbar';
import "./Project.css";
import project2 from "../../images/project2.PNG";
import project1 from "../../images/project1.jpg";
import project3 from "../../images/project3.PNG";
import project4 from "../../images/project4.PNG";
import project5 from "../../images/project5.PNG";
import project6 from "../../images/project6.png";
import project7 from "../../images/project7.PNG";
import project8 from "../../images/project8.jpg";

const Project = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>

                <h2 class="h1-responsive font-weight-bold my-5 text-center">My best projects</h2>
                <hr />
                <br />
                <div class="row d-flex justify-content-center">


                    {/* // project 1 */}
                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project1} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <a href="https://drive.google.com/file/d/1y91xmzYl5R0DHpFP7Ri4jrg0CZE5XC5K/view" class="green-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>E-courier for RMG industry</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Online Sample Delivery System for RMG Industries using <strong style={{ color: "red" }}>Django</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>Live Tracking System using JavaScript & Online Payment System (using Stripe)</li>
                                <li>Client & Driver Dashboard </li>
                                <li>Client Send Delivery Request & Drive accept Delivery request & Rating System</li>
                                <li>CRM for System Admin (Dashboard)</li>
                                <h5><strong style={{ color: "green" }}>Technology -</strong> Python, Django, HTML/CSS, Bootstrap, Javascript</h5>

                            </p>
                            <a type="button" href="https://github.com/iamlaboniraz/E-courier-Project-for-RMG-Industry" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://drive.google.com/file/d/1A39nyEt6nEFCUoYhZxRuFTOsGgnn_Yad/view" target="_blank" class="btn-link btn btn-success btn-rounded btn-md"> Report</a>
                            <a type="button" href="https://drive.google.com/file/d/1y91xmzYl5R0DHpFP7Ri4jrg0CZE5XC5K/view" target="_blank" class="btn-link btn btn-success btn-rounded btn-md"> Paper</a>
                        </div>
                    </div>
                    {/* end project 1 */}


                    {/* project 2 */}
                    <div class="col-md-6 col-xl-5 mb-4">
                        <div class="view overlay rounded z-depth-2">
                            <img src={project2} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <a href="" class="blue-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-eye pr-2"></i>Hotel Management</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Hotel management project using<strong style={{ color: "red" }}>Django</strong></h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>Reservation form</li>
                                <li>Room Information</li>
                                <li>Reservation Information</li>
                                <li>User Access(Staff)</li>
                                <li>Checkout and Check-In</li>
                                <h5><strong style={{ color: "green" }}>Technology -</strong> Python, Django, HTML/CSS, Bootstrap, Javascript</h5>

                            </p>
                            <a href="https://github.com/iamlaboniraz/hotel-management-using-django" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="http://hotel.iwx.me/" target="_blank" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
                        </div>
                    </div>
                    {/* end project 2 */}
                </div>
                <hr className="projects" />
                <div class="row d-flex justify-content-center">

                    {/* PROJECT 3 */}
                    <div class="col-md-6 col-xl-5 mb-md-0 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project3} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-md-0">
                            <a href="" class="brown-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>Kids Day Care</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Kids Day Care Using <strong style={{ color: "red" }}>React & NodeJs</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>Home Page (List of the all info like our services, about, testimonials & so on)</li>
                                <li> Admin Dashboard (Admin can manage CRUD)</li>
                                <li>User Profile Page</li>

                                <h5><strong style={{ color: "green" }}>Technology -</strong> React, Router, NodeJS, MongoDB, Bootstrap, Firebase, Material-UI</h5>

                            </p>
                            <a href="https://github.com/iamlaboniraz/Kids-day-care" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://kids-day-care.web.app/" target="_blank" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
                        </div>
                    </div>
                    {/* end project 3 */}


                    {/* project 4 */}
                    <div class="col-md-6 col-xl-5">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project4} class="img-fluid"
                                alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-0">
                            <a href="" class="cyan-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-phone pr-2"></i>Shop Raw Materials</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Shop Raw Materials using <strong style={{ color: "red" }}>React & NodeJs</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>Home Page (List of Products)</li>
                                <li>Checkout</li>
                                <li>Order Page (For user)</li>
                                <li>Admin Dashboard</li>

                                <h5><strong style={{ color: "green" }}>Technology -</strong> React, Router, NodeJS, MongoDB, Bootstrap, Firebase</h5>

                            </p>
                            <a href="https://github.com/iamlaboniraz/Shop-Raw-Materials" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" target="_blank" href="https://fresh-valley-bee25.web.app/" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>

                        </div>
                    </div>
                    {/* end project 4 */}


                </div>
                <hr className="projects" />

                <div class="row d-flex justify-content-center">

                    {/* PROJECT 5 */}
                    <div class="col-md-6 col-xl-5 mb-md-4 mt-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <img style={{ height: "500px", width: "400px" }} src={project5} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-md-0">
                            <a href="" class="brown-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>Mobile Apps</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Hotel Management Mobile apps using <strong style={{ color: "red" }}>Python Kivy</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>Reservation form</li>
                                <li>Room and Reservation Information</li>
                                <li>Checkout and Checkin</li>
                                <h5><strong style={{ color: "green" }}>Technology -</strong> Python Kivy, SQLite</h5>
                            </p>
                            <a href="https://github.com/iamlaboniraz/hotel-system-mobile-apps-using-kivy" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                        </div>
                    </div>
                    {/* end project 5 */}


                    {/* project 6 */}
                    <div class="col-md-6 mt-5 col-xl-5">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project6} class="img-fluid"
                                alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-0">
                            <a href="" class="cyan-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-phone pr-2"></i>Foo bar Challenge</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">My <strong style={{ color: "red" }}>Google Foobar</strong> Challenge Experience</h4>
                            <p>
                                The challenge consists of 5 levels consisting of algorithm problems. 
                                It was really a great experience so far. The first few levels were relatively easy,
                                 but as the levels peaked up, the difficulty gained heights. I spent lot of hours for 
                                 finishing every challenge.
                                <br/>
                                Currently I am almost finish my level 4 and then just have one more label to go.
                                <h5><strong style={{ color: "green" }}>Technology -</strong> Python, Data structure & Algorithm</h5>
                            </p>
                            <a href="https://github.com/iamlaboniraz/my-google-foobar-experience" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>

                        </div>
                    </div>
                    {/* end project 6 */}


                </div>

                <hr className="projects" />

                <div class="row d-flex justify-content-center">

                    {/* PROJECT 7 */}
                    <div class="col-md-6 col-xl-5 mb-md-4 mt-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project7} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-md-0">
                            <a href="" class="brown-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>Travel Way</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Online Vehicle choose for traveling using <strong style={{ color: "red" }}>React</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>List of all Vehicles</li>
                                <li>Login Page</li>
                                <li>Detail Page</li>
                                <h5><strong style={{ color: "green" }}>Technology -</strong> React</h5>
                            </p>
                            <a href="https://github.com/Porgramming-Hero-web-course/react-auth-iamlaboniraz" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://6056223696f8a4726649311a--cranky-nightingale-9179b6.netlify.app/" target="_blank" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
                        </div>
                    </div>
                    {/* end project 7 */}


                    {/* project 8 */}
                    <div class="col-md-6 mt-5 col-xl-5">

                        <div class="view overlay rounded z-depth-2">
                            <img src={project8} class="img-fluid"
                                alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-0">
                            <a href="" class="cyan-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-phone pr-2"></i>Online Pizza Order</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Online Pizza Ordering project using<strong style={{ color: "red" }}>Django</strong> </h4>
                            <p>
                                <strong style={{ color: "orange" }}> Features - </strong>
                                <li>List of all Foods</li>
                                <li>Choose Pizza</li>
                                <li>Order page</li>
                                <h5><strong style={{ color: "green" }}>Technology -</strong> Djnago</h5>
                            </p>
                            <a href="https://github.com/iamlaboniraz/pizza_ordering" target="_blank" class="btn btn-success btn-rounded btn-md"> Github</a>
                        
                        </div>
                    </div>
                    {/* end project 8 */}


                </div>


            </div>
        </>
    );
};

export default Project;