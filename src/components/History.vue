<template>
    <v-container>
        <v-row>
            <v-col align="center" cols="12">
                <h1>EDUCATION AND EXPERINCE</h1>
            </v-col>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item  color="blue lighten-1" icon="mdi-school" fill-dot>
                    <v-card color="blue lighten-1" dark>
                        <v-card-title class="title">aa</v-card-title>
                        <v-card-text class="white text--primary">
                            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
                                sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.</p>
                            <v-btn
                                    color="blue lighten-1"
                                    class="mx-0"
                                    outlined
                            >
                                Button
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline >
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item  color="blue lighten-1" icon="mdi-check" fill-dot>
                    <v-card color="blue lighten-1" dark>
                        <v-card-title class="title">aa</v-card-title>
                        <v-card-text class="white text--primary">
                            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
                                sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.</p>
                            <v-btn
                                    color="blue lighten-1"
                                    class="mx-0"
                                    outlined
                            >
                                Button
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item  color="blue lighten-1" icon="mdi-check-all" fill-dot>
                    <v-card color="blue lighten-1" dark>
                        <v-card-title class="title">aa</v-card-title>
                        <v-card-text class="white text--primary">
                            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
                                sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.</p>
                            <v-btn
                                    color="blue lighten-1"
                                    class="mx-0"
                                    outlined
                            >
                                Button
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                },
                {
                    color: 'purple darken-1',
                    icon: 'mdi-book-variant',
                },
                {
                    color: 'green lighten-1',
                    icon: 'mdi-airballoon',
                },
                {
                    color: 'indigo',
                    icon: 'mdi-buffer',
                },
            ],
        }),
    }
</script>