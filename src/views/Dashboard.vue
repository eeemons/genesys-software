<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  data() {
    return {
      user: "",
      users: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("activeUser");
      this.$router.push("/login");
      window.login.reload();
    },
  },
  mounted() {
    if (localStorage.activeUser) {
      let localUsers = localStorage.users;
      this.users = JSON.parse(localUsers);
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  components: { FooterComponent },
};
</script>

<template>
  <div class="container">
    <h2>User list</h2>
    <div class="table" v-if="user.email === 'admin@admin.com'">
      <table id="customers">
        <tr>
          <th>Index</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index + 1">
          <td class="user-detail">{{ index + 1 }}</td>
          <td class="user-detail">{{ user.firstName }}</td>
          <td class="user-detail">{{ user.lastName }}</td>
          <td class="user-detail">{{ user.email }}</td>
          <td class="user-detail">{{ user.password }}</td>
        </tr>
        <tr>
          <td class="user-count" colspan="5">{{ users.length }} Users</td>
        </tr>
      </table>
    </div>
    <a href="" @click.prevent="logout()">Log out</a>
  </div>
  <FooterComponent />
</template>

<style scoped>
h2 {
  font-size: 42px;
  font-weight: 400;
  text-align: center;
}
a {
  display: block;
  text-align: center;
}
.container {
  min-width: 100%;
}
#customers {
  border-collapse: collapse;
  width: 50%;
  margin: 0 auto;
}

#customers td,
#customers,
th {
  padding: 8px;
}
.table {
  height: 50vh;
}
th {
  font-size: 13.33px;
  font-weight: 400;
  color: #00000080;
}

th,
td {
  border-bottom: 1px solid #00000080;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}
.user-count {
  font-size: 16px;
  font-weight: 600;
  color: #000000cc;
}
.user-detail {
  font-size: 13.33px;
  font-weight: 400;
  color: #000000cc;
}
</style>
