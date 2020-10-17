<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                dark
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/691140d9-c746-4028-9319-1d8998a5d523/liverpool-fc-2020-21-home-and-football-kit-DTW55n.jpg"
        >
            <v-list dense>
                <v-list-item link @click="Goo('aboutme')">
                    <v-list-item-action>
                        <v-icon>mdi-badge-account-horizontal</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>About Me</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="Goo('skills')">
                    <v-list-item-action>
                        <v-icon>mdi-account-hard-hat</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>My Skills</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="Goo('history')">
                    <v-list-item-action>
                        <v-icon>mdi-school</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Education and Experience</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="Goo('portfolio')">
                    <v-list-item-action>
                        <v-icon>mdi-desk-lamp</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Portfolio</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="Goo('contact')">
                    <v-list-item-action>
                        <v-icon>mdi-phone-in-talk</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider inset></v-divider>
            <v-col>
                <v-btn
                        href="https://www.facebook.com/goodbyEfreeman"
                        color="white"
                        small
                        class="mx-3"
                        target="_blank"
                        outlined
                        icon
                >
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                        href="https://www.instagram.com/socialkaan/?hl=tr"
                        color="white"
                        small
                        class="mx-3"
                        target="_blank"
                        outlined
                        icon
                >
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                        href="https://www.linkedin.com/in/kaan-yilmaz-9b12b714a/"
                        color="white"
                        small
                        class="mx-3"
                        target="_blank"
                        outlined
                        icon
                >
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                        href="https://github.com/KaanYilmazz/"
                        color="white"
                        small
                        class="mx-3"
                        target="_blank"
                        outlined
                        icon
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </v-col>
        </v-navigation-drawer>

        <v-app-bar color="red darken-4"
                   app
                   clipped-left
        >

                <img @click="goHome" class="mr-3" height="40"  src="../src/img/Kaan2.png"/>
            <v-spacer></v-spacer><h1 style="color:white; font-size: x-large; font-family: 'Cooper Std Black'">22. KAAN YILMAZ</h1>
                <v-spacer></v-spacer>
                <v-btn color="white" @click="goHome" icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn color="white" @click="goMe" icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn color="white" @click="goPotential" icon>
                    <v-icon>mdi-calendar-text</v-icon>
                </v-btn>

        </v-app-bar>
        <v-main>

            <router-view></router-view>

        </v-main>

        <v-footer app>
            Kaan Yılmaz
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>


    export default {
        name: "App",
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        created() {
            this.$vuetify.theme.dark = false
        },
        methods:{
            goMe:function () {
                this.$router.push('/me');
            },
            goPotential:function () {
                this.$router.push('/potential');
            },
            goHome:function () {
                this.$router.push('/');
            },
            Goo: function (prm) {
                console.log("suan nelerin var :D",this.$router)
                if(this.$router.history.current.path==="/me")
                {
                    this.$router.push("/");
                }
                document.getElementById(prm)?.scrollIntoView({behavior: 'smooth', inline: 'start'})
            }
        }


    }
    // <vue-particles color="#dedede"></vue-particles>
</script>