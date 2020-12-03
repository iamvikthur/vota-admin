<template>
	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
	  <!-- Content Header (Page header) -->
	  <div class="content-header">
	    <div class="container-fluid">
	      <div class="row mb-2">
	        <div class="col-sm-6">
	          <h1 class="m-0">Dashboard</h1>
	        </div><!-- /.col -->
	        <div class="col-sm-6">
	          <ol class="breadcrumb float-sm-right">
	            <li class="breadcrumb-item"><a href="#">Home</a></li>
	            <li class="breadcrumb-item active">Dashboard</li>
	          </ol>
	        </div><!-- /.col -->
	      </div><!-- /.row -->
	    </div><!-- /.container-fluid -->
	  </div>
	  <!-- /.content-header -->

	  <!-- Main content -->
	  <section class="content">
	    <div class="container-fluid">
	      <!-- Small boxes (Stat box) -->
	      <div class="row" v-if="stats">
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-info">
	            <div class="inner">
	              <h3>{{stats.total_posts}}</h3>
	              <p>Total Posts</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-bag"></i>
	            </div>
	            <router-link class="small-box-footer" to="public_data">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-success">
	            <div class="inner">
	              <h3>{{stats.total_elections}}</h3>
	              <p>Total Elections</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-stats-bars"></i>
	            </div>
	            <router-link class="small-box-footer" to="elections_view">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-warning">
	            <div class="inner">
	              <h3>{{stats.total_verified_users}}</h3>
	              <p>Verified Users</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-person-add"></i>
	            </div>
	            <router-link class="small-box-footer" to="view_users">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-danger">
	            <div class="inner">
	              <h3>{{stats.total_unverified_users}}</h3>
	              <p>Unverified Users</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="view_users">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-success">
	            <div class="inner">
	              <h3>{{stats.total_approved_requests}}</h3>
	              <p>Total Approved Requests</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="no_data">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-info">
	            <div class="inner">
	              <h3>{{stats.total_candidates}}</h3>
	              <p>Total Candidates</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="#">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-danger">
	            <div class="inner">
	              <h3>{{stats.total_comments}}</h3>
	              <p>Total Comments</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="#">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-warning">
	            <div class="inner">
	              <h3>{{stats.total_events}}</h3>
	              <p>Total Events</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="public_data">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-danger">
	            <div class="inner">
	              <h3>{{stats.total_feedbacks}}</h3>
	              <p>Total Feedbacks</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="feedbacks">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-warning">
	            <div class="inner">
	              <h3>{{stats.total_networks}}</h3>
	              <p>Total Networks</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	            <router-link class="small-box-footer" to="#">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <div class="col-lg-3 col-6">
	          <!-- small box -->
	          <div class="small-box bg-success">
	            <div class="inner">
	              <h3>{{stats.total_votes}}</h3>
	              <p>Total Votes</p>
	            </div>
	            <div class="icon">
	              <i class="ion ion-pie-graph"></i>
	            </div>
	           <router-link class="small-box-footer" to="#">
	            	More info <i class="fas fa-arrow-circle-right"></i>
	            </router-link>
	          </div>
	        </div>
	        <!-- ./col -->
	      </div>
	      <!-- /.row -->
	      <!-- Main row -->
	      <div class="row">
	        <!-- Left col -->
	        <section class="col-lg-4 connectedSortable">
	          <!-- Custom tabs (Charts with tabs)-->
	          <div class="card">
	            <div class="card-header">
	              <h3 class="card-title">
	                <i class="fas fa-chart-pie mr-1"></i>
	                Users Chart
	              </h3>
	            </div><!-- /.card-header -->
	            <div class="card-body">
	              <div class="tab-content p-0">
	                <!-- Morris chart - Sales -->
	                <div class="chart tab-pane active" id="revenue-chart"
	                     style="position: relative; height: 500px;">
	                    <canvas id="revenue-chart-canvas" height="300" style="height: 500px;"></canvas>
	                 </div>
	              </div>
	            </div><!-- /.card-body -->
	          </div>
	          <!-- /.card -->
	        </section>
	        <section class="col-lg-3 connectedSortable">
	          <!-- Custom tabs (Charts with tabs)-->
	          <div class="card">
	            <div class="card-header">
	              <h3 class="card-title">
	                <i class="fas fa-chart-pie mr-1"></i>
	                General Stats
	              </h3>
	            </div><!-- /.card-header -->
	            <div class="card-body">
	              <div class="tab-content p-0">
	                <!-- Morris chart - Sales -->
	                <div class="chart tab-pane active" id="revenue-chart"
	                     style="position: relative; height: 500px;">
	                    <canvas id="general-chart-canvas" height="500" style="height: 500px;"></canvas>
	                 </div>
	              </div>
	            </div><!-- /.card-body -->
	          </div>
	          <!-- /.card -->
	        </section>
	        <!-- /.Left col -->
	      </div>
	      <!-- /.row (main row) -->
	    </div><!-- /.container-fluid -->
	  </section>
	  <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
