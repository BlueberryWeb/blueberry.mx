<template>
    <div class="contact">
        <section class="container-fluid contact__index">
            <div class="row">
                <div class="col-12 col-lg-6 contact__index-left order-1 order-lg-0">
                    <video autoplay muted loop class="video-fluid">
                        <source :src="VIDEO1" type="video/mp4" />
                    </video>
                </div>
                <div class="col-12 col-lg-6 contact__index-right order-0 order-lg-1 px-3 px-sm-5">
                    <p class="bb--title">CONTACTO</p>
                </div>
            </div>
        </section>

        <contact></contact>
    </div>
</template>

<script>
    // COMPONENTS
    import contact from 'COMPONENTS/contact'
    // ASSETS
    import VIDEO1 from 'ASSETS/video/contact/diseño_web'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                VIDEO1
            }
        }
    }
</script>

<style scoped lang="scss">
    .contact {
        padding-top: 150px;
        background: #000;

        &__index {
            padding-bottom: 100px;

            &-left {
                display: flex;
                justify-content: end;
            }
        }
    }
</style>