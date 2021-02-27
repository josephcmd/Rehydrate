import create from 'zustand'
export const useStore = create((set) => ({
    water: 0,
    setWater: (inp)=>set((state)=>({water: inp})),
    
  }));