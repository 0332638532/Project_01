import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "DaoDien",
  fullName: "Phạm Văn Khánh",
  phoneNumber: "123456789",
  email: "khanhphamvan1910@gmail.com",
  password: "999999",
  role: 0,
  avatar: "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/192575913_3252690818311551_3507076349013219620_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=_F8-R_1KLQoAX_9KYyD&_nc_oc=AQl8wLKblTP4okVRUl4Ug7vvQF3iggTG5sH81lz0DLYbeEv065dkxTLUyg_JngUP4kI-mFW3ohEGc8Jl0PGIHGfq&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT_nDAYogb3YxY2qnGPMnw722DAONF98gd9a1kBjpfcXKQ&oe=62BE46D2"

};

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
  });

  // To able to use reducers we need to export them.
  export const { } = userSlice.actions;

  export default userSlice.reducer;