<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                    <section class="content">
                    <div class="error-page">
                        <!--<h2 class="headline text-warning"> 404</h2>-->

                        <div class="error-content">
                        <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Resource Not Available.</h3>

                        <p>
                            The requested resoucre is unavailable at this momont. <br> <a @click.prevent="goBack" href="#">go back</a>
                        </p>
                        </div>
                        <!-- /.error-content -->
                    </div>
                    <!-- /.error-page -->
                    </section>
                    <!-- /.content -->
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        methods: {
            goBack: function(){
                this.$router.go(-1);
            }
        }
    }
</script>