</template>

<script>
export default {

  	name: 'Dashboard',

  	data () {
	    return {
	    	stats: null,
	    }
    },
	created(){
		if(!this.isLoggedIn){
			this.$router.push('/login')
		}
	},
    mounted(){
    	this.getStats()
    },
    methods: {
    	buildUsersGraph: function(unverified, verified){
    		// var ctx = document.getElementById('myChart');
    		var ctx = $('#revenue-chart-canvas')
    		var myChart = new Chart(ctx, {
    		    type: 'bar',
    		    data: {
    		        labels: ['Unverified Users', 'Verified Users'],
    		        datasets: [{
    		            label: '# of users',
    		            data: [unverified, verified],
    		            backgroundColor: [
    		                'rgba(255, 99, 132, 0.2)',
    		                'rgba(54, 162, 235, 0.2)',
    		            ],
    		            borderColor: [
    		                'rgba(255, 99, 132, 1)',
    		                'rgba(54, 162, 235, 1)',
    		            ],
    		            borderWidth: 1
    		        }]
    		    },
    		    options: {
    		        scales: {
    		            yAxes: [{
    		                ticks: {
    		                    beginAtZero: true
    		                }
    		            }]
    		        }
    		    }
    		});
    	},
    	buildGeneralPieGraph: function(posts, events, comments, feedbacks){
    		// var ctx = document.getElementById('myChart');
    		var ctx = $('#general-chart-canvas')
    		var myChart = new Chart(ctx, {
    		    type: 'doughnut',
    		    data: {
    		        labels: ['Total Posts', 'Total Events', 'Total Comments', 'Total Feedbacks'],
    		        datasets: [{
    		            label: '# of users',
    		            data: [posts, events, comments, feedbacks],
    		            backgroundColor: [
    		                'rgba(255, 99, 132, 0.2)',
    		                'rgba(54, 162, 235, 0.2)',
    		                'rgba(255, 206, 86, 0.2)',
                			'rgba(75, 192, 192, 0.2)',
    		            ],
    		            borderColor: [
    		                'rgba(255, 99, 132, 1)',
    		                'rgba(54, 162, 235, 1)',
    		                'rgba(255, 206, 86, 1)',
                			'rgba(75, 192, 192, 1)',
    		            ],
    		            borderWidth: 1
    		        }]
    		    },
    		    options: {
    		        scales: {
    		            yAxes: [{
    		                ticks: {
    		                    beginAtZero: true
    		                }
    		            }]
    		        }
    		    }
    		});
    	},
    	getStats: function(){
    		axios.get(`${this.baseUrl}/public/charts`)
    		.then(res => {
    			this.stats = res.data.data[0]
    			this.buildUsersGraph(this.stats.total_unverified_users, this.stats.total_verified_users)
    			this.buildGeneralPieGraph(this.stats.total_posts, this.stats.total_events, this.stats.total_comments, this.stats.total_feedbacks)
    		})
    		.catch( err => {
    			console.log(err)
    		})
    	}
    }
}
</script>

<style lang="css" scoped>
</style>