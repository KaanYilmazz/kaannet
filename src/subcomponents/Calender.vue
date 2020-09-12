<template>
    <div>
        <v-sheet
                tile
                height="54"
                color="grey lighten-3"
                class="d-flex"
        >
            <v-btn
                    icon
                    class="ma-2"
                    @click="$refs.calendar.prev()"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h1>Semptember</h1>
            <v-spacer></v-spacer>
            <v-btn
                    icon
                    class="ma-2"
                    @click="$refs.calendar.next()"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>
        <v-sheet height="600">
            <v-calendar
                    ref="calendar"
                    v-model="value"
                    :weekdays="weekday"
                    type="month"
                    :events="events"
                    :event-color="getEventColor"
                    @change="getEvents"
            ></v-calendar>
        </v-sheet>
    </div>
</template>

<script lang="ts">
    import {Vue} from "vue-property-decorator";
    import {HistoryResponseProvider} from "../services/HistoryResponse";
    export default class Calender extends Vue {
            weekday = [1, 2, 3, 4, 5, 6, 0]
            events = HistoryResponseProvider().data

    }
</script>

<style scoped>

</style>