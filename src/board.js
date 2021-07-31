import React from "react";
import "./main.css";
import "assets/css/black-dashboard.css?v=1.0.0";
import "assets/css/black-dashboard.min.css";
import "assets/css/nucleo-icons.css";
import "https://use.fontawesome.com/releases/v5.0.6/css/all.css";
import "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800";
import "./assets/js/core/jquery.min.js";
import "./assets/js/core/popper.min.js";
import "./assets/js/core/bootstrap.min.js";
import "./assets/js/plugins/perfect-scrollbar.jquery.min.js";
import "./assets/js/black-dashboard.js?v=1.0.0";




//board members
const boardMembers = [
    {
        photo: "sam_d.jpg",
        name: "Samuel Deans",
        position: "Co-President",
        major: "Mechanical, Computer Engineering"
    },
    {
        photo: "mitchell.jpg",
        name: "Mitchell Wu",
        position: "Co-President",
        major: "Computer Science"
    },
    {
        photo: "john.jpg",
        name: "John Yu",
        position: "Vice President",
        major: "Computer Science & Engineering"
    },
    {
        photo: "riya.jpg",
        name: "Riya Goja",
        position: "Treasurer",
        major: "Computer Engineering"
    },
    {
        photo: "andrea.jpg",
        name: "Andrea Ahsue",
        position: "Industry Correspondent",
        major: "Computer Engineering"
    }
    
]

export default function Board() {
    return (

        <div>
                <div> <h2>Board</h2></div>
                <div id="accordion2" role="tablist" aria-multiselectable="true" class="card-collapse">
                    <div id="board" class="card card-plain">
                        <div class="card-header" role="tab" id="headingOne">
                            <h2 class="card-title">
                                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <div class="collapseChild"> 2021-2022</div>
                                    <i class="tim-icons icon-minimal-down"></i>
                                </a>
                            </h2>

                        </div>  
                    </div>
                </div>
                
            
        </div>
    )
}