<template>
    <v-row>
        <v-col>
            <v-card
                    class="mx-auto"
            >
                <v-toolbar
                        color="red darken-4"
                        dark
                >
                    <v-toolbar-title>EDUCATION AND EXPERIENCE</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item
                                v-for="(item, i) in items"
                                :key="i"
                                :color="item.color"
                                :icon="item.icon"
                                fill-dot
                        >
                            <v-card
                                    :color="item.color"
                                    dark
                                    width="1050"
                            >
                                <v-card-title class="title">{{item.title}}</v-card-title>
                                <v-card-subtitle class="subtitle-1">{{item.subtitle}}</v-card-subtitle>
                                <v-card-text class="white text--primary">
                                    <p style="color: black"> {{item.text}} </p>
                                    <p style="color: black"><b> Used Technologies: {{item.usedtech}}</b> </p>
                                    <v-btn
                                            :href="item.link"
                                            color="teal"
                                            class="mx-0"
                                            target="_blank"
                                            outlined
                                    >
                                        GO
                                    </v-btn>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {
                    color: 'red darken-4',
                    icon: 'mdi-school',
                    title:'Suphi Koyuncuoğlu Anatolian Highschool, İzmir',
                    link:'http://bornovasuphial.meb.k12.tr/',
                    subtitle:'Student (Sep 2010- Jun 2014)',
                    text: 'I was a student fot Suphi Koyuncuoğlu Anatolian Highschool',
                    usedtech: '-',
                },
                {
                    color: 'red darken-4',
                    icon: 'mdi-school',
                    title:'Celal Bayar University, Manisa',
                    link:'https://www.mcbu.edu.tr/',
                    subtitle:'Software Engineering (Sep 2014- Dec 2018)',
                    text: 'I finished Celal Bayar University with a 2.71 graduation score.',
                    usedtech: 'Basics of everything',
                },
                {
                    color: 'red darken-4',
                    icon: 'mdi-star',
                    title:'Oktilyon Internet Services, İzmir',
                    link:'https://oktilyon.net//',
                    subtitle:'Intern-1 (Jul 2013- Oct 2013)',
                    text: 'I was a game developer, there are one big project and  too many little projects',
                    usedtech: 'C#,Unity',
                },
                {
                    color: 'red darken-4',
                    icon: 'mdi-star',
                    title:'SHA Soft, İzmir',
                    link:'https://shayazilim.com/',
                    subtitle:'Intern-2 (Mar 2018 - Jul 2018)',
                    text: 'A planning program has been developed to facilitate the work of employees within the office and' +
                        ' shayazilim.com website has been written',
                    usedtech: 'C#, Asp.net, Mssql, Selenium, OOP, Wordpress'
                },
                {
                    color: 'red darken-3',
                    icon: 'mdi-star',
                    link:'https://zirve-bilgisayar.com/',
                    title:'Zirve Bilgisayar, İzmir',
                    subtitle:'Software Developer (Feb 2019 - Present)',
                    text: 'More than 10 small-medium WPF applications have been developed and on going and' +
                        ' Part of a major software for lawyers that has been going on since January 2020 (Vue Js,' +
                        ' Node Js, Typescript, (DB not decided yet)',
                    usedtech:'C#, WPF, Mysql, Vue Js, Node Js, Typescript'
                },
            ],
        }),
    }
</script>
