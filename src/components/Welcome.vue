<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="red darken-4"
                        dark dense
                >
                    <v-toolbar-title>ABOUT ME</v-toolbar-title><v-spacer></v-spacer>
                    <img src="../img/tr.png" height="20" width="30"/>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col md="4">
                            <v-img class="mx-3" height="120" src="../img/mee.jpg"></v-img>
                            <p style="align-items: center; justify-content: center; display: flex; height: 17em">
                            <v-btn href="https://www.dropbox.com/s/1lrjiey88z9x6rc/KaanEn.pdf?dl=0"  target="_blank" tile outlined color="teal">
                                <v-icon left>mdi-download</v-icon> Download CV
                            </v-btn></p>
                        </v-col>
                        <v-col md="8">
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
                                        <td>Age</td>
                                        <td>24</td>
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
                                        <td>Location</td>
                                        <td>İzmir - Turkey <v-icon>mdi-turkey</v-icon></td>
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

