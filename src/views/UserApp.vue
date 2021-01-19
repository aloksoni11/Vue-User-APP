<template>
  <b-container>
    <b-card title="Filter" class="mb-4 shadow">
      <b-form>
        <b-form-row>
          <b-form-group class="col-md-4" label="Role" label-for="role">
            <!-- role select -->
            <b-form-select v-model="selectedRole" @input="filterTableData" :options="roleOptions">

            </b-form-select>
          </b-form-group>
          <b-form-group class="col-md-4" label="Plan" label-for="plan">
            <!-- plan select -->
            <b-form-select v-model="selectedPlan" @input="filterTableData" :options="planOptions">

            </b-form-select>
          </b-form-group>
          <b-form-group class="col-md-4" label-for="status" label="Status">
            <!-- status select -->
            <b-form-select
              v-model="selectedStatus"
              :options="statusOptions"
              @input="filterTableData"
            ></b-form-select>
          </b-form-group>
        </b-form-row>
      </b-form>
    </b-card>

    <!-- user list -->
    <b-card class="mb-5 shadow" body-class="pb-0">
      <b-form-group>
        <b-form-input v-model="searchQuery" @input="filterTableData" placeholder="Search....">
        </b-form-input>
      </b-form-group>
      <b-table responsive striped :items="tableData"></b-table>
      <div v-show="!tableData.length" class="text-center p-2">No matching records found</div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedRole: 'All',
      selectedPlan: 'All',
      selectedStatus: 'All',
      roleOptions: [
        { value: 'All', text: 'All' },
        { value: 'Admin', text: 'Admin' },
        { value: 'Author', text: 'Author' },
        { value: 'Editor', text: 'Editor' },
        { value: 'Maintainer', text: 'Maintainer' },
        { value: 'Subscriber', text: 'Subscriber' }],
      planOptions: [
        { value: 'All', text: 'All' },
        { value: 'Basic', text: 'Basic' },
        { value: 'Company', text: 'Company' },
        { value: 'Enterprise', text: 'Enterprise' },
        { value: 'Team', text: 'Team' }],
      statusOptions: [
        { value: 'All', text: 'All' },
        { value: 'Pending', text: 'Pending' },
        { value: 'Active', text: 'Active' },
        { value: 'Inactive', text: 'Inactive' }],
    };
  },
  computed: {
    tableData() {
      return this.$store.state.userList;
    },
  },
  methods: {
    filterTableData() {
      this.$store.dispatch('getUserList', {
        query: this.searchQuery,
        role: this.selectedRole,
        plan: this.selectedPlan,
        status: this.selectedStatus,
      });
    },
  },
  mounted() {
    this.filterTableData();
  },
};
</script>
