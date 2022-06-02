import React, { useState } from "react";
import "./usersection.scss";
import Bell from "../../Assets/Bell";
import { useNavigate } from "react-router";

const imgUrl =
  "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/192575913_3252690818311551_3507076349013219620_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=_F8-R_1KLQoAX_9KYyD&_nc_oc=AQl8wLKblTP4okVRUl4Ug7vvQF3iggTG5sH81lz0DLYbeEv065dkxTLUyg_JngUP4kI-mFW3ohEGc8Jl0PGIHGfq&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT_nDAYogb3YxY2qnGPMnw722DAONF98gd9a1kBjpfcXKQ&oe=62BE46D2";
const notifications = [
  { user: "Phạm Văn Khánh", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Thanh Sơn", content: "12h30 ngày 31/2/2020" },
  { user: "Chu Tiểu VI", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Thị Thùy Trang", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Thị Thu Lan", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Quang Huy", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Hoàng Yến", content: "12h30 ngày 31/2/2020" },
  { user: "Phạm Văn Khánh", content: "12h30 ngày 31/2/2020" },
  { user: "Phạm Văn Khánh", content: "12h30 ngày 31/2/2020" },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="app__user-section">
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <Bell />
        {notificationExpand && (
          <div className="notification-container">
            <div className="notification-container__header">Thông báo</div>
            <div className="notification-container__scroll-container">
              {notifications.map((item) => {
                return (
                  <div className="notification-item">
                    <div className="notification-item__title">
                     { `Người dùng: ${item.user}`}
                    </div>
                    <div className="notification-item__content">
                       {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={imgUrl} alt="" onClick={() => navigate("user-info")}/>
      </div>
      <div className="hello-user">
        <span className="hello">Xin chào</span>
        <span className="user-name">Phạm Văn Khánh</span>
      </div>
    </div>
  );
};

export default UserSection;