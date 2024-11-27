'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './SignIn.module.css';
import LogoImage from '../../Images/Logo_Image.png';
import { FormInput, FormCheckBox } from '../../components/Basic/FormInput';
import Button from '../../components/Basic/button';
import { notification, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const credentials = {
  email: 'admin@example.com',
  password: 'password123',
};

// Validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format. Add `@`.').required('Email is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean(),
});

const SignIn = () => {
  const [message, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data)
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);

      if (data.email === credentials.email && data.password === credentials.password) {
        message.open({
          message: 'Login Successful',
          description: 'You have successfully logged in.',
          type: 'success',
          duration: 2,
        });
        setTimeout(() => {
          navigate('/Home');
        }, 2000);
        
      } else {
        message.open({
          message: 'Login Failed',
          description: 'Invalid email or password. Please try again.',
          type: 'error',
          duration: 3,
        });
      }
    }, 2000);
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={spinning}>
        <div className="container-fluid">
          <div className="row d-flex flex-row">
            <div className={`col-lg-6 col-md-6 col-sm-6 ${style.SignInContainer}`}>
              <img src={LogoImage} alt="Company Logo" className={style.Logo} />
              <h4>Sign In</h4>
              <p>Sign in to stay connected.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  placeholder="Enter Your Email"
                  Label="Email"
                  classInput={style.Input}
                  className={style.inputContainer}
                  labelClass={style.Label}
                  classError={style.Error}
                  name="email"
                  type="email"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  placeholder="Enter Your Password"
                  Label="Password"
                  classInput={style.Input}
                  className={style.inputContainer}
                  labelClass={style.Label}
                  classError={style.Error}
                  name="password"
                  type="password"
                  errors={errors}
                  control={control}
                />
                <div className={style.rememberContainer}>
                  <FormCheckBox
                    name="rememberMe"
                    labelText="Remember me?"
                    ErrorClass={`${style.ErrorClass}`}
                    isShowError={false}
                    CheckboxClass={`${style.remember}`}
                    errors={errors}
                    control={control}
                  />
                  <Link to="/" className={style.ForgotPassword}>
                    Forgot Password?
                  </Link>
                </div>
                <Button Text="Sign In" buttonClass={style.buttonSignIn} onClick={handleSubmit(onSubmit)}/>
              </form>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-6 ${style.imageContainer}`}>
              <img
                src={LogoImage}
                alt="Sign In Illustration"
                className={style.SignInImage}
              />
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default SignIn;
