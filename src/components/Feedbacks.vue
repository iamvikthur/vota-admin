<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">View Feedbacks</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Manage Feedbacks</li>
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
                <h3 class="card-title">Feedbacks</h3>
              </div>
              <!-- /.card-header -->
              <div class="row justify-content-center" v-if="componentVariables.ajaxwait">
                <div class="col-md-6 ml-auto">
                  <Circle2 styel="border: black white white"/>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-md-6" v-for="feedback in feedbacks">
                  <div class="card-body" style="cursor: pointer;">
                    <div class="callout">
                      <h5>{{feedback.fsubject}}</h5>
                      <p>{{feedback.fbody}}</p>
                      <p class="text-muted text-small">By <strong>{{feedback.user.uname}}</strong></p>
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
        feedbacks: [],
        componentVariables: {
          ajaxwait: true
        }
      }
    },
    mounted(){
      if (!window.localStorage.getItem('utoken')) {
        this.$router.push('/login')
      }
      this.getElections();
    },
    methods: {
      getElections: function(){
        window.axios.get(`${this.baseUrl}/admin/feedback/all`)
        .then(res=>{
          console.log(res)
          this.feedbacks = res.data.data
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