import React, { useEffect } from "react";
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

  const carPriceChange = (event) => {
    let newCarPrice = event.target.value;
    if (newCarPrice < 1000000) {
      setTimeout(() => dispatch(setCarPrice(1000000)), 2000);
    }
    if (newCarPrice > 6000000) {
      setTimeout(() => dispatch(setCarPrice(6000000)), 2000);
    }
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
    </form>
  );
};

export default FormBlock;
