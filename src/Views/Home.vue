<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row>
            <v-col>
                <welcome id="aboutme"></welcome>
                <about-me id="skills"></about-me>
                <history id="history"></history>
                <portfolio id="portfolio"></portfolio>
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

    export default {
        name: "Home",
        components: {Contact, History, AboutMe, Welcome},
        methods:
            {

            }
    }
</script>

<style scoped>

</style>