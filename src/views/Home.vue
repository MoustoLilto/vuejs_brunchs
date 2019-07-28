<template>
  <v-container>
    <v-layout justify-center row wrap>
<!--      <v-flex v-for="i in 2" :key="`6${i}`" xs12 sm6>-->
<!--        <v-card dark color="secondary">-->
<!--          <v-card-text class="px-0">6</v-card-text>-->
<!--        </v-card>-->
<!--      </v-flex>-->

      <v-flex xs12 sm6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
<!--        <v-btn large right router to ="/events/brunchs">See Brunchs</v-btn>-->
<!--        <v-btn large left router to ="/events/brunch/new">Create Brunch</v-btn>-->

    </v-layout>

    <v-layout row wrap>
      <v-carousel>
        <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
        >
          <v-sheet
                  :color="color"
                  height="100%"
                  tile
          >
            <v-layout
                    align-center
                    fill-height
                    justify-center
            >
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  },
}
</script>
