<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Manage Survey</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Manage Survey</li>
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
                            <h3 class="card-title">View and Edit Survey Quetion</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateQuestionInputs">
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question</label>
                                            <input type="text" v-model="formdata.qquestion" class="form-control" required placeholder="enter survey question">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question Options</label>
                                            <input type="text" placeholder="e.g boolean|true,false" v-model="formdata.qoptions" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question Type</label>
                                            <select class="form-control" v-model="formdata.qtype">
                                                <option :selected="formdata.qtype == 'text' ? true : false" value="text">Text</option>
                                                <option :selected="formdata.qtype == 'checkbox' ? true : false" value="checkbox">Checkbox</option>
                                                <option :selected="formdata.qtype == 'dropdown' ? true : false" value="dropdown">Dropdown</option>
                                                <option :selected="formdata.qtype == 'selection' ? true : false" value="selection">Selection</option>
                                                <option :selected="formdata.qtype == 'radio' ? true : false" value="radio">Radio</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 text-center">
                                        <div class="form-group">
                                            <button id="updateResponseBtn" type="submit" class="btn btn-primary">Update Question</button>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 text-center">
                                        <div class="form-group">
                                            <button @click.prevent="deleteSurvey" id="deleteBtn" type="button" class="btn btn-danger">Delete Question</button>
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

                <div class="row justify-content-center mt-5">
                    <div class="col-sm-6 text-center" v-if="!surveyResponses.length">
                        <p class="lead">This survey question has no responses yet</p>
                    </div>
                    <div class="col-sm-6 text-center" v-else>
                    <h2>Survey Responses</h2>
                        <table id="usersList" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Survey Question</th>
                                        <th>Survey Options</th>
                                        <th>Survey Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(surveyResponse,index) in surveyResponses" :key="index" id="tableTr">
                                        <td>{{surveyResponse.qquestion}}</td>
                                        <td>{{surveyResponse.qoptions}}</td>
                                        <td>{{surveyResponse.qtype}}</td>
                                        <td>
                                            <button @click.prevent="manageQuestion(surveyResponse)" class="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Survey Question</th>
                                        <th>Survey Options</th>
                                        <th>Survey Type</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                            </table>
                    </div>
                </div>

                <sweet-modal ref="logout" icon="error">
                  <p>This survey and it's questions / answers will be lost. Continue ?</p>
                  <div class="row">
                    <div class="col-6">
                      <button @click.prevent="cancelDelete" class="btn btn-default">Cancel</button>
                    </div>
                    <div class="col-6">
                      <button id="deleteBtnn" @click.prevent="deleteNow" class="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </sweet-modal>

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
                squestion: {},
                surveyResponses: [],
                postStatus:{
                    succes: false,
                    error: false,
                    text: '',
                }
            }
        },
        mounted(){
            if (!this.surveyQuestionResponseData) {
                this.$router.push('/manage_surveys')
            }
            this.formdata = this.surveyQuestionResponseData
            this.surveyResponses = this.formdata.responses
        },
        methods: {
            ValidateQuestionInputs: function(){
                if (!this.formdata.qquestion) {
                    alert("Question Field is required")
                    return
                }
                this.updateQuestionInputs()
            },
            updateQuestionInputs: function(){
                $('button#updateResponseBtn').attr('disabled', true).text("Updating Question...")
                axios.post(`${this.baseUrl}/survey/question/update`, this.formdata)
                .then(res => {
                    $('button#updateResponseBtn').attr('disabled', false).text("Update Question")
                    alert("question updated succesfully")
                })
                .catch(err => {
                    alert("error occured while updating question. try again")
                    $('button#updateResponseBtn').attr('disabled', false).text("Update Question")
                })
            },
            deleteSurvey: function(){
              this.$refs.logout.open()
            },
            cancelDelete: function(){
              this.$refs.logout.close()
            },
            deleteNow: function(){
                $('button#deleteBtnn').attr('disabled', true).text('Deleting Survey...')
                axios.post(`${this.baseUrl}/survey/question/delete`, this.formdata)
                .then(res => {
                    alert("Question deleted succesfully")
                    this.$router.push('/manage_surveys')
                })
                .catch(err=>{
                    $('button#deleteBtnn').attr('disabled', false).text('Delete')
                    alert("Unable to delete Question. Please try again")
                })
            },
        },
        computed:{
          surveyQuestionResponseData: function(){
            return this.$store.state.currentSurveyQuestion
          }
        },
    }
</script>
