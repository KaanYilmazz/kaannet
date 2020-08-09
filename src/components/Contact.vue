<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="#212121"
                        dark
                >
                    <v-toolbar-title>CONTACT</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col md="4">
                            <div id="googlemaps" class="google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25043.862896148225!2d26.616584658622724!3d38.314647744955785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x325bc54080b37c33!2sTechnopark%20IZMIR!5e0!3m2!1sen!2str!4v1597000636801!5m2!1sen!2str"
                                        width="300" height="300" frameborder="1" style="border:0;" allowfullscreen=""
                                        aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </v-col>
                        <v-col md="8">
                            <v-form
                                    ref="form"
                                    :lazy-validation="true"
                            >
                                <v-row>
                                    <v-col md="6">
                                        <v-text-field
                                                v-model="name"
                                                :counter="20"
                                                :rules="nameRules"
                                                label="Name"
                                                required
                                        ></v-text-field>

                                        <v-text-field
                                                v-model="email"
                                                :rules="emailRules"
                                                label="E-mail"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                label="Subject"
                                                required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col md="6">
                                        <v-textarea class="mt-10" outlined label="Message"></v-textarea>
                                        <v-btn
                                                color="success"
                                                class="mr-4"
                                                @click="validate"
                                        >
                                            SEND
                                            <v-icon right>mdi-send</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
    }
</script>

<style scoped>

</style>