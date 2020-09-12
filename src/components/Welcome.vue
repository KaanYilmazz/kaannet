<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="#F50057"
                        dark
                >
                    <v-toolbar-title>ABOUT ME</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col md="3">
                            <v-img class="ma-5" height="220" src="../img/mee.jpg" aspect-ratio="1.7" contain></v-img>
                        </v-col>
                        <v-col md="2">
                            <p style="align-items: center; justify-content: center; display: flex; height: 17em">
                            <v-btn href="https://www.dropbox.com/s/1lrjiey88z9x6rc/KaanEn.pdf?dl=0"  target="_blank" tile outlined color="success">
                                <v-icon left>mdi-download</v-icon> Download CV
                            </v-btn></p>
                        </v-col>
                        <v-col md="7">
                            <v-simple-table>
                                <template v-slot:default>
                                    <tbody>
                                    <tr>
                                        <td>Job</td>
                                        <td>Software Engineer</td>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>Kaan Yılmaz </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>kaanyilmaz.software@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td><a href="tel:+90-505-781-64-31">+90 505 781 64 31</a></td>
                                    </tr>
                                    <tr>
                                        <td>Adress</td>
                                        <td>167, 113/16 Street , Erzene/Bornova/İzmir - Turkey</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'Welcome',
        methods:
            {

            }
    }
</script>

