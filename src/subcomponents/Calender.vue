<template>
    <v-row class="fill-height">

        <v-col>
            <v-card elevation="5" outlined class="ma-4">
            <v-sheet height="64">
                <v-toolbar
                        flat
                >
                    <v-btn
                            outlined
                            class="mr-4"
                            color="grey darken-2"
                            @click="setToday"
                    >
                        Today
                    </v-btn>
                    <v-btn
                            fab
                            text
                            small
                            color="grey darken-2"
                            @click="prev"
                    >
                        <v-icon small>
                            mdi-chevron-left
                        </v-icon>
                    </v-btn>
                    <v-btn
                            fab
                            text
                            small
                            color="grey darken-2"
                            @click="next"
                    >
                        <v-icon small>
                            mdi-chevron-right
                        </v-icon>
                    </v-btn>
                    <v-toolbar-title v-if="$refs.calendar">
                        {{ $refs.calendar.title }}
                    </v-toolbar-title>
                </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
                <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                ></v-calendar>
                <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                >
                    <v-card
                            color="grey lighten-4"
                            min-width="350px"
                            flat
                    >
                        <v-toolbar
                                :color="selectedEvent.color"
                                dark
                        >
                            <v-btn icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <span v-html="selectedEvent.details"></span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                    text
                                    color="secondary"
                                    @click="selectedOpen = false"
                            >
                                Cancel
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-sheet>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        data: () => ({
            dialog: false,
            focus: '',
            pointHistory: [],
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [],
        }),
        mounted() {
            this.pointHistory = this.getHistoryResponse();
            const events = []
            for (let item in this.pointHistory) {
                events.push({
                    name: this.pointHistory[item].point + " Puan",
                    start: this.pointHistory[item].day,
                    color: this.ColorDesider(this.pointHistory[item].point),
                    timed: false,
                })
            }

            this.events = events;
        },
        methods: {
            ColorDesider(ppoint){
                let color =  "";
                if (ppoint>0){
                    color = "#000000"
                }
                if (ppoint>42){
                    color = "#B71C1C"
                }
                if (ppoint>54){
                    color = "#FB8C00"
                }
                if (ppoint>66){
                    color = "#FDD835"
                }
                if (ppoint>78){
                    color = "light-green"
                }
                if (ppoint>90){
                    color = "#1B5E20"
                }
                return color;
            },
            getEventColor(event){
                console.log("ne istiyon benden neeee: ", event.color);
                return event.color;
            },
            setToday() {
                this.focus = ''
            },
            prev() {
                this.$refs.calendar.prev()
            },
            next() {
                this.$refs.calendar.next()
            },

            getHistoryResponse() {
                let pointHistoryResponse = [
                    {
                        id: 1,
                        point: 85,
                        day: new Date("2020-10-13")
                    },
                    {
                        id: 2,
                        point: 75,
                        day: new Date("2020-10-14")
                    },
                    {
                        id: 3,
                        point: 93,
                        day: new Date("2020-10-15")
                    },
                    {
                        id: 4,
                        point: 15,
                        day: new Date("2020-10-16")
                    },
                    {
                        id: 5,
                        point: 45,
                        day: new Date("2020-10-17")
                    },
                    {
                        id: 6,
                        point: 55,
                        day: new Date("2020-10-18")
                    },
                ];
                return pointHistoryResponse;
            }
        },
    }
</script>