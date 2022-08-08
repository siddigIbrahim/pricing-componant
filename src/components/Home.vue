<template>
  <v-container
    class="main-container"
    :class="dark == true ? 'dark-main-container' : 'main-container'"
    fluid
  >
    <v-switch inset v-model="dark" color="hsl(174, 86%, 45%)" dense></v-switch>

    <v-row class="d-flex justify-center align-center">
      <v-col
        cols="12"
        class="
          title-column
          d-flex
          justify-center
          align-center
          mt-5 mt-sm-15
          flex-column
          pa-0
        "
      >
        <p
          class="main-title text-sm-h3"
          :style="{ color: dark == true ? 'white' : 'hsl(227, 35%, 25%)' }"
        >
          Simple, trafic based pricing
        </p>
        <p class="sub-title text-center">
          sign-up for our 30-day trial. no credit card required
        </p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-card
          width="500"
          class="pricing-card"
          :style="{ background: dark == true ? 'hsl(225, 20%, 60%)' : 'white' }"
          flat
        >
          <v-container>
            <v-row>
              <v-col cols="12" class="col-sm-6" order="first">
                <p
                  class="sub-title text-uppercase text-center text-sm-left"
                  :style="{
                    color: dark == true ? 'white' : 'hsl(225, 20%, 60%)',
                  }"
                >
                  {{ pageviews }} pageviews
                </p>
              </v-col>
              <v-col
                cols="12"
                class="
                  d-flex
                  justify-center justify-sm-end
                  col-sm-6
                  text-center text-sm-left
                "
                order="last"
              >
                <p class="month display-1 font-weight-black">
                  ${{ price
                  }}<span
                    class="sub-title font-weight-regular ml-2"
                    :style="{
                      color: dark == true ? 'white' : 'hsl(225, 20%, 60%)',
                    }"
                  >
                    /month</span
                  >
                </p>
              </v-col>
              <v-col cols="12" class="d-flex justify-center" order-sm="last">
                <input
                  v-model="g"
                  :style="{ background: bg }"
                  @input="rangeColor()"
                  class="range"
                  type="range"
                  step="1"
                  min="0"
                  max="4"
                  value="0"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                class="d-flex flex-row justify-end info-column"
                :style="{
                  color: dark == true ? 'white' : 'hsl(225, 20%, 60%)',
                }"
              >
                <div class="d-flex align-center mr-5">monthly billing</div>
                <v-switch inset color="hsl(174, 86%, 45%)" dense></v-switch>
                <div class="d-flex align-center">yearly billing</div>
                <div class="discount d-flex align-center ml-3">
                  <span
                    >-25 %
                    <span class="d-none d-sm-inline">discount</span></span
                  >
                </div>
              </v-col>
            </v-row>
            <v-row class="final-row">
              <v-col
                cols="12"
                class="col-sm-6 d-flex justify-center justify-sm-left mt-3"
              >
                <ul
                  :style="{
                    color: dark == true ? 'white' : 'hsl(225, 20%, 60%)',
                  }"
                >
                  <li>
                    <div class="d-flex flex-row align-center mb-2">
                      <div class="check"></div>
                      unlimited websites
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-row align-center mb-2">
                      <div class="check"></div>
                      100% data ownership
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-row align-center mb-2">
                      <div class="check"></div>
                      email reports
                    </div>
                  </li>
                </ul>
              </v-col>
              <v-col
                cols="12"
                class="col-sm-6 d-flex align-center justify-center mb-5"
              >
                <button>Start my trial</button>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      g: 0,
      bg: "",
      price: "8.00",
      dark: false,
      pageviews: "10k",
    };
  },
  methods: {
    rangeColor() {
      console.log(this.g);

      var value = ((this.g - 0) / (4 - 0)) * 100;
      this.bg =
        "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
        value +
        "%, hsl(224, 65%, 95%) " +
        value +
        "%, hsl(224, 65%, 95%) 100%)";
      if (this.g == 0) {
        this.price = "8.00";
        this.pageviews = "10k";
      }
      if (this.g == 1) {
        this.price = "12.00";
        this.pageviews = "50k";
      }
      if (this.g == 2) {
        this.price = "16.00";
        this.pageviews = "100k";
      }
      if (this.g == 3) {
        this.price = "24.00";
        this.pageviews = "500k";
      }
      if (this.g == 4) {
        this.price = "36.00";
        this.pageviews = "1m";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap");
.main-container {
  width: 100vw;
  min-height: 100vh;
  background-image: url("../assets/bg-pattern.svg");
  background-position: top;
  background-size: contain;
  transition: all 0.3s ease-in-out;

  font-family: "Manrope", sans-serif;
  color: hsl(225, 20%, 60%);
  font-size: 15px;
  padding: 1rem;
}
.dark-main-container {
  background-color: hsl(227, 35%, 25%);
  background-image: none;
}

.title-column {
  background-image: url("../assets/pattern-circles.svg");
  background-position: center;
  background-size: contain;
}
.main-title {
  color: hsl(227, 35%, 25%);
  font-size: 1.3rem;
  text-align: center;
  font-weight: 800;
}
.sub-title {
  color: hsl(225, 20%, 60%);
  font-size: 15px;
  letter-spacing: 1px;
}
.pricing-card {
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 15px rgba(209, 209, 209, 0.1) !important;
}
.month {
  display: inline-flex;
  align-items: flex-start;
  color: hsl(227, 35%, 25%);
}
.range {
  width: 400px;
  height: 7px;
  -webkit-appearance: none;
  background: hsl(224, 65%, 95%);
  outline: none;
  border-radius: 15px;
}
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 35px;
  height: 35px;
  background-image: url("../assets/icon-slider.svg");
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  background-color: hsl(174, 86%, 45%);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 10px 20px 5px hsl(174, 77%, 80%);
  transition: all 0.3s ease-in-out;
}
.range::-webkit-slider-thumb:hover {
  background-color: #24aea0;
}
.info-column {
  color: hsl(225, 20%, 60%);
  font-size: 13px;
  text-transform: capitalize;
  font-weight: 600;
}
.discount span {
  background: hsl(14, 92%, 95%);
  color: hsl(15, 100%, 70%);
  padding: 2px 3px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  text-transform: none;
}
ul {
  list-style: none;
  text-transform: capitalize;
  font-size: 12px;
  color: hsl(225, 20%, 60%);
 
}
.check {
  width: 10px;
  height: 10px;
  background-image: url("../assets/icon-check.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 1rem;
}
button {
  font-size: 12px;
  font-weight: 800;
  padding: 10px 35px;
  background-color: hsl(227, 35%, 25%);
  border-radius: 25px;
  color: hsl(226, 100%, 87%);
  transition: all 0.3s ease-in-out;
}
button:hover {
  color: white;
}
.final-row {
  border-top: solid 1px hsl(0, 0%, 95%);
  padding: 1.5rem auto;
}
@media only screen and (max-width: 600px) {
  .main-container {
    background-size: 250%;
    background-position-x: left;
  }
}
</style>