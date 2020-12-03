<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Manage Election</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active">Manage Election</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="card card-default">
          <div class="card-header">
            <h3 class="card-title">Election Details</h3>

            <!-- <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove">
                <i class="fas fa-times"></i>
              </button>
            </div> -->
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="card-body">
                  <p>Election Type: <strong>{{election.etype}}</strong></p>
                  <p>Election Location: <strong>{{election.elocation}}</strong></p>
                  <p>Election Date: <strong>{{election.edate}}</strong></p>
                </div>
                <!-- /.form-group -->
              </div>
              <div class="col-md-12 text-center mt-5">
                <div class="form-group">
                  <!-- <label>User Type</label> -->
                  <!-- <img :src="user.uavatar" style="width: 300px; height: 300px" alt="user image"> -->
                  <button @click.prevent="updateUser" id="btnUpdate" class="btn btn-danger">Delete Election</button>
                </div>
              </div>
                <!-- /.form-group -->
              <!-- </div> -->
            </div>
            <!-- /.row -->
          </div>
        </div>
        <!-- /.card -->
        <!-- /.card -->
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
  import {Circle2} from 'vue-loading-spinner'
    export default {
        data(){
          return {
            election: {},
          }
        },
        mounted(){
          if (!this.electionData) {
            this.$router.push('/elections_view')
          }
          this.election = this.electionData
        },
        methods: {
          updateUser: function(){
            $('button#btnUpdate').text('Deleting...').attr('disabled', true)
            axios.post(`${this.baseUrl}/admin/election/del`, this.election)
            .then(res => {
              alert("record deleted successfully")
              this.$router.push('/elections_view')
            })
            .catch(err => {
              alert("there was an error deleting this record")
              $('button#btnUpdate').text('Update User Details').attr('disabled', false)
            })
          }
        },
        computed:{
          electionData: function(){
            return this.$store.state.currentElection
          }
        },
        components: {
          Circle2,
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