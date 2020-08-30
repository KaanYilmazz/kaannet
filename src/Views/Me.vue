<template>
    <v-row>
        <v-col md="7">
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="green"
                        dark
                >
                    <v-toolbar-title>MY TOP 10 SONGS</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn target="_blank" color="white" href="https://open.spotify.com/user/2sqfs7h0es04ox9dcsmd7xptr?si=3vV0RI9VSPiaQhwp-10MYw" icon>
                        <v-icon>mdi-spotify</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-data-table
                            hide-default-footer
                            :headers="headers"
                            :items="songs"
                            class="elevation-1"
                    ></v-data-table>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col md="5">
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="#d81b60"
                        dark
                >
                    <v-toolbar-title>MY OTHER FAVORITES</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-list two-line>
                        <v-list-item-group
                                v-model="selected"
                                multiple
                                active-class="pink--text"
                        >
                            <template v-for="item in items">
                                <v-list-item :key="item.title">
                                        <v-list-item-content>
                                            <v-list-item-title style="color:#d81b60" v-text="item.question"></v-list-item-title>
                                            <v-list-item-subtitle class="text--primary" v-text="item.answer"></v-list-item-subtitle>
                                        </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'Me',
        methods:
            {
                spotifyList:function () {
                    this.$router.push('/me');
                }
            },
        data () {
            return {
                headers: [
                    {
                        text: 'No',
                        align: 'start',
                        sortable: false,
                        value: 'no',
                    },
                    { text: 'Title', value: 'title' },
                    { text: 'Artist', value: 'artist' },
                    { text: 'Album', value: 'album' },
                    { text: 'Length', value: 'length' },
                ],
                songs: [
                    {
                        no: 1,
                        title: "Anesthetize",
                        artist: "Porcupine Tree",
                        album: "Fear of a Blank Planet",
                        length: "17:25",
                    },
                    {
                        no: 2,
                        title: "Vicarious",
                        artist: "TOOL",
                        album: "10.000 Days",
                        length: "07:06",
                    },
                    {
                        no: 3,
                        title: "When We're Together",
                        artist: "Sleeping At Last",
                        album: "When We're Together",
                        length: "03:10",
                    },
                    {
                        no: 4,
                        title: "Last Days of Summer",
                        artist: "Krobak",
                        album: "Little Victories",
                        length: "08:15",
                    },
                    {
                        no: 5,
                        title: "7empest",
                        artist: "TOOL",
                        album: "Fear Inoculum",
                        length: "15:43",
                    },
                    {
                        no: 6,
                        title: "I Know It's Over",
                        artist: "The Smiths",
                        album: "The Queen Is Dead",
                        length: "05:49",
                    },
                    {
                        no: 7,
                        title: "The Start of Something Beautiful",
                        artist: "Porcupine Tree",
                        album: "Deadwing",
                        length: "07:39",
                    },
                    {
                        no: 8,
                        title: "Finally Free",
                        artist: "Dream Theater",
                        album: "Metropolis, Pt.2:Scenes From Memory",
                        length: "11:59",
                    },
                    {
                        no: 9,
                        title: "Simple Boy",
                        artist: "Karnivool",
                        album: "Sound Awake",
                        length: "05:47",
                    },
                    {
                        no: 10,
                        title: "Los Angeles",
                        artist: "The Midnight",
                        album: "Days of Thunder",
                        length: "06:29",
                    },
                    {
                        no: 1,
                        title: "Anesthetize",
                        artist: "Porcupine Tree",
                        album: "Fear of a Blank Planet",
                        length: "17:25",
                    },

                ],
                items: [
                    {
                        question: 'Games?',
                        answer: 'GTA 5, BioShock Infinite, Last of Us',
                    },
                    {
                        question: 'Movies?',
                        answer: 'Lotr, Into the Wild, In Bruges',
                    },
                    {
                        question: 'Series?',
                        answer: 'Sherlock Holmes, Rick and Morty, Psycho Pass',
                    },
                    {
                        question: 'Person(s)?',
                        answer: 'Jordan Bernt Peterson, B the Savior, İlker Canikligil'
                    },
                    {
                        question: 'Movie/Serie/Book Characters?',
                        answer: 'Arata (Psycho Pass), Thranduil (Hobbit)',
                    },
                    {
                        question: 'Cities?',
                        answer: 'Los Angeles, Istanbul, Vienna, Rome',
                    },
                    {
                        question: 'Sports?',
                        answer: 'Swimming, Football, Tennis',
                    },
                    {
                        question: 'Ideology?',
                        answer: 'Lib/Right',
                    },
                ],
            }
        },
    }
</script>