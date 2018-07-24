<template>
  <header class="header">
    <div class="navbar group">
      <div class="container">
        <ul id="menu" class="main-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <!-- SOCIAL & SEARCH -->
        <div class="social-icons">
          <a href="#">
            <icon name="facebook" />
          </a>
          <a href="#">
            <icon name="twitter" />
          </a>
          <a href="#">
            <icon name="google-plus" />
          </a>
          <a href="#">
            <icon name="instagram" />
          </a>
          <a href="#">
            <icon name="pinterest" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
header {
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}

header > div {
  height: 78px;
  font-size: 32px;
  display: flex !important;
  display: -webkit-flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

.navbar {
  background-color: #fff;
  padding: 30px 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.navbar .main-menu {
  float: left;
}

.navbar .main-menu .dropdown {
  position: relative;
}

.navbar .main-menu > li {
  float: left;
  margin-right: 44px;
}

.navbar .main-menu > li a {
  font-family: "Lato", sans-serif;
  color: #080808;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: 400;
}

.social-icons .fa-icon {
  color: #000;
  height: 15px;
}

.navbar .social-icons {
  float: right;
  position: relative;
  z-index: 999;
  display: flex !important;
  display: -webkit-flex !important;
}

.navbar .social-icons a:first-of-type {
  margin-left: 0;
}

.navbar .social-icons a {
  margin-left: 18px;
  color: #080808;
  font-size: 15px;
}

@media only screen and (max-width: 991px) {
  h1 {
    font-size: 1.4rem;
    padding: 1rem 0;
  }
}
</style>
