import axios from '@/lib/axios';
import { defineStore } from 'pinia';

export const useLookStore = defineStore('look', {
  state: () => ({
    lookId: 0,
    labels: [] as string[],
    data: [] as Object[]
  }),

  getters: {
    getData(state) {
      return state.data;
    },
    getLabels(state) {
      return state.labels;
    }
  },

  actions: {
    async runLook(): Promise<boolean> {
      try {
        console.log('runLook');

        const result = await axios.get('/looks/175');

        console.log(result);

        const labels = result.data.map((row) => {
          return row['order.created_date'];
        });

        const data = result.data.map((row) => {
          return row['order.total_sales'];
        });

        this.labels = labels;
        this.data = data;

        console.log(labels);
        console.log(data);
      } catch (error) {
        return false;
      }
    }
  }
});
