<template>
  <div id="app">
    <Header msg="Curry your Coins <3 Blog" />
    <Content/>
    <Footer msg="Footer" />
  </div>
</template>

<script>
import Header from "./common/Header";
import Content from "./common/Content";
import Footer from "./common/Footer";

export default {
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f7f7f7 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  font-weight: 300;
}

/* Common Styles */

ul {
  display: inline-flex;
  list-style: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

html,
body,
body div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
figure,
footer,
header,
menu,
nav,
section,
time,
mark,
audio,
video,
details,
summary {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
}

.column {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bottom {
  flex-grow: 1;
}

.btn {
  margin-right: 1rem;
}

.btn:disabled {
  cursor: not-allowed;
}

.form-control:focus,
.btn:focus {
  box-shadow: 0 0 0rem 0.01rem rgba(0, 123, 255, 0.25) !important;
}
</style>
