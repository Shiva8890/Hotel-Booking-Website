let headertag = ` <div class="header" ><a  href="index.html"><img class="logo" src="assests/images/logo.png" alt="logo" /></a>
                       <button type="button" id="loginButton" onclick="logout()" class="btn btn-light btn-sm" data-backdrop="false" data-toggle="modal" data-target="#loginModal">LOGIN
                       </button>
                        </div>
     <!-- Modal -->
                    <div class="modal" tabindex="-1" id="loginModal">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">Please Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body" style="margin: 5%;">
                        <form>
                            <div class="form-group d-flex">
                            <label for="username" class="col-form-label" style="margin: 0 30px;">Username:</label>
                            <input type="text" required placeholder="Enter Username" class="form-control" id="username">
                            </div>
                            <br>
                            <div class="form-group d-flex">
                            <label for="password" class="col-form-label" style="margin: 0 30px;">Password:</label>
                            <input type="password" required placeholder="Enter Password" class="form-control" id="password"></textarea>
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="login()">Login</button>
                        </div>
                    </div>
                </div>
            </div> `;

 document.getElementById('header').innerHTML= headertag;    

let footertag = ` <section id="contactus">
                      <button type="button" href="login.html" class="btn btn-info" data-backdrop="false" data-toggle="modal" data-target="#contact">
                        Contact
                      </button>
                    </section>

                    <section id="copy">
                    <p>&copy 2020 ROOM Search PVT.LTD</p>
                    </section>

                    <section id="fit">
                    <a href="https://www.facebook.com" target="_blank">
                        <img class="social" src="assests/images/facebook.png" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img class="social" src="assests/images/instagram.png"/>
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                        <img class="social" src="assests/images/twitter.png"/>
                    </a> 
                    </section> 

    <!-- Modal -->

                    <div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div class="modal-dialog" role="document">
                       <div class="modal-content">
                           <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">Get In Touch</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                           </button>
                           </div>
                           <div class="modal-body">
                   
                               Thank you for reaching out!!!
                           </p>
                           <p>Please enter your email and we will get back to you.</p>
                           <form action="index.html">
                               <input type="email" required autocomplete="off" placeholder="Enter your email"/><br>
                           </form>
                           </div>
                           <div class="modal-footer">
                           <button type="button" class="btn btn-primary">Submit</button>
                           </div>
                       </div>
                       </div>
                   </div> ` 

                    document.getElementById('footer').innerHTML= footertag;

// localStorage.setItem("name","admin")
// document.getElementById('exampleModal').innerText=localStorage.getItem("name");

let login = (e) => {

    let btn = document.getElementById("loginButton");

    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");

    localStorage.setItem("isLogin", "false");

    // e.preventDefault();

    let uname = document.getElementById("username");
    let pswrd = document.getElementById("password");

    if(
        uname.value === localStorage.getItem("username") && pswrd.value === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLogin", "true");
        alert("Successfully logged in!");

        btn.dataset.target = '';
        btn.innerText = "LOGOUT";

        document.getElementById('payNowButton').disabled = false;
        console.log("Inside logout function");
    } else {
        alert("Enter valid credentials...");

        uname.value = '';
        pswrd.value = '';
    }
};

function logout() {
    let btn = document.getElementById("loginButton");
    btn.innerText = "LOGIN";
    document.getElementById('payNowButton').disabled = true;
}

