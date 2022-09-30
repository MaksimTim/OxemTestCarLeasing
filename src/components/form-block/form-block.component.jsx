import React from "react";
import InputTitle from "../input-title/input-title.component";
import FormInput from "../form-input/form-input.component";
import InputBlock from "../input-block/input-block.components";
import "./form-block.styles.scss";
import Button from "../button/button.component";
import CheckValue from "../check-value/check-value.component";
import {useSelector} from "react-redux";
import {selectLeasing} from "../../redux/slices/leasingSlice";

const FormBlock = () => {
  const {carPrice, anInitialFee} = useSelector(selectLeasing);


  return (
    <form className="form-block-container">
      <div className="form-block-row">
        <InputBlock>
          <InputTitle>Стоимость автомобиля</InputTitle>
          <FormInput value={carPrice} name="car-price" min="1000000" max="6000000"  />
        </InputBlock>
        <InputBlock>
          <InputTitle>Первоначальный взнос</InputTitle>
          <FormInput name="car-price" min="10" max="60" />
        </InputBlock>
        <InputBlock>
          <InputTitle>Срок лизинга</InputTitle>
          <FormInput name="car-price" min="10" max="100" />
        </InputBlock>
      </div>
      <div className="form-block-row">
        <InputBlock>
          <InputTitle>Сумма договора лизинга</InputTitle>
          <CheckValue>446643 p</CheckValue>
        </InputBlock>
        <InputBlock>
          <InputTitle>Ежемесячный платеж</InputTitle>
          <CheckValue>3460643 p</CheckValue>
        </InputBlock>
        <Button />
      </div>
    </form>
  );
};

export default FormBlock;
