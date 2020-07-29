<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <h5 style="color: darkgrey">HELLO, MY NAME IS</h5>
        <h1>KAAN YILMAZ</h1>
        <p style="color: bisque;  font-family: 'Lucida Console' ">I'm a software engineer and i code stuff, go check out my CV.</p>
        <v-btn color="lime">Download CV</v-btn>
      </v-col>
      <v-col cols="5">
        <v-img height="600" src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Welcome',
  }
</script>
