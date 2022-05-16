<template>
    <div class="footer py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 footer__section--left ">
                    <p class="footer__section--label">
                        Dirección
                    </p>
                    <p class="footer__section--description">
                        Av. Rubén Darío #586 Col. Prados Providencia 
                        CP. 44670, Guadalajara Jalisco, México
                    </p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 footer__section--left">
                    <p class="footer__section--label">
                        Contacto
                    </p>
                    <p class="footer__section--description">
                        33 31 09 3636
                        <br>
                        hello@blueberry.mx
                    </p>
                </div>
                <div class="col-12 col-lg-3 col-xl-3 footer__section--right">
                    <p class="footer__section--description-notitle">
                        <button @click="redirect('privacy')" class="btn">Aviso de privacidad</button> 
                        <br>
                        <button @click="redirect('terms')" class="btn">Términos y condiciones</button>
                        <br>
                        <button @click="redirect('cookies')" class="btn">Política de Cookies</button>
                    </p>
                </div>
                <div class="col-12 col-lg-3 col-xl-3 footer__section--right">
                    <img :src="blueberry" alt="blueberry" class="footer__section--blueberry img-fluid">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="footer__social--follow">
                        Síguenos
                    </p>
                </div>
                <div class="col-12">
                    <a href="https://www.facebook.com/blueberrymx/" target="_blank"><img :src="fb" alt="facebook" class="img-fluid px-2"></a>
                    <a href="https://www.instagram.com/blueberrymx_/" target="_blank"><img :src="ins" alt="instagram" class="img-fluid px-2"></a>
                    <a href="https://www.linkedin.com/company/blueberrymx" target="_blank"><img :src="lin" alt="linkedin" class="img-fluid px-2"></a>
                    <a href="https://vimeo.com/blueberrymx" target="_blank"><img :src="v" alt="vimeo" class="img-fluid px-2"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blueberry from 'ASSETS/gif/blueberry'

    import fb from 'ASSETS/images/fb'
    import lin from 'ASSETS/images/in'
    import ins from 'ASSETS/images/ins'
    import v from 'ASSETS/images/v'
    import yt from 'ASSETS/images/yt'

    export default {
        setup() {
            return {
                blueberry,
                fb,
                lin,
                ins,
                v,
                yt
            }
        },
        methods: {
            redirect(name) {
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {
        background: #000;

        &__section {
            &--label {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: 38px;
                display: flex;
                align-items: center;
                color: #F0F0F0;
            }

            &--description {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 26px;
                display: flex;
                align-items: center;
                color: #F0F0F0;
            }

            &--description-notitle {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 26px;
                display: flex;
                align-items: center;
                color: #F0F0F0;
                padding-top: 50px;

                button {
                    font-family: 'Fira Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 17px;
                    line-height: 26px;
                    display: flex;
                    align-items: center;
                    color: #F0F0F0;
                    padding: 0px;
                    display: contents;
                }
            }

            &--blueberry {
                padding: 50px 0px;
            }
        }

        &__social {

            &--follow {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: 38px;
                display: flex;
                align-items: center;
                color: #E5E5E5;
            }
        }
    }
</style>