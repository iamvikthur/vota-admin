<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Add Survey</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">New Survey Group</li>
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
                            <h3 class="card-title">Provide Survey Data</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateInputs">
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Survey Group (Name must be unique)</label>
                                        <input type="text" v-model="formdata.sgroup" class="form-control" required placeholder="survey group name">
                                    </div>
                                    </div>
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Survey Description</label>
                                        <textarea placeholder="survey desription" v-model="formdata.sdesc" class="form-control"></textarea>
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
                if (!this.formdata.sgroup || !this.formdata.sdesc) {
                    alert("all fileds are required!")
                    return
                }
                this.saveSurveyData();
            },
            saveSurveyData: function(){
                window.$('button#submitBtn').attr('disabled', true).text('Submitting Bill...')
                window.axios.post(`${this.baseUrl}/survey/group/create`, this.formdata)
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
