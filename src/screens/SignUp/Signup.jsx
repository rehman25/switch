import React from 'react';
import style from './Signup.module.css';
import SignInImage from "../../Images/SignIn_Image.png";
import LogoImage from "../../Images/Logo_Image.png";
import { FormInput, FormCheckBox } from '../../components/Basic/FormInput';
import Button from '../../components/Basic/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// Define the validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format add `@` ').required('Email is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean(),
});

const Signup = () => {
  const Navigate = useNavigate();
  const {
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (data) => {
    console.log(data);
    Navigate('/Home');
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className={`col-lg-6 col-md-6 col-sm-6 ${style.SignInContainer}`}>
          <img src={LogoImage} alt='Company Logo' className={style.Logo} />
          <h4>Sign In</h4>
          <p>Sign in to stay connected.</p>
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              placeholder='Enter Your Email'
              label='Email'
              classInput={style.Input}
              className={style.inputContainer}
              labelClass={style.Label}
              classError={style.Error}
              type="email"
              errors={errors}
              control={control}
            />
            <FormInput
              name='password'
              placeholder='Enter Your Password'
              label='Password'
              classInput={style.Input}
              className={style.inputContainer}
              labelClass={style.Label}
              classError={style.Error}
              type="password"
              errors={errors}
              control={control}
            />
            <div className={style.rememberContainer}>
              <FormCheckBox
                name='rememberMe'
                labelText='Remember me?'
                checkboxClass={style.remember}
                control={control}
                errors={errors}
              />
              <a href="/">Forgot Password?</a>
            </div>
          </form>
            <Button Text='Sign In' buttonClass={style.buttonSignIn} onClick={handleSubmit} />
        </div>
        <div className={`col-lg-6 col-md-6 col-sm-6 ${style.imageContainer}`}>
          <img src={SignInImage} alt='Sign In Illustration' className={style.SignInImage} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
