<template>
    <v-container
            fluid
    >
        <v-row>
            <v-dialog
                    v-model="dialog"
                    max-width="500px"
            >
                <v-card>
                    <v-card-text>
                        <v-text-field label="File name"></v-text-field>

                        <small class="grey--text">* This doesn't actually save.</small>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                text
                                color="primary"
                                @click="dialog = false"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-col>
                <v-card
                        class="mx-auto"
                >
                    <v-toolbar
                            color="red darken-3"
                            dark dense
                    >
                        <v-toolbar-title>TO DO</v-toolbar-title>
                    </v-toolbar>
                    <v-row>
                    <v-col md="9">
                        <v-text-field class="mx-4" label="Washing Teeths  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Facial Care  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Hair Care  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Working  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Sport  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Projects  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="General Culture  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Bad Habits  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Reading  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="English  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Relationships  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Others  :" readonly solo></v-text-field>
                        <v-text-field class="mx-4" label="Morale  :" readonly solo></v-text-field>
                    </v-col>
                    <v-col md="3">
                        <v-text-field class="mx-4" v-model="addHistory.WashingTeeths" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.FacialCare" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.HairCare" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Working" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Sport" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Projects" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.GeneralCulture" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.BadHabits" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Reading" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.English" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Relationships" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Others" label="0" solo></v-text-field>
                        <v-text-field class="mx-4" v-model="addHistory.Morale" label="0" solo></v-text-field>
                        <v-btn
                                tile
                                color="success"
                        >
                            <v-icon left>
                                mdi-send
                            </v-icon>
                            Send
                        </v-btn>
                    </v-col>

                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "DoWork",
        data() {
            return {
                remainTime: "0",
                headers: [
                    {
                        text: 'Work',
                        align: 'start',
                        value: 'name',
                    },
                    {text: 'Point', value: 'point'},
                    {text: 'Done?', value: 'done'},
                ],
                addHistory: [
                    {
                        WashingTeeths:0,
                        FacialCare: 0,
                        HairCare: 0,
                        Working: 0,
                        HealtyEating:0,
                        Sport:0,
                        Projects:0,
                        GeneralCulture:0,
                        BadHabits:0,
                        Reading:0,
                        English:0,
                        Relationships:0,
                        Others:0,
                        Morale:0
                    },
                ],
            }
        },
        mounted() {

        },
        methods: {

        }
    }

</script>

<style scoped>

</style>