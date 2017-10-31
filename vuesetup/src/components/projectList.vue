<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Completed</th>
          <td>Toggle</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects">
          <td>{{item.name}}</td>
          <td>{{item.assignedTo}}</td>
          <td>{{item.priority}}</td>
          <td><i v-if="item.completed" class="fa fa-check"></i></td>
          <td><complete-toggle :item="item" /></td>
        </tr>
      </tbody>
    </table>
    <projectStatus />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import completeToggle from './completeToggle';
  import projectStatus from './projectStatus';

  export default {
    name: 'projectList',
    components: {
      completeToggle,
      projectStatus
    },
    computed: mapState([
      'projects',
    ])
    /*
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    }
    */
  }
</script>

<style type="css">
</style>