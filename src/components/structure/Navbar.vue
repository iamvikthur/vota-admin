<template>
    <!-- Navbar --> 
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" id="openMenu" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Home</a>
      </li>
    </ul>
    <sweet-modal ref="logout" icon="warning">
      <p>You will logged out. Continue ?</p>
      <div class="row">
        <div class="col-6">
          <button @click.prevent="cancelLogout" class="btn btn-default">Cancel</button>
        </div>
        <div class="col-6">
          <button @click.prevent="logoutNow" class="btn btn-danger">Logout</button>
        </div>
      </div>
    </sweet-modal>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item" v-if="isLoggedIn">
        <a @click.prevent="logout" class="nav-link text-danger" href="#" role="button">
          <i class="fas fa-logout"></i>
          Logout
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>
<script>
  export default{
    mounted(){
      $('a#openMenu').click(function(){
        $('aside#closeSidebar').show()
      })
    },
    methods:{
      logout: function(){
        this.$refs.logout.open()
      },
      cancelLogout: function(){
        this.$refs.logout.close()
      },
      logoutNow: function(){
        localStorage.removeItem('utoken')
        // this.$router.push('/login')
        window.location.href = `${this.pathOrigin}/login`
      }
    },
    computed:  {
      isLoggedIn: function(){
        const token = window.localStorage.getItem('utoken')
        if (token) {
          return true
        }
        return false
      }
    }
  }
</script>