<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">View Users</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active">View Users</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">List of Users</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row justify-content-center" v-if="pageVariables.ajaxwait">
                  <Circle2 styel="border: black white white"/>
                  <p class="alert alert-danger" v-if="pageVariables.ajaxerror">Error Fetching Posts, Please refresh</p>
                </div>
                <table id="usersList" class="table table-bordered table-hover" v-else>
                  <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(user,index) in users" :key="index" id="tableTr">
                    <td>{{user.uname}}</td>
                    <td>{{user.uemail}}</td>
                    <td>{{user.uphone}}</td>
                    <td>{{user.uaddress}}</td>
                    <td>
                      <button @click="openModal(user)" class="btn btn-primary mr-5">Preview</button>
                      <button @click.prevent="manageUser(user)" class="btn btn-info">Manage</button>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <display-user v-if="pageVariables.wantsToShowUser" :user="selectedUser" />
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  import displayUser from './Functions/displayUser'
  import {Circle2} from 'vue-loading-spinner'
  // import {CubeSpin} from 'vue-loading-spinner'
  require('datatables.net')
    export default {
        data(){
          return {
            users: [],
            selectedUser: {},
            pageVariables: {
              wantsToShowUser: true,
              ajaxwait: true,
              ajaxerror: false,
            }
          }
        },
        mounted(){
          if (!window.localStorage.getItem('utoken')) {
            this.$router.push('/login')
          }
          this.getUsers()
        },
        methods: {
          manageUser: function(user){
            this.$store.state.managedUser = user
            this.$router.push({ path: 'manage_user' })
          },
          openModal: function(user){
            this.selectedUser = user
            this.pageVariables.wantsToShowUser = true
            $('#modal-lg').modal('show')
            // console.log(user.uname)
          },
          initDataTable: function(){
            $('#usersList').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": true,
            "autoWidth": false,
            "responsive": true,
            });
          },
          getUsers: function(){
            axios.get(`${this.baseUrl}/admin/action/list`)
            .then(res => {
              this.pageVariables.ajaxwait = false
              // console.log(res.data)
              this.users = res.data.data
              this.initDataTable()
            })
            .catch(err => {
              console.log(err)
              this.pageVariables.ajaxerror = true
              this.pageVariables.ajaxwait = false
            })
          }
        },
        components: {
          displayUser,
          Circle2,
          // CubeSpin
        }
    }
</script>

<style>
.dataTables_empty{
  display: none;
}
.paginate_button .previous{
  margin-right: 10px;
}
#tableTr{
  cursor: pointer;
}
.spinner .spinner--circle-2{
  border-color: black white white white;
}
</style>