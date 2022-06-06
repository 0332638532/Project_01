import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../redux/store";
import Textbox from "../../Textbox/Textbox";
import "./userinfo.scss"
import { Camera } from "../../../Assets/Camera";
const imgUrl =
  "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/192575913_3252690818311551_3507076349013219620_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=bbHcgf3pFlUAX-f0utk&_nc_oc=AQm5zqPi_BJs7R0jwRc1gUAP07fmMv4do9QBe7opvPcqdet_cmndN6U79o-cgmDAafX1KNJ2LU_zkz1YqHUH_ual&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT_CAYGtIWjuXFwDry2fD0Kic6Hit-UTDbbqPnPvgXBahQ&oe=62C23B52";

const UserInfo: React.FC = () => {
    const userInfo = useSelector((state : RootState) => state.user)
    return (
      <div className="app__layout-user-info">
        <div className="col">
          <div className="app__layout-user-info__avatar">
            <img src={imgUrl} alt="" />

            </div>
            <div className="app__layout-user__camera">
              <Camera />
          </div>
          <div className="app__layout-user-info__name">{userInfo.fullName}</div>
        </div>
        <div className="col-flex">
          <Textbox label="Tên người dùng" value={userInfo.fullName}/>
          <Textbox label="Số điện thoại:" value={userInfo.phoneNumber}/>
          <Textbox label="Email:" value={userInfo.email}/>
        </div>
        <div className="col-flex">
          <Textbox label="Tên đăng nhập" value={userInfo.userName}/>
          <Textbox label="Mật khẩu" value={userInfo.password}/>
          <Textbox label="Vai trò" value={`${userInfo.role === 0 ? `Admin` : `Contributor`}`}/>
        </div>
      </div>
    );
  };

export default UserInfo;