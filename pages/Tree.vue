<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow">
    <ul class="nav navbar-nav">
      <node v-for="(item, i) in items" :key="i" :node="item"></node>
    </ul>
  </nav>
</template>

<script>
import Node from '~/components/Node.vue'

export default {
  components: {
    Node
  },
  data: () => ({

    items: [
        {
          icon: 'mdi-apps',
          title: 'lyr',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-video',
          title: 'Videos',
          to: '/video',
          children: [
                {
                    icon: 'mdi-apps',
                    title: 'Todo',
                    to: '/todo',
                    children: [
                {
                    icon: 'mdi-apps',
                    title: 'Todo',
                    to: '/todo'
                },
                {
                    icon: 'mdi-video-plus',
                    title: 'Video Upload',
                    to: '/upload-video',
                    children: [
                {
                    icon: 'mdi-apps',
                    title: 'Todo',
                    to: '/todo'
                },
                {
                    icon: 'mdi-video-plus',
                    title: 'Video Upload',
                    to: '/upload-video'
                },
            ]
                },
            ]
                },
                {
                    icon: 'mdi-video-plus',
                    title: 'Video Upload',
                    to: '/upload-video'
                },
            ]
        },
        {
          icon: 'mdi-apps',
          title: 'Todo',
          to: '/todo'
        },
        {
          icon: 'mdi-video-plus',
          title: 'Video Upload',
          to: '/upload-video'
        }
      ],
  }),
};
</script>

