<template>
    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Vota App Admin</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="userAvatar" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{userName}}</a>
        </div>
      </div>

      <!-- SidebarSearch Form
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
		<!-- users -->
          <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-tachometer-alt"></i>-->
              <p>
                Users
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/view_users" id="navLink" class="nav-link">
                    <i class="far fa-user nav-icon"></i>
                    <p>View All Users</p>
                </router-link>
              </li>
            </ul>
          </li>
			<!-- end users -->

			<!-- elections -->
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-tachometer-alt"></i>-->
              <p>
                Elections
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/elections_view" id="navLink" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Manage Elections</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/new_election" id="navLink" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Create New ELection</p>
                </router-link>
              </li>
            </ul>
          </li>
			
			<!-- surveys -->
			<li class="nav-item">
        <router-link to="/no_data" id="navLink" class="nav-link">
          <p>Surveys</p>
        </router-link>
			</li>

      <!-- news -->
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-tachometer-alt"></i>-->
              <p>
                Events
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/add_event" id="navLink" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add Event</p>
                </router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/event" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Manage Event</p>
                </router-link>
              </li> -->
            </ul>
          </li>

      <!-- news -->
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-tachometer-alt"></i>-->
              <p>
                News
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/add_news" id="navLink" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add News</p>
                </router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/news" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Manage News</p>
                </router-link>
              </li> -->
            </ul>
          </li>


			<!-- candidate requests -->
			<li class="nav-item">
        <router-link to="/public_data" id="navLink" class="nav-link">
          <p>Public Data View</p>
        </router-link>
			</li>

      <!-- candidate requests -->
			<li class="nav-item">
        <router-link to="/no_data" id="navLink" class="nav-link">
          <p>Candidate Request</p>
        </router-link>
			</li>

			<!-- users submissions -->
			<li class="nav-item">
        <router-link to="/no_data" id="navLink" class="nav-link">
          <p>User Submissions</p>
        </router-link>
			</li>

			<!-- feedbacks -->
			<li class="nav-item">
        <router-link to="/feedbacks" id="navLink" class="nav-link">
          <p>Feedbacks</p>
        </router-link>
			</li>

			<!-- donations -->
			<li class="nav-item">
        <router-link to="/donations" id="navLink" class="nav-link">
          <p>Donations</p>
        </router-link>
			</li>

			<!-- admin accounts -->
			<li class="nav-item">
        <router-link to="/no_data" id="navLink" class="nav-link">
          <p>Admin Accounts</p>
        </router-link>
			</li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default{
    mounted(){
      $('a#navLink').click(function(){
        $('body').removeClass('sidebar-open').addClass('sidebar-close')
      })
    },
    computed: {
      userName: function(){
        return this.$store.state.loggedInUser.uname || window.localStorage.getItem('uname')
      },
      userAvatar: function(){
        return this.$store.state.loggedInUser.uavatar || window.localStorage.getItem('uavatar')
      }
    }
  }
</script>

<style>
    .v-active{
        background-color: rgba(255,255,255,.1);
        color: #fff;
    }
</style>