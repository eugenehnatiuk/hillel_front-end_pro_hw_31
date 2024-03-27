import { createSlice } from '@reduxjs/toolkit';

const hideBannerSlice = createSlice({
  name: 'hideBanner',
  initialState: { value: false },
  reducers: {
    bannerHide: (state) => {
      state.value = true;
    },
    bannerShow: (state) => {
      state.value = false;
    },
  },
});

export default hideBannerSlice.reducer;
export const { bannerHide, bannerShow } = hideBannerSlice.actions;
