<template>
  <div id="app">
    <div class="avatar-container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-center">
          <img class="avatar" src="./assets/avatar.png" alt="avatar">
        </div>
        <div class="col-lg-8 text-left">
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

    <div class="content-card-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #383838;
  font-size: 16px;
}

.avatar-container {
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 40px;
  background-color: red;
}

.nav-container {
  width: 100%;
  max-width: 720px;
  margin: auto;
  background-color: yellow;
}

.content-card-container {
  width: 100%;
  background-color: purple;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}

.card {
  background-color: white;
  border: 2px solid rgba(56, 56, 56, 0.08);
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

#nav {
  padding: 32px;
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

.avatar {
  width: 100%;
  max-width: 100px;
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
  flex-basis: 16.67%;
  max-width: 16.67%;
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
  flex-basis: 41.67%;
  max-width: 41.67%;
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
  flex-basis: 66.67%;
  max-width: 66.67%;
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
  flex-basis: 91.67%;
  max-width: 91.67%;
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
  flex-basis: 16.67%;
  max-width: 16.67%;
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
  flex-basis: 41.67%;
  max-width: 41.67%;
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
  flex-basis: 66.67%;
  max-width: 66.67%;
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
  flex-basis: 91.67%;
  max-width: 91.67%;
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
  flex-basis: 16.67%;
  max-width: 16.67%;
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
  flex-basis: 41.67%;
  max-width: 41.67%;
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
  flex-basis: 66.67%;
  max-width: 66.67%;
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
  flex-basis: 91.67%;
  max-width: 91.67%;
}

.col-lg-12 {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100.00%;
  max-width: 100.00%;
}
</style>
