import { create } from 'zustand';

const useStore = create((set) => ({
  jsonData: null,

  setJsonData: (data) => {
    const jsonData = typeof data === 'string' ? JSON.parse(data) : data;

    set({ jsonData });
  },
}));

export default useStore;
