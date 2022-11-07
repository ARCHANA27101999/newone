import React from 'react'
import './JOBAPPLI.css'


function JOBAPPLI() {
  return (
    <div>
        <div class="container"> 
            <div class="applybox">
                <h1 class="titleweb">job application<span>(web)</span></h1>   {/* //span used becoz line marathea erikkyan */}
                <form action="">
                    <div class="form-container">
                        <div class="form-control">
                            <label for="first-name">first name</label>
                            <input id="first-name" name="first-name"></input>

                        </div>
                        <div class="form-control">
                            <label for="Lastname">Lastname</label>
                            <input id="Lastname" name="Lastname"></input>

                        </div>
                        <div class="form-control">
                            <label for="email">email</label>
                            <input id="email"></input>

                        </div>
                        <div class="form-control">
                            <label for="job_role">job Role</label>
                            <select id="job_role">
                                <option value=""> select jonb role</option>
                                <option value="front"> front</option>
                                <option value="backend"> backnd</option>
                            </select>

                        </div>
                        <div class="form-control">
                            <label for="address">Address</label>
                            <textarea id="address" name="address" rows="4" cols="50" placeholder='enter address'></textarea>

                        </div>
                        <div class="form-control">
                            <label for="city">city</label>
                            <input id="city" name="city"></input>

                        </div>
                        <div class="form-control">
                            <label for="pincode">pincode</label>
                            <input id="pincode" name="pincode"></input>

                        </div>
                        <div class="form-control">
                            <label for="date">date</label>
                            <input id="date" value="2022-02-10" type="date" name="date"></input>

                        </div>
                        <div class="form-control">
                            <label for="upload">upload your cv</label>
                            <input id="upload"  type="file" ></input>

                        </div>


                    </div>
                    <div class="button-container" >
                        <button type="submit">apply now</button>
                    </div>

                </form>
              
            </div>

        </div>
    </div>
  )
}

export default JOBAPPLI