<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Edit Post</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Manage News Item</li>
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
                            <h3 class="card-title">News Item Details</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form @submit.prevent="ValidateInputs">
                                <div class="row">
                                    <div class="col-sm-6">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>News Title</label>
                                        <input type="text" v-model="formdata.ptitle" class="form-control" required placeholder="Enter election type">
                                    </div>
                                    </div>
                                    <div class="col-sm-6">
                                    <!-- text input -->
                                    <div class="form-group">
                                        <label>News Alias</label>
                                        <input type="text" disabled v-model="getSlug" class="form-control" required placeholder="Enter election location">
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                    <!-- textarea -->
                                    <div class="form-group">
                                        <label>Event Banner</label>
                                        <input type="file" @change="uploadImage($event)" class="form-control">
                                        <p id="circleLoader" style="display: none;">
                                            <Circle2 styel="border: black white white"/>
                                        </p>
                                    </div>
                                    </div>
                                    <div class="col-sm-6">
                                    <!-- textarea -->
                                    <div class="form-group">
                                        <label>News Banner</label>
                                        <input type="text" disabled :value="formdata.pbanner" class="form-control"  placeholder="https://image-url.ext">
                                    </div>
                                    </div>
                                     <div class="col-sm-12">
                                    <!-- textarea -->
                                    <div class="form-group">
                                        <div class="row">
                                          <div class="col-md-12">
                                            <div class="card card-outline card-info">
                                              <div class="card-header">
                                                <h3 class="card-title">
                                                  News Body
                                                </h3>
                                              </div>
                                              <!-- /.card-header -->
                                              <div class="card-body">
                                                <textarea id="summernote">
                                                  Place <em>some</em> <u>text</u> <strong>here</strong>
                                                </textarea>
                                              </div>
                                            </div>
                                          </div>
                                          <!-- /.col-->
                                        </div>
                                        <!-- <textarea v-model="formdata.pbody" cols="6" rows="5" class="form-control"></textarea> -->
                                    </div>
                                    </div>
                                    <div class="col-sm-12 text-center">
                                    <!-- textarea -->
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
    import slug from 'slug'
    import {Circle2} from 'vue-loading-spinner'
    require('../../../public/plugins/summernote/summernote-bs4.min.js')
export default {
    data(){
        return {
            formdata: {
                ptitle: 'post title',
                pbanner: 'https://firebasestorage.googleapis.com/v0/b/ema-front.appspot.com/o/avatars%2Fimage-placeholder.jpg?alt=media'
            },
            postStatus:{
                succes: false,
                error: false,
                text: '',
            }
        }
    },
    mounted(){
        // Summernote
        $('#summernote').summernote({
            placeholder: 'content body here',
            tabsize: 4,
            height: 200,
        })
        this.formdata = this.newsItem
        $('#summernote').summernote('code', this.formdata.pbody)
    },
    methods: {
        uploadImage: function(e){
            var file = e.target.files[0];
            var fd = new FormData()
            fd.append('image', file);
            window.$('p#circleLoader').show()
            window.$('button#submitBtn').attr('disabled', true)
            window.axios.post(`${this.baseUrl}/uploads/image`, fd)
            .then(response => {
                window.$('p#circleLoader').hide()
                window.scrollTo(0,document.body.scrollHeight);
                this.formdata.pbanner = response.data.data.url
                window.$('button#submitBtn').attr('disabled', false)
                console.log(response)
            })
            .catch( err => {
                window.$('p#circleLoader').hide()
                window.$('div#status').fadeIn()
                window.$('div#postStatusIsError').show()
                window.$('button#submitBtn').attr('disabled', false)
                this.postStatus.text = "Image upload failed. Try again"
                this.postStatus.error = true
                console.log(err)
                this.postStatus.statusCode = err.response.data.boot
            })
        },
        ValidateInputs: function(){
            if (!this.formdata.ptitle ) {
                alert("all fileds are required!")
                return
            }
            this.updatePublicData();
        },
        updatePublicData: function(){
            this.formdata.palias = this.getSlug
            this.formdata.pbody = $('#summernote').summernote('code');
            this.formdata.ptype = 1
            this.formdata.powner = 1
            window.$('button#submitBtn').attr('disabled', true).text('Submitting Election...')
            window.axios.post(`${this.baseUrl}/public/update`, this.formdata)
            .then(res => {
                console.log(res)
                window.$('div#status').fadeIn()
                window.$('div#postStatusIsSuccess').show()
                window.$('button#submitBtn').attr('disabled', false).text('Submit')
                this.postStatus.text = "Election saved succesfully"
                this.postStatus.succes = true
            })
            .catch(err=> {
                window.$('div#status').fadeIn()
                window.$('div#postStatusIsError').show()
                window.$('button#submitBtn').attr('disabled', true).text('Submit')
                this.postStatus.text = "Error Occured"
                this.postStatus.error = true
                console.log(err)
                this.postStatus.statusCode = err.response.data.boot
            })
        }
    },
    computed: {
        getSlug: function(){
            return slug(this.formdata.ptitle)
        },
        newsItem: function(){
          return this.$store.state.currentPublicData
        }
    },
    components: {
        Circle2,
    }
}
</script>
<style>
    @import url("../../../public/plugins/summernote/summernote-bs4.min.css")
</style>
