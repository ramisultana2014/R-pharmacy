import { useForm } from "react-hook-form";
import styled from "styled-components";
import Wrapper from "../assets/wrapper/Loginpgae";
import { useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { MiniSpinner } from "../components";
import { useLogin } from "../../features/authentication/useLogin";
function LoginPage({ toggleLoginForm }) {
  const { logIn, isPending } = useLogin();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          toggleLoginForm();
        }
      }
      // The event listener is set up with the capture phase (true in addEventListener), meaning the event is captured as it travels down the DOM tree.
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [toggleLoginForm]
  );
  function onSubmit(data) {
    logIn(data, {
      onSettled: () => reset(),
    });
  }
  return (
    <Wrapper>
      <div className="formContainer" ref={ref}>
        <button onClick={toggleLoginForm} className="btn-close">
          <HiXMark />
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors?.password?.message && (
              <span>{errors.password.message}</span>
            )}
          </div>
          <div className="btns">
            <button disabled={isPending} className="btn submit" type="submit">
              {isPending ? <MiniSpinner /> : "Log In"}
            </button>
            <button
              onClick={() => toggleLoginForm()}
              className="btn cancel"
              type="reset"
              disabled={isPending}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default LoginPage;
