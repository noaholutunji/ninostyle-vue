<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand to="/">
      <em>NinoStyle</em>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item to="/" active>Home</mdb-nav-item>
        <mdb-nav-item to="/products">Products</mdb-nav-item>
        <mdb-nav-item to="/login" v-if="!auth">Login</mdb-nav-item>
        <mdb-nav-item to="/register" v-if="!auth">Signup</mdb-nav-item>
        <mdb-nav-item to="/cart">Cart</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle
            tag="a"
            navLink
            color="indigo"
            slot="toggle"
            waves-fixed
            v-if="auth"
            >Profile</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Orders</mdb-dropdown-item>
            <mdb-dropdown-item>Account</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item v-if="auth" @click="onLogout">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
} from 'mdbvue';

export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },

  name: 'HelloWorld',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
  },

  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
