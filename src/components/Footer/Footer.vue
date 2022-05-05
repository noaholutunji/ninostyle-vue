<template>
  <div class="push-up">
    <mdb-footer color="indigo" class="footer font-small pt-4 mt-4">
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2019 Copyright:
          <h5 class="text-monospace">
            NinoStyle Designed by Noah Osuolale with Stutord
          </h5>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
.push-up {
  margin-top: 5em;
}
</style>
