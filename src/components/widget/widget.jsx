import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useTranslation } from "react-i18next";

function Widget(props) {
  const { t } = useTranslation();
  let data;
  let money = 500;
  let diff = 30;

  if (props.type === "user") {
    data = {
      title: t("users"),
      isMoney: false,
      link: t("see_all_users"),
      icon: (
        <PersonOutlineOutlinedIcon
          className="widget-icon"
          style={{ color: " #ad1111", backgroundColor: "rgba(255, 0, 0, 0.2)" }}
        />
      ),
    };
  } else if (props.type === "order") {
    data = {
      title: t("orders"),
      isMoney: false,
      link: t("see_all_orders"),
      icon: (
        <AddShoppingCartOutlinedIcon
          className="widget-icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 185, 32, 0.2)",
          }}
        />
      ),
    };
  } else if (props.type === "earning") {
    data = {
      title: t("earning"),
      isMoney: true,
      link: t("see_all_earning"),
      icon: (
        <MonetizationOnOutlinedIcon
          className="widget-icon"
          style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
        />
      ),
    };
  } else {
    data = {
      title: t("balance"),
      isMoney: true,
      link: t("see_balance"),
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="widget-icon"
          style={{ color: "#FF884B", backgroundColor: " #FFF9B0" }}
        />
      ),
    };
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title.toUpperCase()}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {money}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div
          className={`percentage ${props.increase ? "positive" : "negative"}`}
        >
          {props.increase ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
