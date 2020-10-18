<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row>
            <v-col md="6">
                <welcome id="aboutme"></welcome>
            </v-col>
            <v-col md="6">
                <about-me id="skills"></about-me>
            </v-col>
            <v-col md="12">
                <history id="history"></history>
            </v-col>
            <v-col md="12">
                <my-portfolio id="portofilo"></my-portfolio>
            </v-col>
            <v-col md="12">
                <contact id="contact"></contact>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import Welcome from "@/components/Welcome";
    import AboutMe from "@/components/AboutMe";
    import History from "@/components/History";
    import Contact from "@/components/Contact";
    import MyPortfolio from "@/components/MyPortfolio";

    export default {
        name: "Home",
        components: {MyPortfolio, Contact, History, AboutMe, Welcome},
        methods:
            {

            }
    }
</script>

<style scoped>

</style>