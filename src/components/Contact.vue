<template>
    <div class="cpm_contact">
        
            <div class="row">
                <div class="col-12 col-lg-6 align-self-center">
                    <video autoplay muted loop class="video-fluid">
                        <source :src="video_contact" type="video/mp4">
                    </video>
                    asd
                </div>
                <div class="col-12 col-lg-6 px-4 px-sm-5">
                    <div class="cpm_contact__form" v-if="!sended_email">
                        <label for="name" class="form-label cpm_contact__form--label">
                            Nombre
                        </label>
                        <input v-model="form.name" name="name" type="text" class="form-control cpm_contact__form--input">
                        <br />

                        <label for="email" class="form-label cpm_contact__form--label">
                            Correo Electrónico
                        </label>
                        <input v-model="form.email" name="email" type="text" class="form-control cpm_contact__form--input">
                        <br />

                        <label for="phone" class="form-label cpm_contact__form--label">
                            Teléfono
                        </label>
                        <input v-model="form.phone" name="phone" type="text" class="form-control cpm_contact__form--input">
                        <br />

                        <label for="message" class="form-label cpm_contact__form--label">
                            Mensaje
                        </label>
                        <textarea v-model="form.message" name="message" class="form-control cpm_contact__form--input" rows="3"></textarea> 
                        <br />

                        <div class="text-end">
                            <button @click="sendMail()" class="btn btn-outline-dark cpm_contact__form--button">
                                Enviar
                            </button>
                        </div>
                    </div>

                    <div class="row text-center" v-else>
                        <div class="col-12">
                            <span class="bb--title bb--gradient">
                                ¡Gracias!
                            </span>    
                        </div>
                        <div class="col-12 py-5">
                            <span class="bb--description">Nos pondremos en contacto contigo a la brevedad.</span>    
                        </div>
                        <div class="col-12 d-flex justify-content-center align-item-center py-0 py-lg-4">
                            <div class="text-center" style="max-width: 460px">
                                <span class="bb--description">
                                    Si deseas comunucarte con nosotros de manera directa puedes<br/>
                                    llamarnos al 33 3109 3636 escribir al <br/>
                                    <img :src="ico_wpp" class="img-fluid" style="width: 22px; vertical-align: top;"> 33 1325 7156 o por correo a hello@blueberry.mx
                                </span>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</template>

<script>
    import $ from 'jquery'
    import video_contact from 'ASSETS/video/contact/video_contact'
    import ico_wpp from 'ASSETS/images/icons/whatsapp'

    export default {
        name: 'cpm_contact',
        setup() {
            return { 
                video_contact, 
                ico_wpp
            }
        },
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    phone: null,
                    message: null
                },
                sended_email: false
            }
        },
        methods: {
            sendMail() {
                fetch('https://blueberry.mx/send_email.php', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json, text/plain, /',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: this.form.name, email: this.form.email, phone: this.form.phone, message: this.form.message })
                }).then(
                    res => res.json()
                ).then(
                    res => console.log(res)
                )

                this.sended_email = true;

                $(document).ready(function() {
                    $("body").children().each(function() {
                        $(this).html($(this).html().replace(/&#8232;/g," "))
                    })
                })
            }
        }
    }
</script>


<style scoped lang="scss">

    .cpm_contact {
        padding-bottom: 100px;
        background: #000;

        &__form {
            background-color: #fff;
            border-radius: 14px;
            padding: 40px 30px;
            max-width: 750px;
            display: block;
            margin-left: auto;
            margin-right: auto;

            &--label {
                font-family: 'Fira Sans';
                color: #000;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 26px;
            }

            &--input {
                border: none;
                border-bottom: 1px solid #000;
                border-radius: 0px;
            }

            &--input:focus {
                border: none;
                border-bottom: 1.5px solid #000;
                border-radius: 0;
                -webkit-box-shadow: none !important;
                -moz-box-shadow: none !important;
                box-shadow: none !important;
            }

            &--input:hover {
                border: none;
                border-bottom: 1.5px solid #000;
                border-radius: 0;
                -webkit-box-shadow: none !important;
                -moz-box-shadow: none !important;
                box-shadow: none !important;
            }

            &--button {
                font-family: Prompt;
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: 20px;
            }
        }
    }

</style>