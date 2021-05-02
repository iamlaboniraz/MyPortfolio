import React from 'react';
import Navbar from '../Nabvar/Navbar';
import "./Project.css";
import project2 from "../../images/project2.PNG";
import project1 from "../../images/project1.jpg";
import project3 from "../../images/project3.PNG";
import project4 from "../../images/project4.PNG";
import project5 from "../../images/project5.PNG";
import project6 from "../../images/project6.png";
import { Button } from '@material-ui/core';

const Project = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>

                <h2 class="h1-responsive font-weight-bold my-5 text-center">My best projects</h2>
                <hr/>
                <br/>
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
                            <h4 class="font-weight-bold mb-3">Online Sample Delivery System for RMG Industries using <strong style={{color:"red"}}>Django</strong> </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum a mollitia, pariatur tempora
                            est voluptatum eius iusto dolorum corporis, aperiam, distinctio libero
                                     aspernatur eaque magni dicta totam. Dolorem, dolorum commodi!</p>
                            <a type="button" href="https://github.com/iamlaboniraz/E-courier-Project-for-RMG-Industry" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://drive.google.com/file/d/1A39nyEt6nEFCUoYhZxRuFTOsGgnn_Yad/view" class="btn-link btn btn-success btn-rounded btn-md"> Report</a>
                            <a type="button" href="https://drive.google.com/file/d/1y91xmzYl5R0DHpFP7Ri4jrg0CZE5XC5K/view" class="btn-link btn btn-success btn-rounded btn-md"> Paper</a>
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
                            <h4 class="font-weight-bold mb-3">Hotel management project using<strong style={{color:"red"}}>Django</strong></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum a mollitia, pariatur tempora
                            est voluptatum eius iusto dolorum corporis, aperiam, distinctio libero
                                     aspernatur eaque magni dicta totam. Dolorem, dolorum commodi!</p>
                            <a href="https://github.com/iamlaboniraz/hotel-management-using-django" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="http://hotel.iwx.me/" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
                        </div>
                    </div>
                    {/* end project 2 */}
                </div>

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
                            <h4 class="font-weight-bold mb-3">Kids Day Care Using <strong style={{color:"red"}}>React & NodeJs</strong> </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt fuga nulla delectus quos. 
                                Et pariatur sapiente laborum ea,
                                 illo dolor ex assumenda quia hic porro impedit nobis obcaecati natus.
                            </p>
                            <a href="https://github.com/iamlaboniraz/Kids-day-care" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://kids-day-care.web.app/" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
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
                            <h4 class="font-weight-bold mb-3">Shop Raw Materials using <strong style={{color:"red"}}>React & NodeJs</strong> </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, laborum accusamus, rem asperiores 
                                laboriosam quaerat saepe quibusdam dicta nobis quo quae corrupti! 
                                Consectetur laborum praesentium pariatur ratione, ullam delectus. Praesentium.</p>
                            <a href="https://github.com/iamlaboniraz/Shop-Raw-Materials" class="btn btn-success btn-rounded btn-md"> Github</a>
                            <a type="button" href="https://fresh-valley-bee25.web.app/" class="btn-link btn btn-success btn-rounded btn-md"> Website</a>
                        
                        </div>
                    </div>
                    {/* end project 4 */}


                </div>

                <div class="row d-flex justify-content-center">

                    {/* PROJECT 5 */}
                    <div class="col-md-6 col-xl-5 mb-md-4 mt-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <img style={{height:"500px",width:"400px"}} src={project5} class="img-fluid" alt="Sample project image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-md-0">
                            <a href="" class="brown-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>Mobile Apps</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Hotel Management Mobile apps using <strong style={{color:"red"}}>Python Kivy</strong> </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt fuga nulla delectus quos. 
                                Et pariatur sapiente laborum ea,
                                 illo dolor ex assumenda quia hic porro impedit nobis obcaecati natus.
                            </p>
                            <a href="https://github.com/iamlaboniraz/hotel-system-mobile-apps-using-kivy" class="btn btn-success btn-rounded btn-md"> Github</a>
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
                            <h4 class="font-weight-bold mb-3">My <strong style={{color:"red"}}>Google Foobar</strong> Challenge Experience</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, laborum accusamus, rem asperiores 
                                laboriosam quaerat saepe quibusdam dicta nobis quo quae corrupti! 
                                Consectetur laborum praesentium pariatur ratione, ullam delectus. Praesentium.</p>
                            <a href="https://github.com/iamlaboniraz/my-google-foobar-experience" class="btn btn-success btn-rounded btn-md"> Github</a>
                        
                        </div>
                    </div>
                    {/* end project 6 */}


                </div>


            </div>
            </>
    );
};

export default Project;