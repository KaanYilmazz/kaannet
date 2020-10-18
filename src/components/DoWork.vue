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
                        <v-spacer></v-spacer>
                        <v-btn fab small
                               color="teal"
                               class="white--text"
                               @click="dialog = !dialog"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-data-table
                            :headers="headers"
                            :items="works"
                            class="elevation-1"
                            hide-default-footer
                    >
                        <template v-slot:item.done="{ item }">
                            <v-simple-checkbox
                                    v-model="item.done"
                            ></v-simple-checkbox>
                        </template>
                    </v-data-table>
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
                headers: [
                    {
                        text: 'Work',
                        align: 'start',
                        value: 'name',
                    },
                    {text: 'Point', value: 'point'},
                    {text: 'Done?', value: 'done'},
                ],
                works: [
                    {
                        name: 'Brush the Teeth',
                        point: 20,
                        done: true,
                    },
                    {
                        name: 'Do Sport',
                        point: 40,
                        done: true,
                    },
                    {
                        name: 'Eat Well',
                        point: 30,
                        done: true,
                    },
                    {
                        name: 'Sleep Well',
                        point: 15,
                        done: true,
                    },
                    {
                        name: 'Projects',
                        point: 50,
                        done: true,
                    },
                    {
                        name: 'Read a Book',
                        point: 20,
                        done: true,
                    },
                    {
                        name: 'English Practice',
                        point: 50,
                        done: true,
                    },
                    {
                        name: 'Clean Your Room',
                        point: 15,
                        done: true,
                    },
                    {
                        name: 'Succesful Day at Work',
                        point: 35,
                        done: true,
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>