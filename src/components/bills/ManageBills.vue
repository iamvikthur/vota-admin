<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Manage Bills</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active">View Bills</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Available Bills</h3>
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
                    <th>Bill Title</th>
                    <th>Bill Descriptipon</th>
                    <th>Bill Type</th>
                    <th>Bill Answers</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(bill,index) in bills" :key="index" id="tableTr">
                    <td>{{bill.btitle}}</td>
                    <td>{{bill.bbody}}</td>
                    <td>{{bill.btype}}</td>
                    <td>{{bill.bill_ans.length}}</td>
                    <td>
                       <button @click.prevent="manageElection(bill)" class="btn btn-info">Manage</button>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                   <th>Bill Title</th>
                    <th>Bill Descriptipon</th>
                    <th>Bill Type</th>
                    <th>Bill Answers</th>
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
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  // import displayUser from './Functions/displayUser'
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
          this.getElections()
        },
        methods: {
          manageElection: function(bill){
            this.$store.state.currentBill = bill
            this.$router.push({ path: 'manage_bill' })
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
          getElections: function(){
            window.axios.get(`${this.baseUrl}/bill/get-all`)
            .then(res=>{
              console.log(res)
              this.bills = res.data.data
              this.pageVariables.ajaxwait = false
            })
            .catch(err=>{
              console.log(err)
              this.pageVariables.ajaxwait = false
              alert("error fetching bills")
            })
          }
        },
        components: {
          // displayUser,
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