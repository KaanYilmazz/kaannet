<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="#009688"
                        dark
                >
                    <v-toolbar-title>PORTFOLIO</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col md="3">
                            <v-card>
                                <v-toolbar color="primary">
                                    <v-toolbar-title style="color: white"> icraproweb.com</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            color="white"
                                            small
                                            class="mx-0"
                                            target="_blank"
                                            outlined
                                    ><v-icon>mdi-alert</v-icon></v-btn>
                                </v-toolbar>
                                <v-card-title>Private Solution Website</v-card-title>
                                <v-card-subtitle>Vue.js, Node.Js, Mysql, Typescript, Vuetify</v-card-subtitle>
                                <v-card-text>
                                    <v-img src="../img/icrapro.png"></v-img>
                                    <p style="color: orange" class="ma-2">This project is in progress</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="3">
                            <v-card>
                                <v-toolbar color="primary">
                                    <v-toolbar-title style="color: white"> shayazilim.com</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            href="https://shayazilim.com/"
                                            color="white"
                                            small
                                            class="mx-0"
                                            target="_blank"
                                            outlined
                                    ><v-icon >mdi-web</v-icon></v-btn>
                                </v-toolbar>
                                <v-card-title>Corporate Website</v-card-title>
                                <v-card-subtitle>Asp.net</v-card-subtitle>
                                <v-card-text>
                                    <v-img src="../img/sha.png"></v-img>
                                    <p style="color: green" class="ma-2">This project is done</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="3">
                            <v-card>
                                <v-toolbar color="primary">
                                    <v-toolbar-title style="color: white">Ege Aktif Filter</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            href="http://autotechnikfilter.com/"
                                            color="white"
                                            small
                                            class="mx-0"
                                            target="_blank"
                                            outlined
                                    ><v-icon>mdi-web</v-icon></v-btn>
                                </v-toolbar>
                                <v-card-title>Data Search Website</v-card-title>
                                <v-card-subtitle>Asp.net, Mssql</v-card-subtitle>
                                <v-card-text>
                                    <v-img src="../img/ege.png"></v-img>
                                    <p style="color: green" class="ma-2">This project is done</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="3">
                            <v-card>
                                <v-toolbar color="primary">
                                    <v-toolbar-title style="color: white"> Voucher Integration</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            href="https://portal.uyumsoft.com.tr/Giris?ReturnUrl=%2f"
                                            color="white"
                                            small
                                            class="mx-0"
                                            target="_blank"
                                            outlined
                                    ><v-icon>mdi-web</v-icon></v-btn>
                                </v-toolbar>
                                <v-card-title>WPF Project</v-card-title>
                                <v-card-subtitle>C#, Rest API, Mysql</v-card-subtitle>
                                <v-card-text>
                                    <v-img src="../img/voucher.png"></v-img>
                                    <p style="color: green" class="ma-5">This project is done</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        name: "Portfolio.vue"
    }
</script>

<style scoped>

</style>