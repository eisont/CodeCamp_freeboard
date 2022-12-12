import { useState } from "react";
import MyPointUI from "./MyPoint.presenter";

const MyPoint = () => {
  const [total, setTotal] = useState(true);
  const [charge, setCharge] = useState(false);
  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);

  const onClickTotal = () => {
    setTotal(true);
    setCharge(false);
    setBuy(false);
    setSell(false);
  };

  const onClickCharge = () => {
    setTotal(false);
    setCharge(true);
    setBuy(false);
    setSell(false);
  };

  const onClickBuy = () => {
    setTotal(false);
    setCharge(false);
    setBuy(true);
    setSell(false);
  };

  const onClickSell = () => {
    setTotal(false);
    setCharge(false);
    setBuy(false);
    setSell(true);
  };

  return (
    <MyPointUI
      total={total}
      charge={charge}
      buy={buy}
      sell={sell}
      onClickTotal={onClickTotal}
      onClickCharge={onClickCharge}
      onClickBuy={onClickBuy}
      onClickSell={onClickSell}
    />
  );
};

export default MyPoint;
