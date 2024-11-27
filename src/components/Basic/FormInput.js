import React from 'react'
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { Controller } from 'react-hook-form';


const FormInput = ({
  placeholder,
  className,
  showLable = true,
  Label,
  name,
  labelClass,
  control, classInput,
  type = "text",
  errors,
  classError,
  ...rest
}) => {
  return (
    <div className={className}>
      {showLable && (
        <label htmlFor={name} className={labelClass}>{Label}</label>
      )}
      <Controller control={control} name={name} render={({ field }) => {
         return(
           <Input {...field} type={type} placeholder={placeholder} className={classInput} {...rest}  /> 
         )}} />
      {errors[name] && (
        <span className={classError}>{errors[name]?.message}</span>
      )}
    </div>
  )
}

const FormCheckBox = ({
  control,
  onChange,
  name,
  label,
  errors,
  IsPassword,
  type,
  ErrorClass,
  CheckboxClass,
  options,
  isShowError,
  showLabel = true,
  labelText,
  ...rest
}) => {
  return (
      <div>
          <Controller
              control={control}
              name={name}
              render={({ field }) => (
                  <>
                      
                      <div className="">
                          <Checkbox className={CheckboxClass} onChange={(e)=>onChange(e)} {...field} {...rest} id={name} type={type}>{labelText}</Checkbox>
                      </div>
                  </>
              )}
          />
          {errors[name] && (
              isShowError === true ?
                  <p className={ErrorClass}>
                      {errors[name]?.message}
                  </p>
                  : null
          )}
      </div>
  );
};

export  {FormInput , FormCheckBox}
