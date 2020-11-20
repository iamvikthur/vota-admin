<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Manage News Posts</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Manage Posts</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.card -->
        <!-- START ALERTS AND CALLOUTS -->
        <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center" v-if="pageVariables.ajaxwait">
          <Circle2 styel="border: black white white"/>
          <p class="alert alert-danger" v-if="pageVariables.ajaxerror">Error Fetching Posts, Please refresh</p>
        </div>
        <div class="row" v-else>
           <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Public Data View</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0" v-if="publicData.length">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Alias</th>
                      <th>Date</th>
                      <th>Posted By</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data,index) in publicData" style="cursor: pointer;" @click.prevent="editData(data)">
                      <td>{{index+1}}</td>
                      <td>{{data.ptitle}}</td>
                      <td>{{data.palias}}</td>
                      <td>{{data.pdate}}</td>
                      <td>{{data.user.uemail}}</td>
                      <td>{{data.ptype == 1 ? "News" : "Event"}}</td>
                      <td>{{data.pstatus == 1 ? "Published" : "Draft"}}</td>
                    </tr>
                  </tbody>
                </table>
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
        publicData: [],
        pageVariables: {
          ajaxwait: true,
          ajaxerror: false,
        }
      }
    },
    mounted(){
      this.getPublicData();
    },
    methods: {
      editData: function(data){ 
        this.$store.state.currentPublicData = data
        if (data.ptype == 1) {
          this.$router.push('/manage_news')
        }else{
          this.$router.push('/manage_event')
        }
      },
      getPublicData: function(){
        window.axios.get(`${this.baseUrl}/public/get-all`)
        .then(res=>{
          this.pageVariables.ajaxwait = false
          this.publicData = res.data.data
        })
        .catch(err=>{
          this.pageVariables.ajaxwait = false
          this.pageVariables.ajaxerror = true
        })
      }
    },
    components: {
      Circle2
    }
  }
</script>