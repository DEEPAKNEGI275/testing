<template>
  <div class="header">
    <div class="side-nav">
      <ul class="nav-links">
        <li style="background-color: #f54257">
          <div>
            <router-link to="/" style="color:white">
            <div>
            <b-icon class="b-ico" icon="envelope-fill" font-scale="1.5">
                </b-icon>
            </div>
              HOME</router-link>
          </div>
        </li>       
        <li> 
          <div>
            <router-link to="/">
              <div>
              <b-icon class="b-ico" icon="pencil-square" font-scale="1.5">
                </b-icon>
              </div> Application Form</router-link>
          </div>
        </li>
        <li> 
          <div>
            <router-link to="/">
              <div>
              <b-icon style="color: #2d7033" icon="pencil-square" font-scale="1.5">
                </b-icon> </div>
                Add Aadhar Number </router-link></div></li>
        <li>
          <div><router-link to="/">
            <div>
              <b-icon style="color: #2d7033" icon="pencil-square" font-scale="1.5">
                </b-icon> 
            </div>
              Add EID</router-link>
          </div>
        </li>
        <li> 
          <div>
            <router-link to="/">
              <div>
              <b-icon style="color: #2d7033" icon="arrow-left-right" font-scale="1.5">
                </b-icon> 
              </div>Check Your Status</router-link>
          </div>
        </li>
        <li> 
          <div><router-link to="/">
            <div>
              <b-icon  icon="printer-fill" font-scale="1.5">
                </b-icon> 
            </div>Print Your Application</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/">
              <div>
              <b-icon  icon="lock-fill" font-scale="1.5">
                </b-icon> 
              </div>
                Change Password</router-link>
          </div>
        </li>
        <li style="border-bottom:none">
          <div>
            <router-link to="/">
              <div>
              <b-icon style="color: #a3151c" icon="power" font-scale="1.5">
                </b-icon> 
              </div>
                Logout</router-link>
          </div>
        </li>

        </ul>
  </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.side-nav{
  width: 230px;
  height: 690px;
  position: absolute;
  top:10em;
  left: 5em;
  padding: 0px 0px;
  background: white;
  border: 2px groove;
  border-radius: 5px;
  ;
}

.nav-links{
  list-style: none;
  position: relative;
}
.nav-links li{
  padding: 25px 25px 10px 0px;
  border-bottom: 1px groove;
  text-align: center;
}
.nav-links a{
  color: #4d4d4d;
  position: relative;
text-decoration: none;
font-family: Arial;
font-size: 15px;

text-align: center;
}
.nav-links li:hover a{
  color: brown;
  transition: 0.3s;
}

</style>
