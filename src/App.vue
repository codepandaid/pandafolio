<template>
  <div id="app">
    <div class="overlay">
      <div class="avatar-container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4 text-center">
            <img class="avatar" src="./assets/avatar.png" alt="avatar">
          </div>
          <div class="col-12 col-lg-8 text-left">
            <h1 class="avatar-name">Usada Pandakora</h1>
            <span class="avatar-job">Frontend Developer</span>
          </div>
        </div>
      </div>

      <div class="nav-container">
        <div id="nav">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <router-link to="/">About Me</router-link>
            </div>
            <div class="col-lg-4">
              <router-link to="/resume">Resume</router-link> 
            </div>
            <div class="col-lg-4">
              <router-link to="/project">Project</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card-container">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0px;
  padding: 0px;
  word-break: break-word;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FAFAFD;
  color: #383838;
  font-size: 16px;
}

.overlay {
  background: url(./assets/backdrops.webp) no-repeat;
  background-size: cover;
  background-position: bottom;
  background-blend-mode: hue;
  background-color: rgba(240, 246, 251, 0.88);
  padding-bottom: 32px;
}

.slide-fade-enter-active {
  animation: enter-animation 256ms;
}

.slide-fade-leave-active {
  animation: enter-animation 256ms reverse;
}

@keyframes enter-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(0.25);
    opacity: 0.25;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  75% {
    transform: scale(0.75);
    opacity: 0.75;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

#nav {
  padding: 32px 0px;
  padding-bottom: 0px;

  a {
    font-size: 24px;
    font-weight: bold;
    color: rgba(53, 81, 181, 0.4);
    padding-bottom: 16px;
    width: 100%;
    max-width: auto;
    text-underline-offset: 16px;
    text-decoration-thickness: 4px;

    &.router-link-exact-active {
      color: #3551B5;

    }
  }
}

/* 
===================================================================
Common
===================================================================
*/
.avatar-container {
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 40px;
}

.nav-container {
  width: 100%;
  max-width: 720px;
  margin: auto;
}

.content-card-container {
  width: 100%;
  min-height: 100vh;
  background-color: #FAFAFD;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  transform: translateY(-32px);
}

.star-container {
  display: contents;
}

.card {
  background-color: white;
  border: 2px solid rgba(56, 56, 56, 0.08);
  border-radius: 16px;
  padding: 24px 32px;
  margin: 24px;
}

.card-blue {
  background-color: rgba(236, 235, 252, 0.25);
  border-radius: 16px;
  padding: 32px;
  margin: 24px;
}

.card-glow {
  background-color: white;
  box-shadow: 0px 16px 48px rgba(195, 218, 252, 0.4);
  border-radius: 16px;
  padding: 32px;
  margin: 24px;
}

.avatar {
  width: 100%;
  max-width: 100px;
}

.overview {
  width: 100%;
  max-width: 100px;
}

.btn-default {
  background-color: #5577F0;
  border-radius: 8px;
  width: 100%;
  max-width: 192px;
  padding: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-icon {
  width: 100%;
  max-width: 18px;
}

.btn-dropdown {
  background-color: #EEF5FF;
  border-radius: 8px;
  width: 100%;
  max-width: 192px;
  padding: 8px;
  color: #383838;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.btn-icon-dropdown {
  width: 100%;
  max-width: 14px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 192px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 8px;
  font-size: 14px;
}

.dropdown-content p {
  color: #383838;
  margin: 4px 0px;
  padding: 4px 0px;
  text-decoration: none;
  display: block;
  transition: 0.5s;
  cursor: pointer;
}

.dropdown-content p:hover {
  background-color: #EEF5FF;
  transform: scale(1.1);
  transition: 0.5s;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* 
===================================================================
Content
===================================================================
*/
.avatar-name {
  font-size: 32px;
  font-weight: bold;
  margin: 4px 0px;
}

.avatar-job {
  font-size: 20px;
  font-weight: 400;
  margin: 8px 0px;
}

.project-name {
  font-size: 32px;
  font-weight: bold;
  margin: 0px 0px;
}

.section-title {
  color: #383838;
  font-size: 24px;
}

.section-subtitle {
  color: #383838;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.7em;
}

.section-text {
  color: #383838;
  font-size: 20px;
  line-height: 1.7em;
  padding-bottom: 12px;
}

.section-mini-text {
  color: rgba(56, 56, 56, 0.7);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7em;
}

/* 
===================================================================
Util
===================================================================
*/
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.border-bottom-divider {
  border-bottom: solid 4px rgba(59, 115, 197, 0.1);
  padding: 8px 0px;
}

.justify-content-center {
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
  flex: 12;
  margin: auto;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-center {
  align-items: center;
}

.align-items-end {
  align-items: flex-end;
}

.col {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
}

.col-1 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 8.33%;
  max-width: 8.33%;
}

.col-2 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 16.666%;
  max-width: 16.666%;
}

.col-3 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25.00%;
  max-width: 25.00%;
}

.col-4 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.33%;
  max-width: 33.33%;
}

.col-5 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 41.666%;
  max-width: 41.666%;
}

.col-6 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50.00%;
  max-width: 50.00%;
}

.col-7 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 58.33%;
  max-width: 58.33%;
}

.col-8 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 66.666%;
  max-width: 66.666%;
}

.col-9 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 75.00%;
  max-width: 75.00%;
}

.col-10 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 83.33%;
  max-width: 83.33%;
}

.col-11 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 91.666%;
  max-width: 91.666%;
}

