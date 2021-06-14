<template>
  <div class="footer-wrapper">
    <mdb-footer color="indigo" id="footer" class="font-small pt-4 mt-4">
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          <p class="text-monospace">
            NinoStyle Designed by Noah Osuolale with Stutord
          </p>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer } from 'mdbvue';
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
  },
};
</script>

<style scoped>
#footer {
  background-color: #007bff;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  overflow: hidden;
}
.footer-wrapper {
  margin-top: 5em;
}
</style>
