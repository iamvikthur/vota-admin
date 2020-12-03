<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Manage Bill</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Manage Bill</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <!-- general form elements disabled -->
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">View and Edit Bill</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateInputs">
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Bill Title</label>
                                        <input type="text" v-model="formdata.btitle" class="form-control" required placeholder="enter main title of the bill">
                                    </div>
                                    </div>
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Bill Description</label>
                                        <textarea placeholder="bill description" v-model="formdata.bbody" class="form-control"></textarea>
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- textarea -->
                                    <div class="form-group">
                                        <label>Bill Options</label>
                                        <input type="text" v-model="formdata.btype" class="form-control" required placeholder="bill option">
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 text-center">
                                        <div class="form-group">
                                            <button id="submitBtn" type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 text-center">
                                        <div class="form-group">
                                            <button @click.prevent="deleteBill" id="deleteBtn" type="button" class="btn btn-danger">Delete Bill</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                </div>

                <sweet-modal ref="logout" icon="error">
                  <p>This bill and it's answers will be lost. Continue ?</p>
                  <div class="row">
                    <div class="col-6">
                      <button @click.prevent="cancelDelete" class="btn btn-default">Cancel</button>
                    </div>
                    <div class="col-6">
                      <button id="deleteBtnn" @click.prevent="deleteNow" class="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </sweet-modal>

                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">Bill Answers</h3>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body" v-if="showAnswersToggler">
                        <div class="row justify-content-center" v-if="!formdata.bill_ans.length">
                          <p class="alert alert-warning">This bill has no answers yet</p>
                        </div>
                        <table id="usersList" class="table table-bordered table-hover" v-else>
                          <thead>
                          <tr>
                            <th>Bill Answer</th>
                            <th>Answerd By</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="(answer,index) in formdata.bill_ans" :key="index" id="tableTr">
                            <td>{{answer.btitle}}</td>
                            <td>{{answer.bbody}}</td>
                          </tr>
                          </tbody>
                          <tfoot>
                          <tr>
                           <th>Bill Title</th>
                            <th>Answerd By</th>
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
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div class="form-group">
                            <button @click.prevent="showAnswers" type="submit" class="btn btn-info">View Bill Answers</button>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <div class="row justify-content-center" id="status" style="display:none;">
                    <div class="col-md-6">
                        <div class="card card-default">
                        <div class="card-header">
                            <h3 class="card-title">
                            <i class="fas fa-exclamation-triangle"></i>
                            Status
                            </h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="alert alert-danger alert-dismissible" id="postStatusIsError" style="display: none;">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h5><i class="icon fas fa-ban"></i> Alert!</h5>
                                {{postStatus.text}}
                                <p>Server responded with status of {{postStatus.statusCode}}</p>
                                <p>For further understanding, check the <a target="blank" href="https://github.com/nusktec/vota-app/blob/master/res-codes.js">API Docs</a></p>
                            </div>
                            <div class="alert alert-success alert-dismissible" id="postStatusIsSuccess" style="display: none;">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h5><i class="icon fas fa-check"></i> Alert!</h5>
                                 {{postStatus.text}}
                            </div>
                        </div>
                        <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                formdata: {},
                showAnswersToggler: false,
                postStatus:{
                    succes: false,
                    error: false,
                    text: '',
                }
            }
        },
        mounted(){
          if (!this.billData) {
            this.$router.push('/manage_bills')
          }
          this.formdata = this.billData
        },
        methods: {
            showAnswers: function(){
                this.showAnswersToggler = true
            },
            deleteBill: function(){
              this.$refs.logout.open()
            },
            cancelDelete: function(){
              this.$refs.logout.close()
            },
            deleteNow: function(){
                $('button#deleteBtnn').attr('disabled', true).text('Deleting Bill...')
                axios.post(`${this.baseUrl}/bill/delete`, this.formdata)
                .then(res => {
                    alert("bill deleted succesfully")
                    this.$router.push('/manage_bills')
                })
                .catch(err=>{
                    $('button#deleteBtnn').attr('disabled', false).text('Delete')
                    alert("Unable to delete bill. Please try again")
                })
            },
            ValidateInputs: function(){
                if (!this.formdata.btitle || !this.formdata.bbody || !this.formdata.btype) {
                    alert("all fileds are required!")
                    return
                }
                this.updateBillData();
            },
            updateBillData: function(){
                window.$('button#submitBtn').attr('disabled', true).text('Submitting Bill...')
                window.axios.post(`${this.baseUrl}/bill/update`, this.formdata)
                .then(res => {
                    window.$('div#status').fadeIn()
                    window.$('div#postStatusIsSuccess').show()
                    window.$('button#submitBtn').attr('disabled', false).text('Submit')
                    window.scrollTo(0,document.body.scrollHeight);
                    this.postStatus.text = "Bill Updated succesfully"
                    this.postStatus.succes = true
                })
                .catch(err=> {
                    window.$('div#status').fadeIn()
                    window.$('div#postStatusIsError').show()
                    window.$('button#submitBtn').attr('disabled', false).text('Submit')
                    this.postStatus.text = "Error Occured"
                    this.postStatus.error = true
                    console.log(err)
                    this.postStatus.statusCode = err.response.data.boot
                })
            }
        },
        computed:{
          billData: function(){
            return this.$store.state.currentBill
          }
        },
    }
</script>
