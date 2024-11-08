import { useForm } from "react-hook-form";
import styled from "styled-components";
import Wrapper from "../assets/wrapper/SignUpFrom";
import { useSignUp } from "../../features/authentication/useSignUp";
import { useNavigate } from "react-router-dom";
import { MiniSpinner } from "../components";
function SignUpForm() {
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signUp, isPending } = useSignUp();
  function onSubmit(data) {
    //console.log(data);
    signUp(data, {
      onSettled: () => reset(),
    });
  }
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <input
          placeholder="Name"
          autoComplete="given-name"
          type="text"
          id="name"
          {...register("name", {
            required: "this field is required",
            minLength: {
              value: 2,
              message: "name (min 2 characters)",
            },
          })}
          disabled={isPending}
        />
        {errors?.name?.message && <span>{errors.name.message}</span>}
      </div>
      <div className="form-row">
        <input
          placeholder="Email"
          autoComplete="email"
          type="email"
          id="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isPending}
        />
        {errors?.email?.message && <span>{errors.email.message}</span>}
      </div>
      <div className="form-row">
        <input
          placeholder="password"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "Password (min 8 characters)",
            },
          })}
          disabled={isPending}
        />
        {errors?.password?.message && <span>{errors.password.message}</span>}
      </div>
      <div className="form-row">
        <input
          placeholder="passwordConfirm"
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "passwords need to be match",
          })}
          disabled={isPending}
        />
        {errors?.passwordConfirm?.message && (
          <span>{errors.passwordConfirm.message}</span>
        )}
      </div>
      <div className="btns">
        <button disabled={isPending} className="btn submit" type="submit">
          {isPending ? <MiniSpinner /> : "SUBMIT"}
        </button>
        <button
          className="btn cancel"
          type="reset"
          disabled={isPending}
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </Wrapper>
  );
}

export default SignUpForm;
