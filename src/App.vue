<template>
  <v-app>
    <v-main>
      <appHome />
    </v-main>
  </v-app>
</template>

<script>
import appHome from "@/components/Home";
export default {
  name: "App",

  components: {
    appHome,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
