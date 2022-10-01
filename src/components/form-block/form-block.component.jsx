import React, { useEffect, useState } from "react";
import InputTitle from "../input-title/input-title.component";
import FormInput from "../form-input/form-input.component";
import InputBlock from "../input-block/input-block.components";
import "./form-block.styles.scss";
import Button from "../button/button.component";
import CheckValue from "../check-value/check-value.component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLeasing,
  setCarPrice,
  setInitialFee,
  setLeasePeriod,
  setMonthPayment,
  setPercentage,
  setTotalSum,
} from "../../redux/slices/leasingSlice";
import FormInputRange from "../form-input-range/form-input-range.component";
import PercentBlock from "../percent-block/percent-block.component";
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

const minMaxInputChanger = (value, min, max) => {
  let newValue = value;
  if (value < min) {
    newValue = min;
  }
  if (value > max) {
    newValue = max;
  }
  return newValue;
};

const FormBlock = () => {
  const {
    carPrice,
    percentage,
    anInitialFee,
    leasePeriod,
    totalSum,
    monthPayment,
  } = useSelector(selectLeasing);

  const dispatch = useDispatch();
  const [carPriceValue, setCarPriceValue] = useState(carPrice);

  const carPriceChange = (e) => {
    setCarPriceValue(e.target.value);
    dispatch(setCarPrice(carPriceValue));
  };

  const carPriceOnBlur = () => {
    const newCarPrice = minMaxInputChanger(carPriceValue, 1000000, 6000000);
    setCarPriceValue(newCarPrice);
    dispatch(setCarPrice(newCarPrice));
  };

  const percentageChange = (event) => {
    dispatch(setPercentage(event.target.value));
    dispatch(setInitialFee(event.target.value));
  };

  const leasePeriodChange = (event) => {
    dispatch(setLeasePeriod(event.target.value));
  };

  useEffect(() => {
    dispatch(setMonthPayment());
    dispatch(setTotalSum());
  }, [carPrice, percentage, anInitialFee, leasePeriod]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CarPrice>
        <InputTitle>Стоимость автомобиля</InputTitle>
        <InputCarPrice
          onBlur={carPriceOnBlur}
          value={carPriceValue}
          onChange={carPriceChange}
          name="carPrice"
          min="1000000"
          max="6000000"
          step="10"
        />
        <InputRangeCarPrice
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
          value={percentage}
          onChange={percentageChange}
          name="percentage"
          min="10"
          max="60"
        />
        <InputRangeInitialFee
          value={percentage}
          onChange={percentageChange}
          name="percentage"
          min="10"
          max="60"
        />
      </InitialFee>
      <LeasePeriod>
        <InputTitle>Срок лизинга</InputTitle>
        <InputLeasePeriod
          value={leasePeriod}
          onChange={leasePeriodChange}
          name="leasePeriod"
          min="1"
          max="60"
        />
        <InputRangeLeasePeriod
          value={leasePeriod}
          onChange={leasePeriodChange}
          name="leasePeriod"
          min="1"
          max="60"
        />
      </LeasePeriod>
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
