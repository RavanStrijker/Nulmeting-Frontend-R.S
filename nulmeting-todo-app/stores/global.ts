export const useGlobalStore = defineStore("globalStore", () => {
  const loading = ref(false);

  const startLoader = (): void => {
    loading.value = true;
  }
  const stopLoader = (): void => {
    loading.value = false;
  }

  return { loading, startLoader, stopLoader };
});