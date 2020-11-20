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
    <section class="content">
      <div class="container-fluid">
        <!-- SELECT2 EXAMPLE -->
        <div class="card card-default">
          <div class="card-header">
            <h3 class="card-title">User Details</h3>

            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" v-model="user.uname" class="form-control" name="">
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User PVC</label>
                  <input type="text" v-model="user.upvc" class="form-control" name="">
                </div>
                <!-- /.form-group -->
              </div>
               <div class="col-md-6">
                <div class="form-group">
                  <label>User Phone</label>
                  <input :disabled="user.uverify == 0 ? false : true" type="text" v-model="user.uphone" class="form-control" name="">
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User Email</label>
                  <input :disabled="user.uverify == 0 ? false : true" type="text" v-model="user.uemail" class="form-control" name="">
                </div>
                <!-- /.form-group -->
              </div>
               <div class="col-md-6">
                <div class="form-group">
                  <label>User Country</label>
                  <input type="text" v-model="user.ucountry" class="form-control" name="">
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User State</label>
                  <input type="text" v-model="user.ustate" class="form-control" name="">
                </div>
                <!-- /.form-group -->
              </div>
               <div class="col-md-6">
                <div class="form-group">
                  <label>User Address</label>
                  <input type="text" v-model="user.uaddress" class="form-control" name="">
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User Gender</label>
                  <input type="text" v-model="user.ugender" class="form-control" name="">
                </div>
                </div>
                <!-- /.form-group -->
                <div class="col-md-6">
                <div class="form-group">
                  <label>User Party</label>
                  <input type="text" v-model="user.uparty" class="form-control" name="">
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User Bio</label>
                  <textarea v-model="user.ubio" class="form-control"></textarea>
                  <!-- <input type="text" :value="userData.ugender" class="form-control" name=""> -->
                </div>
                </div>
                <!-- /.form-group -->
                <div class="col-md-6">
                <div class="form-group">
                  <label>User Is Candidate</label>
                    <select v-model="user.ucandidate" class="form-control">
                      <option value="0" :selected="user.ucandidate == 0">False</option>
                      <option value="1" :selected="user.ucandidate == 1">True</option>
                    </select>
                  <!-- <input type="text" v-model="user.ucandidate" class="form-control" name=""> -->
                </div>
                <!-- /.form-group -->
                <div class="form-group">
                  <label>User Gender</label>
                  <input type="text" v-model="user.ugender" class="form-control" name="">
                </div>
                </div>
                <!-- /.form-group -->
                <div class="col-md-6">
                  <div class="form-group">
                    <label>User Issues</label>
                    <input type="text" v-model="user.uissues" class="form-control" name="">
                  </div>
                  <div class="form-group">
                    <label>User Solutions</label>
                    <input type="text" v-model="user.usolutions" class="form-control" name="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>User Type</label>
                    <input type="text" v-model="user.utype" class="form-control" name="">
                  </div>
                  <div class="form-group">
                    <label>User Verification Status</label>
                    <select v-model="user.uverify" class="form-control">
                      <option value="0" :selected="user.uverify == 0">Unverified</option>
                      <option value="1" :selected="user.uverify == 1">Verified</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12 text-center mt-5">
                  <div class="form-group">
                    <!-- <label>User Type</label> -->
                    <!-- <img :src="user.uavatar" style="width: 300px; height: 300px" alt="user image"> -->
                    <button @click.prevent="updateUser" id="btnUpdate" class="btn btn-primary">Update User Details</button>
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
            user: {},
          }
        },
        mounted(){
          if (!this.userData) {
            this.$router.push('/view_users')
          }
          this.user = this.userData
        },
        methods: {
          getUser: function(){
            axios.get(`${this.baseUrl}/admin/action/list`)
            .then(res => {
              console.log(res.data)
              this.user = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
          },
          updateUser: function(){
            $('button#btnUpdate').text('Updating user details...').attr('disabled', true)
            axios.post(`${this.baseUrl}/admin/action/update`, this.user)
            .then(res => {
              $('button#btnUpdate').text('Update User Details').attr('disabled', false)
              alert("user details updated successfully")
            })
            .catch(err => {
              alert("there was an error updating these data")
              $('button#btnUpdate').text('Update User Details').attr('disabled', false)
            })
          }
        },
        computed:{
          userData: function(){
            return this.$store.state.managedUser
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