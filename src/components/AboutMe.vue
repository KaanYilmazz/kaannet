<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="primary"
                        dark
                >
                    <v-toolbar-title>MY SKILLS</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <p style="font-family: 'Lucida Console' ">More than two years of experience
                        and developed projects in
                        various technologies and active git usage. Quite interested in selfimprovement..
                    </p>
                    <v-row>
                        <v-col md="6">
                            <div>
                                <h3>OOP</h3>
                                <v-progress-linear
                                        value="80"
                                        height="15"
                                        striped
                                        color="light-green darken-4"
                                ></v-progress-linear>
                                <h3  class="mt-2">C#</h3>
                                <v-progress-linear
                                        height="15"
                                        value="75"
                                        striped
                                        color="light-green darken-4"
                                ></v-progress-linear>
                                <h3  class="mt-2">Typescript</h3>
                                <v-progress-linear
                                        color="green"
                                        height="15"
                                        value="70"
                                        striped
                                ></v-progress-linear>
                                <h3  class="mt-2">Mysql</h3>
                                <v-progress-linear
                                        height="15"
                                        value="70"
                                        striped
                                        color="green"
                                ></v-progress-linear>
                                <h3  class="mt-2">Mssql</h3>
                                <v-progress-linear
                                        value="60"
                                        height="15"
                                        striped
                                        color="green"
                                ></v-progress-linear>
                                <h3  class="mt-2">Vue.Js</h3>
                                <v-progress-linear
                                        color="green"
                                        height="15"
                                        value="60"
                                        striped
                                ></v-progress-linear>
                                <h3  class="mt-2">WPF</h3>
                                <v-progress-linear
                                        value="60"
                                        height="15"
                                        striped
                                        color="green"
                                ></v-progress-linear>
                                <h3  class="mt-2">HTML/CSS</h3>
                                <v-progress-linear
                                        value="60"
                                        height="15"
                                        striped
                                        color="green"
                                ></v-progress-linear>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                <h3>GitHub Usage</h3>
                                <v-progress-linear
                                        value="60"
                                        height="15"
                                        striped
                                        color="green"
                                ></v-progress-linear>
                                <h3  class="mt-2">Asp.Net</h3>
                                <v-progress-linear
                                        color="yellow"
                                        height="15"
                                        value="50"
                                        striped
                                ></v-progress-linear>
                                <h3  class="mt-2">Unity</h3>
                                <v-progress-linear
                                        value="35"
                                        height="15"
                                        striped
                                        color="yellow"
                                ></v-progress-linear>
                                <h3  class="mt-2">Design Patterns</h3>
                                <v-progress-linear
                                        value="35"
                                        height="15"
                                        striped
                                        color="yellow"
                                ></v-progress-linear>
                                <h3  class="mt-2">Java</h3>
                                <v-progress-linear
                                        value="30"
                                        height="15"
                                        striped
                                        color="deep-orange"
                                ></v-progress-linear>
                                <h3  class="mt-2">Jquery</h3>
                                <v-progress-linear
                                        value="25"
                                        height="15"
                                        striped
                                        color="deep-orange"
                                ></v-progress-linear>
                                <h3  class="mt-2">Flutter</h3>
                                <v-progress-linear
                                        color="red"
                                        height="15"
                                        value="20"
                                        striped
                                ></v-progress-linear>
                                <h3  class="mt-2">Php</h3>
                                <v-progress-linear
                                        value="15"
                                        height="15"
                                        striped
                                        color="red"
                                ></v-progress-linear>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        name: 'AboutMe',

    }
</script>


