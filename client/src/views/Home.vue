<template>
  <div>
    <h1>Looker API Example</h1>
    <p>Uses Chart.js to display data from an Express app that connects to Looker</p>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      chart-id="chart"
      dataset-id-key="label"
      :width="400"
      :height="200"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { useLookStore } from '../stores/look';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const lookStore = useLookStore();

const chartOptions = { responsive: true };

const labels = lookStore.getLabels;
const data = lookStore.getData;

const chartData = {
  labels,
  datasets: [{ data, backgroundColor: '#ffaaaa' }]
};

onMounted(() => {
  lookStore.runLook;
});
</script>