.col-12 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100.00%;
  max-width: 100.00%;
}

.col-md-1 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 8.33%;
  max-width: 8.33%;
}

.col-md-2 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 16.666%;
  max-width: 16.666%;
}

.col-md-3 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25.00%;
  max-width: 25.00%;
}

.col-md-4 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.33%;
  max-width: 33.33%;
}

.col-md-5 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 41.666%;
  max-width: 41.666%;
}

.col-md-6 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50.00%;
  max-width: 50.00%;
}

.col-md-7 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 58.33%;
  max-width: 58.33%;
}

.col-md-8 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 66.666%;
  max-width: 66.666%;
}

.col-md-9 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 75.00%;
  max-width: 75.00%;
}

.col-md-10 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 83.33%;
  max-width: 83.33%;
}

.col-md-11 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 91.666%;
  max-width: 91.666%;
}

.col-md-12 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100.00%;
  max-width: 100.00%;
}

.col-lg-1 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 8.33%;
  max-width: 8.33%;
}

.col-lg-2 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 16.666%;
  max-width: 16.666%;
}

.col-lg-3 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25.00%;
  max-width: 25.00%;
}

.col-lg-4 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.33%;
  max-width: 33.33%;
}

.col-lg-5 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 41.666%;
  max-width: 41.666%;
}

.col-lg-6 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50.00%;
  max-width: 50.00%;
}

.col-lg-7 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 58.33%;
  max-width: 58.33%;
}

.col-lg-8 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 66.666%;
  max-width: 66.666%;
}

.col-lg-9 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 75.00%;
  max-width: 75.00%;
}

.col-lg-10 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 83.33%;
  max-width: 83.33%;
}

.col-lg-11 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 91.666%;
  max-width: 91.666%;
}

.col-lg-12 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100.00%;
  max-width: 100.00%;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 
  ===================================================================
  Util
  ===================================================================
  */
  .col-md-1 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 8.33%;
    max-width: 8.33%;
  }

  .col-md-2 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 16.666%;
    max-width: 16.666%;
  }

  .col-md-3 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25.00%;
    max-width: 25.00%;
  }

  .col-md-4 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.33%;
    max-width: 33.33%;
  }

  .col-md-5 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 41.666%;
    max-width: 41.666%;
  }

  .col-md-6 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50.00%;
    max-width: 50.00%;
  }

  .col-md-7 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 58.33%;
    max-width: 58.33%;
  }

  .col-md-8 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 66.666%;
    max-width: 66.666%;
  }

  .col-md-9 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 75.00%;
    max-width: 75.00%;
  }

  .col-md-10 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 83.33%;
    max-width: 83.33%;
  }

  .col-md-11 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 91.666%;
    max-width: 91.666%;
  }

  .col-md-12 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100.00%;
    max-width: 100.00%;
  }
}

@media screen and (max-width: 767px) {
  #nav {
    padding: 16px 0px;
    padding-bottom: 0px;

    a {
      font-size: 16px;
      text-underline-offset: 12px;
      text-decoration-thickness: 8px;
    }
  }

  /* 
  ===================================================================
  Common
  ===================================================================
  */
  .avatar-container {
    width: 100%;
    max-width: 300px;
    margin: auto;
    // padding: 40px;
    padding: 40px 0px;
  }

  .nav-container {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }

  .card {
    padding: 20px;
    margin: 12px 4px;
  }

  .card-blue {
    background-color: rgba(236, 235, 252, 0.25);
    border-radius: 16px;
    padding: 28px;
    margin: 16px;
  }

  .btn-default {
    font-size: 14px;
  }

  .avatar {
    width: 100%;
    max-width: 100px;
    margin: auto;
  }

  /* 
  ===================================================================
  Content
  ===================================================================
  */
  .avatar-name {
    font-size: 24px;
    font-weight: bold;
    margin: 4px 0px;
    text-align: center;
  }

  .avatar-job {
    font-size: 18px;
    font-weight: 400;
    margin: 8px 0px;
    text-align: center;
  }

  .project-name {
    font-size: 24px;
    font-weight: bold;
    margin: 0px 0px;
  }

  .project-desc {
    font-size: 14px;
    font-weight: normal;
    margin: 16px 0px;
    line-height: 1.7em;
  }

  .section-title {
    color: #383838;
    font-size: 20px;
  }

  .section-subtitle {
    color: #383838;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.7em;
  }

  .section-text {
    color: #383838;
    font-size: 16px;
    line-height: 1.7em;
    padding-bottom: 12px;
  }

  .section-mini-text {
    color: rgba(56, 56, 56, 0.7);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.7em;
  }

  /* 
  ===================================================================
  Util
  ===================================================================
  */
  .col-1 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 8.33%;
    max-width: 8.33%;
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 16.666%;
    max-width: 16.666%;
  }

  .col-3 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25.00%;
    max-width: 25.00%;
  }

  .col-4 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.33%;
    max-width: 33.33%;
  }

  .col-5 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 41.666%;
    max-width: 41.666%;
  }

  .col-6 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50.00%;
    max-width: 50.00%;
  }

  .col-7 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 58.33%;
    max-width: 58.33%;
  }

  .col-8 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 66.666%;
    max-width: 66.666%;
  }

  .col-9 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 75.00%;
    max-width: 75.00%;
  }

  .col-10 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 83.33%;
    max-width: 83.33%;
  }

  .col-11 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 91.666%;
    max-width: 91.666%;
  }

  .col-12 {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100.00%;
    max-width: 100.00%;
  }
}

</style>
