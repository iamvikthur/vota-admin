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
                <div class="row">
                    <div class="col-sm-9 text-right">
                        <div class="form-group">
                            <button @click.prevent="surveyQuestionsDiv" type="submit" class="btn btn-primary">Survey Quetions</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center" id="surveyQuestionsDiv" style="display: none;">
                    <div class="col-md-6">
                        <!-- general form elements disabled -->
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">View and Edit Survey</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateQuestionInputs">
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question</label>
                                            <input type="text" v-model="squestion.qquestion" class="form-control" required placeholder="enter survey question">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question Options</label>
                                            <input type="text" placeholder="e.g boolean|true,false" v-model="squestion.qoptions" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Survey Question Type</label>
                                            <select class="form-control" v-model="squestion.qtype">
                                                <option value="text">Text</option>
                                                <option value="checkbox">Checkbox</option>
                                                <option value="dropdown">Dropdown</option>
                                                <option value="selection">Selection</option>
                                                <option value="radio">Radio</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 text-center">
                                        <div class="form-group">
                                            <button id="addQuestionBtn" type="submit" class="btn btn-primary">Add Question</button>
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

                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <!-- general form elements disabled -->
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">View and Edit Survey</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateInputs">
                                <div class="row">
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Survey Name</label>
                                        <input type="text" v-model="formdata.sgroup" class="form-control" required placeholder="enter main title of the Survey">
                                    </div>
                                    </div>
                                    <div class="col-sm-12">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>Survey Description</label>
                                        <textarea placeholder="Survey description" v-model="formdata.sdesc" class="form-control"></textarea>
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
                                            <button @click.prevent="deleteSurvey" id="deleteBtn" type="button" class="btn btn-danger">Delete Survey</button>
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
                    <div class="col-sm-6 text-center" v-if="!surveyQuestions.length">
                        <p class="lead">This survey has no questions yet</p>
                    </div>
                    <div class="col-sm-6 text-center" v-else>
                    <h2>Survey Questions</h2>
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
                                    <tr v-for="(surveyQuestion,index) in surveyQuestions" :key="index" id="tableTr">
                                        <td>{{surveyQuestion.qquestion}}</td>
                                        <td>{{surveyQuestion.qoptions}}</td>
                                        <td>{{surveyQuestion.qtype}}</td>
                                        <td>
                                            <button @click.prevent="manageQuestion(surveyQuestion)" class="btn btn-info">View</button>
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
                surveyQuestions: [],
                postStatus:{
                    succes: false,
                    error: false,
                    text: '',
                }
            }
        },
        mounted(){
          if (!this.surveyData) {
            this.$router.push('/manage_surveys')
          }
          this.formdata = this.surveyData
          this.surveyQuestions = this.formdata.survey
        },
        methods: {
            manageQuestion: function(question){
                this.$store.state.currentSurveyQuestion = question
                this.$router.push('/survey/question/manage')
            },
            surveyQuestionsDiv: function(){
                $('div#surveyQuestionsDiv').fadeIn('slow')
            },
            ValidateQuestionInputs: function(){
                if (!this.squestion.qquestion) {
                    alert("Question Field is required")
                    return
                }
                this.saveQuestionInputs()
            },
            saveQuestionInputs: function(){
                $('button#addQuestionBtn').attr('disabled', true).text("Adding Question...")
                this.squestion.qsurvey = this.formdata.sid
                axios.post(`${this.baseUrl}/survey/question/create`, this.squestion)
                .then(res => {
                    $('button#addQuestionBtn').attr('disabled', false).text("Add Question")
                    alert("question added succesfully")
                })
                .catch(err => {
                    alert("error occured while adding question. try again")
                    $('button#addQuestionBtn').attr('disabled', false).text("Add Question")
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
                axios.post(`${this.baseUrl}/survey/group/delete`, this.formdata)
                .then(res => {
                    alert("survey deleted succesfully")
                    this.$router.push('/manage_surveys')
                })
                .catch(err=>{
                    $('button#deleteBtnn').attr('disabled', false).text('Delete')
                    alert("Unable to delete survey. Please try again")
                })
            },
            ValidateInputs: function(){
                if (!this.formdata.sgroup || !this.formdata.sdesc) {
                    alert("all fileds are required!")
                    return
                }
                this.updateSurveyData();
            },
            updateSurveyData: function(){
                window.$('button#submitBtn').attr('disabled', true).text('Submitting Survey...')
                window.axios.post(`${this.baseUrl}/survey/group/update`, this.formdata)
                .then(res => {
                    window.$('div#status').fadeIn()
                    window.$('div#postStatusIsSuccess').show()
                    window.$('button#submitBtn').attr('disabled', false).text('Submit')
                    window.scrollTo(0,document.body.scrollHeight);
                    this.postStatus.text = "Survey Updated succesfully"
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
          surveyData: function(){
            return this.$store.state.currentSurvey
          }
        },
    }
</script>
