<template>

    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
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
                        color="blue"
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
                        color="red"
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
                        color="blue"
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
                        color="#424242"
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

        <v-app-bar color="secondary"
                   app
                   clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar color="secondary">
            <v-toolbar-title style="color:#F50057; font-size: x-large; font-family: 'Comic Sans MS'"> Kaan Yılmaz
            </v-toolbar-title><v-spacer></v-spacer>
                <img @click="goHome" class="mr-3" height="40"  src="../src/img/Kaan.png"/>
            </v-toolbar>
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