<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">View Donations</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">View Donations</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.card -->
        <!-- START ALERTS AND CALLOUTS -->
      <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-default">
              <div class="card-header">
                <h3 class="card-title">Donations</h3>
              </div>
              <!-- /.card-header -->
              <div class="row justify-content-center" v-if="componentVariables.ajaxwait">
                <div class="col-md-6 ml-auto">
                  <Circle2 styel="border: black white white"/>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-md-12 text-center">
                  <div class="card-body" style="cursor: pointer;">
                    <div class="callout">
                      <p>Total Donations: <strong>NGN {{totalDonations[0].total_donations}}</strong></p>
                    </div>
                    <!-- <div class="callout callout-info">
                      <p>Amount: NGN <strong>{{donation.damount}}</strong></p>
                      <p>User Email: <strong>{{donation.user.uemail}}</strong></p>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" v-for="donation in donations">
                  <div class="card-body" style="cursor: pointer;">
                    <div class="callout callout-info">
                      <p>Amount: NGN <strong>{{donation.damount}}</strong></p>
                      <p>User Email: <strong>{{donation.user.uemail}}</strong></p>
                      <p>User Name: <strong>{{donation.user.uname}}</strong></p>
                      <h5>Description: {{donation.ddesc}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div><!-- /.col -->
        </div>
        <!-- /.row -->
        </div>
        </section>
    </div>
</template>

<script>
  import {Circle2} from 'vue-loading-spinner'
  export default{
    data(){
      return{
        donations: [],
        componentVariables: {
          ajaxwait: true
        },
        totalDonations: {},
      }
    },
    mounted(){
      if (!window.localStorage.getItem('utoken')) {
        this.$router.push('/login')
      }
      this.getDonations();
      this.getTotalDonations()
    },
    methods: {
        getTotalDonations: function(){
            window.axios.get(`${this.baseUrl}/public/main-data`)
            .then(res =>{
                this.totalDonations = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDonations: function(){
            window.axios.get(`${this.baseUrl}/admin/donation/all`)
            .then(res=>{
                console.log(res)
                this.donations = res.data.data
                this.componentVariables.ajaxwait = false
            })
            .catch(err=>{
                console.log(err)
           })
        }
    },
    components: {
      Circle2,
    }
  }
</script>