<template>
<div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">User Details</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6  mt-3">Full Name: <strong>{{user.uname}}</strong></div>
                  <div class="col-md-6  mt-3">Address: <strong>{{user.address}}</strong></div>

                  <div class="col-md-6  mt-3">Email Address: {{user.uemail}}</div>
                  <div class="col-md-6  mt-3">Phone Number: <strong>{{user.uphone}}</strong></div>

                  <div class="col-md-6  mt-3">Verified: <strong>{{returnStatus(user.uverify)}}</strong></div>
                  <div class="col-md-6  mt-3">Country: <strong>{{user.ucountry}}</strong></div>

                  <div class="col-md-6  mt-3">State: <strong>{{user.ustate}}</strong></div>
                  <div class="col-md-6  mt-3">Email Address: {{user.uemail}}</div>

                  <div class="col-md-6  mt-3">PVC: <strong>{{user.upvc}}</strong></div>
                  <div class="col-md-6  mt-3">Bio: <strong>{{user.ubio}}</strong></div>
                  <div class="col-md-6  mt-3">Gender: <strong>{{user.ugender}}</strong></div>

                  <div class="col-md-6  mt-3">Party: <strong>{{user.uparty}}</strong></div>
                  <div class="col-md-6  mt-3">Candidate: <strong>{{user.ucandidate}}</strong></div>
                  <div class="col-md-6  mt-3">Issues: {{user.uissues}}</div>

                  <div class="col-md-6  mt-3">Registered: <strong>{{user.createdAt}}</strong></div>
                  <div class="col-md-6  mt-3">Solutions: <strong>{{user.usolutions}}</strong></div>
                  <div class="col-md-6  mt-3">Address: <strong>{{user.address}}</strong></div>
                  <div class="col-md-12  mt-3 text-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ema-front.appspot.com/o/avatars%2Fimage-placeholder.jpg?alt=media" class="img-fluid">
                    <!-- <img :src="uavatar" class="img-fluid"> -->
                  </div>
                </div>

              </div> 
            </div>
            <!-- <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
</template>

<script>
export default{
  props: {
    user: Object
  },
  methods:{
    returnStatus: function(status){
      return status == 0 ? "Unverified" : "Verified"
    }
  }
  
}
</script>