<style>
.navbar {
    border-bottom: 0;
    padding: 0;
    -webkit-transition: all .1s ease-in-out 0s;
    -moz-transition: all .1s ease-in-out 0s;
    -ms-transition: all .1s ease-in-out 0s;
    -o-transition: all .1s ease-in-out 0s;
    transition: all .1s ease-in-out 0s;
    min-height: 30px;
}
.navbar.navbar-default {
    margin: 0;
    padding: 0;
    height: auto;
    background: 0 0;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
}
.logo {
    padding: 8px 0;
}
.logo a {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
}
.bg-color-header .navbar-default {
    background: #fe8800;
}
.logo-wrapper, .navbar-nav-wrapper, .nav-mini-wrapper {
    float: left;
}
.logo-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}
ul.nav-mini {
    padding-top: 3px;
    padding-right: 13px;
}
ul.nav-mini li {
    display: inline-block;
    margin-right: 10px;
    font-size: 13px;
    background: #00bcd4;
    border-radius: 5px;
    padding: 2px 10px;
}
ul.nav-mini li:last-child {
    margin-right: 0;
}
ul.nav-mini li i {
    color: #fff;
    padding-right: 5px;
}
.nav.navbar-nav {
    float: left;
    transition: all ease-in-out .5s;
}
.nav.navbar-nav li {
    position: relative;
    float: none;
    display: inline-block;
}
.nav.navbar-nav li a {
    color: #fff;
}
.nav.navbar-nav>li>a {
    line-height: 36px;
    font-size: 14px;
    -webkit-transition: all .3s ease-in-out 0s;
    -moz-transition: all .3s ease-in-out 0s;
    -ms-transition: all .3s ease-in-out 0s;
    -o-transition: all .3s ease-in-out 0s;
    transition: all .3s ease-in-out 0s;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 20px 15px 19px;
    color: #fff;
    position: relative;
    font-weight: 600;
}
.nav.navbar-nav>li>a:hover, .nav.navbar-nav>li.active>a {
    background: #fe8800;
    color: #fff;
    text-decoration: none;
}
.nav.navbar-nav>li:last-child>a:after {
    display: none;
}
.nav.navbar-nav li ul {
    z-index: 99999;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 75px;
    left: 0;
    width: 200px;
    /* display: none; */
    background-color: #f7f7f7;
    border: 1px solid #eee;
    border-top: 2px solid #fe8800;
    -webkit-box-shadow: 0 0 12px -3px rgba(0, 0, 0, .4);
    -moz-box-shadow: 0 0 12px -3px rgba(0, 0, 0, .4);
    box-shadow: 0 0 12px -3px rgba(0, 0, 0, .4);
}
.nav.navbar-nav li ul li a {
    border-bottom: 1px solid #e6e6e6;
    /* display: block; */
    padding: 14px 20px;
    font-size: 13px;
    -webkit-transition: all .2s ease-in-out 0s;
    -moz-transition: all .2s ease-in-out 0s;
    -ms-transition: all .2s ease-in-out 0s;
    -o-transition: all .2s ease-in-out 0s;
    transition: all .2s ease-in-out 0s;
    color: #666;
    font-weight: 300;
    letter-spacing: .5px;
    line-height: 1.25;
}
.nav.navbar-nav li>ul>li:last-child>a, .navbar-nav li>ul>li>ul>li:last-child>a {
    border-bottom: 0;
}
.nav.navbar-nav li ul li:hover a {
    padding-left: 25px;
    padding-right: 15px;
}
.nav.navbar-nav li ul li ul {
    position: absolute;
    left: 198px;
    top: -2px;
}
.nav.navbar-nav li ul li:hover ul li a {
    padding-left: 15px;
    padding-right: 15px;
}
.nav.navbar-nav li ul li ul li:hover a {
    padding-left: 20px;
    padding-right: 10px;
}
.nav.navbar-nav li ul li {
    display: block;
    text-align: left;
}
.navbar-nav>li.mega-menu {
    position: inherit;
    left: 0;
}
.navbar-nav>li.mega-menu ul {
    left: 0%;
    width: 100%;
    top: 36px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.navbar-nav>li.mega-menu:hover>a, .navbar-nav>li.mega-menu>a:hover, .navbar-nav>li.dropdown:hover>a, .navbar-nav>li.dropdown>a:hover, .navbar-nav>li.dropdown.active>a, .navbar-nav>li.dropdown.active>a:hover, .navbar-nav>li:hover>a, .navbar-nav>li.active>a {
    color: #fe8800;
    text-decoration: underline;
    background: 0 0;
}
.mega-menu-inner {
    padding: 0 20px;
}
.bg-color-header .navbar-nav>li.dropdown:hover>a, .bg-color-header .navbar-nav>li.dropdown>a:hover, .bg-color-header .navbar-nav>li.dropdown.active>a, .bg-color-header .navbar-nav>li.dropdown.active>a:hover, .bg-color-header .navbar-nav>li:hover>a, .bg-color-header .navbar-nav>li.active>a {
    color: #fff;
}
.nav.navbar-nav>li>a:hover, .nav.navbar-nav:hover>li>a {
    color: #fff;
}
.navbar-arrow>ul>li .arrow-indicator {
    margin-left: 7px;
    color: #ccc;
}
.navbar-arrow ul ul>li .arrow-indicator {
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -8px;
    font-size: 16px;
    color: #ccc;
}
.megamenu-container .arrow-indicator {
    display: none;
}
@media only screen and (max-width:1199px) {
}
@media only screen and (max-width:991px) {
    .logo-wrapper {
    width: 50%}
.navbar-nav-wrapper {
    width: 0%}
.navbar {
    margin: 0;
    padding: 0;
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
}
.navbar-brand {
    line-height: 30px;
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
}
.navbar-arrow>ul>li .arrow-indicator, .navbar-arrow ul ul>li .arrow-indicator {
    display: none;
}
ul.nav-mini {
    padding-right: 0;
}
ul.nav-mini li {
    margin-right: 5px;
    padding: 2px 6px;
}
}@media(max-width:767px) {
    .navbar-nav .open .dropdown-menu>li>a {
    line-height: 23px;
}
.navbar.navbar-default {
    padding: 10px 0;
}
#sp-top-bar {
    top: 95px;
}
#sp-top-bar, #sp-top2 {
    text-align: center;
}
#sp-top1 .nav-mini-wrapper {
    display: inline-block;
    float: none!important;
    margin: 10px 0;
}
#sp-top-bar .sp-contact-info {
    display: inline-block;
}
}@media(min-width:768px) {
    .navbar-nav {
    margin: 0;
}
}@media(max-width:639px) {
}
.navbar-sticky {
    background-color: rgba(0, 0, 0, .8);
    padding: 10px 0;
    z-index: 9;
    transition: all ease-in-out .5s;
}
.navbar-sticky.navbar-default {
    padding: 10px 0 8px;
}
.navbar-sticky .navbar-nav>li>ul {
    top: 60px;
}
.navbar-sticky .navbar-nav>li.mega-menu ul {
    top: 60px;
}
.transparent-header .navbar-sticky {
    padding: 0;
    background-color: rgba(0, 0, 0, .9);
    margin: 0;
    border: none;
}
.navbar.navbar-sticky .logo {
    padding: 5px 0;
}
.navbar.navbar-sticky .logo img {
    width: 85%}
.navbar.navbar-sticky .nav.navbar-nav>li>a {
    line-height: 1.5;
}
@media only screen and (max-width:1199px) {
}
@media only screen and (max-width:991px) {
    #sp-top2.col-sm-9 {
    padding-right: 0;
}
.sp-contact-info li {
    font-size: 12px;
    padding: 6px 4px;
}
.navbar-fixed-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    clear: both;
}
.transparent-header .navbar-sticky {
    padding: 10px 0;
    background: 0 0;
    border: 1px solid rgba(255, 255, 255, .2);
}
.slicknav_btn {
    top: 32px;
}
.slicknav_btn.slicknav_open:before, .slicknav_btn.slicknav_collapsed:before {
    font-size: 21px;
}
}
</style>
