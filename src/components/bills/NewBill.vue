<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Add New Bill</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Add Bill</li>
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
                            <h3 class="card-title">Provide Bill Data</h3>
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
                                    <div class="col-sm-12 text-center">
                                    <div class="form-group">
                                        <button id="submitBtn" type="submit" class="btn btn-primary">Submit</button>
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
                postStatus:{
                    succes: false,
                    error: false,
                    text: '',
                }
            }
        },
        methods: {
            ValidateInputs: function(){
                if (!this.formdata.btitle || !this.formdata.bbody || !this.formdata.btype) {
                    alert("all fileds are required!")
                    return
                }
                this.saveBillData();
            },
            saveBillData: function(){
                window.$('button#submitBtn').attr('disabled', true).text('Submitting Bill...')
                window.axios.post(`${this.baseUrl}/bill/create`, this.formdata)
                .then(res => {
                    this.formdata = {}
                    window.$('div#status').fadeIn()
                    window.$('div#postStatusIsSuccess').show()
                    window.$('button#submitBtn').attr('disabled', false).text('Submit')
                    window.scrollTo(0,document.body.scrollHeight);
                    this.postStatus.text = "Bill saved succesfully"
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
    }
</script>
