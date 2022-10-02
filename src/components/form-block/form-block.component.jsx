import React, { useEffect, useState } from "react";
import {
  selectLeasing,
  setCarPrice,
  setInitialFee,
  setLeasePeriod,
  setMonthPayment,
  setPercentage,
  setTotalSum,
} from "../../redux/slices/leasingSlice";
import { useDispatch, useSelector } from "react-redux";
import { minMaxInputChanger } from "../../utils/utils";

import InputTitle from "../input-title/input-title.component";
import Button from "../button/button.component";
import CarPrice from "../car-price/car-price.component";
import InitialFee from "../initial-fee/initial-fee.component";
import InputCarPrice from "../car-price/car-price-input.component";
import InputRangeCarPrice from "../car-price/car-price-input-range.component";
import InitialFeeBlock from "../initial-fee/initial-fee-block.component";
import InputRangeInitialFee from "../initial-fee/initial-fee-input-range.component";
import InputInitialFee from "../initial-fee/initial-fee-input.component";
import LeasePeriod from "../lease-period/lease-period.component";
import InputLeasePeriod from "../lease-period/lease-period-input.component";
import InputRangeLeasePeriod from "../lease-period/lease-period-input-range.component";
import Total from "../total/total.component";
import TotalValue from "../total/total-value.component";
import MonthPay from "../month-pay/month-pay.component";
import MonthPayValue from "../month-pay/month-pay-value.component";

import { usePostFromFormMutation } from "../../redux/api/leasingApi";

const FormBlock = () => {
  //данные из хранилища redux
  const {
    carPrice,
    percentage,
    anInitialFee,
    leasePeriod,
    totalSum,
    monthPayment,
  } = useSelector(selectLeasing);
  const dispatch = useDispatch();

  //post запрост rtk query
  const [postFromForm, { isLoading }] = usePostFromFormMutation();

  //состояние инпутов
  const [carPriceValue, setCarPriceValue] = useState(carPrice);
  const [percentageValue, setPercentageValue] = useState(percentage);
  const [leasePerValue, setLeasePerValue] = useState(leasePeriod);

  const carPriceChange = (e) => {
    setCarPriceValue(e.target.value);
    dispatch(setCarPrice(e.target.value));
  };
  const carPriceOnBlur = () => {
    const newValue = minMaxInputChanger(carPriceValue, 1000000, 6000000);
    setCarPriceValue(newValue);
    dispatch(setCarPrice(newValue));
  };

  const percentageChange = (e) => {
    setPercentageValue(e.target.value);
    dispatch(setPercentage(e.target.value));
    dispatch(setInitialFee());
  };
  const percentageOnBlur = () => {
    const newValue = minMaxInputChanger(percentageValue, 10, 60);
    setPercentageValue(newValue);
    dispatch(setPercentage(newValue));
    dispatch(setInitialFee());
  };

  const leasePeriodChange = (e) => {
    setLeasePerValue(e.target.value);
    dispatch(setLeasePeriod(e.target.value));
  };
  const leasePeriodOnBlur = () => {
    const newValue = minMaxInputChanger(leasePerValue, 1, 60);
    setLeasePerValue(newValue);
    dispatch(setLeasePeriod(newValue));
  };

  //обновление полей после расчета
  useEffect(() => {
    dispatch(setMonthPayment());
    dispatch(setTotalSum());
  }, [carPrice, percentage, anInitialFee, leasePeriod]);

  //отправка формы при клике на кнопку
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPost = {
      carPrice,
      percentage,
      anInitialFee,
      leasePeriod,
      totalSum,
      monthPayment,
    };

    await postFromForm(formPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CarPrice>
        <InputTitle>Стоимость автомобиля</InputTitle>
        <InputCarPrice
          disabled={isLoading ? "disabled" : ""}
          onBlur={carPriceOnBlur}
          value={carPriceValue}
          onChange={carPriceChange}
          name="carPrice"
          min="1000000"
          max="6000000"
          step="10"
        />
        <InputRangeCarPrice
          disabled={isLoading ? "disabled" : ""}
          value={carPriceValue}
          onChange={carPriceChange}
          name="carPrice"
          min="1000000"
          max="6000000"
          step="10"
        />
      </CarPrice>
      <InitialFee>
        <InputTitle>Первоначальный взнос</InputTitle>
        <InitialFeeBlock>{anInitialFee} ₽</InitialFeeBlock>
        <InputInitialFee
          disabled={isLoading ? "disabled" : ""}
          value={percentageValue}
          onBlur={percentageOnBlur}
          onChange={percentageChange}
          name="percentage"
          min="10"
          max="60"
        />
        <InputRangeInitialFee
          disabled={isLoading ? "disabled" : ""}
          value={percentageValue}
          onChange={percentageChange}
          name="percentage"
          min="10"
          max="60"
        />
      </InitialFee>
      <LeasePeriod>
        <InputTitle>Срок лизинга</InputTitle>
        <InputLeasePeriod
          disabled={isLoading ? "disabled" : ""}
          value={leasePerValue}
          onBlur={leasePeriodOnBlur}
          onChange={leasePeriodChange}
          name="leasePeriod"
          min="1"
          max="60"
        />
        <InputRangeLeasePeriod
          disabled={isLoading ? "disabled" : ""}
          value={leasePerValue}
          onChange={leasePeriodChange}
          name="leasePeriod"
          min="1"
          max="60"
        />
      </LeasePeriod>
      <Total>
        <InputTitle>Сумма договора лизинга</InputTitle>
        <TotalValue>{totalSum} ₽</TotalValue>
      </Total>
      <MonthPay>
        <InputTitle>Ежемесячный платеж от</InputTitle>
        <MonthPayValue>{monthPayment} ₽</MonthPayValue>
      </MonthPay>

      <Button disabled={isLoading ? "disabled" : ""} />
    </form>
  );
};

export default FormBlock;

/*
<form onSubmit={handleSubmit} className="form-block-container">
  <div className="form-block-row">
    <InputBlock>
      <InputTitle>Стоимость автомобиля</InputTitle>
      <FormInput
        value={carPrice}
        onChange={carPriceChange}
        name="carPrice"
        min="1000000"
        max="6000000"
        step="10"
      />
      <FormInputRange
        value={carPrice}
        onChange={carPriceChange}
        name="carPrice"
        min="1000000"
        max="6000000"
        step="10"
      />
    </InputBlock>
    <InputBlock>
      <InputTitle>Первоначальный взнос</InputTitle>
      <PercentBlock>{percentage}</PercentBlock>
      <FormInput
        value={anInitialFee}
        onChange={percentageChange}
        name="anInitialFee"
        min="10"
        max="60"
      />
      <FormInputRange
        value={percentage}
        onChange={percentageChange}
        name="percentage"
        min="10"
        max="60"
      />
    </InputBlock>
    <InputBlock>
      <InputTitle>Срок лизинга</InputTitle>
      <FormInput
        value={leasePeriod}
        onChange={leasePeriodChange}
        name="leasePeriod"
        min="1"
        max="60"
      />
      <FormInputRange
        value={leasePeriod}
        onChange={leasePeriodChange}
        name="leasePeriod"
        min="1"
        max="60"
      />
    </InputBlock>
  </div>
  <div className="form-block-row">
    <InputBlock>
      <InputTitle>Сумма договора лизинга</InputTitle>
      <CheckValue>{totalSum} p</CheckValue>
    </InputBlock>
    <InputBlock>
      <InputTitle>Ежемесячный платеж от</InputTitle>
      <CheckValue>{monthPayment} p</CheckValue>
    </InputBlock>
    <Button />
  </div>
</form>*/
