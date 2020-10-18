<template>
    <v-container
            class="fill-height"
            fluid>
        <v-row>
            <v-col md="8">
                <calender></calender>
            </v-col>
            <v-col md="4">
               <do-work></do-work>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Calender from "@/subcomponents/Calender";
    import DoWork from "@/components/DoWork";

    export default {
        name: "Potential",
        components: {DoWork, Calender}
    }
</script>

<style scoped>

</style>