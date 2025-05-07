import { reactive, ref } from 'vue';
import * as d3 from 'd3';

export default function useGetChartData<T>(url: string) {
  const DATA_URL = url;

  const loading = ref(false);
  const error = ref('');
  const data: { data: T[] | null } = reactive({
    data: null,
  });

  const fetchData = async () => {
    loading.value = true;

    try {
      const response = await d3.json<T[]>(DATA_URL);

      if (!response) throw new Error('Data retrieval failed');
      data.data = response;
    } catch (err) {
      error.value = err as string;
    }

    loading.value = false;
  };

  fetchData();

  return { data, error, loading };
}
