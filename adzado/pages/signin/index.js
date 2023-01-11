// Next
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

// Layout
import Layout from "../../components/@core/layouts/Layout";
import { AuthContext } from "../context/authContext";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { error, dispatch } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    const response = await axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        if (res?.data?.user?.role == "admin") {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          router.push("/admin/dashboard");
        }
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "Only can admin access!" },
        });
        return error;
      });
  };

  return (
    <Layout>
      <Head>
        <title>Adzado</title>
        <meta
          name="description"
          content="Exclusive Verified Leads that pay off in new business! inbound calls and leads for insurance, financial services, and other industries."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-gradient-gray">
        <section className="container flex justify-between px-5 mx-auto">
          <div className="w-full mx-auto lg:w-auto lg:mx-0">
            <h2 className="font-semibold text-[43.29px] text-[#242424] text-center mt-16">
              Welcome back
            </h2>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center gap-4 xl:px-20 px-5 py-2 font-bold border-2 border-[#1E1E1E] dark:border-white rounded-lg font-inter mt-6">
                <div className="w-[16px]">
                  <Image
                    src="/Icono_Google.svg"
                    alt="Icono_Google"
                    width={16}
                    height={16}
                  />
                </div>
                Continue with Google
              </button>
            </div>
            <p className="mt-6 text-center">or</p>
            <p className="font-semibold text-[#4889B8] dark:text-[#4889B8] mt-4 text-center">
              Please enter your details.
            </p>
            <form onSubmit={handleLogin}>
              <div className="mt-3">
                <label
                  className="text-[#242424] font-semibold text-[19.68px] block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  className="block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2"
                  placeholder="Enter your email"
                />
                {error && <span className="errorMessage">{error.message}</span>}
              </div>
              <div className="mt-5">
                <label
                  className="text-[#242424] font-semibold text-[19.68px] block"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  className="block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-5 h-5"
                  />
                  <label
                    className="text-[#4889B8] dark:text-[#4889B8] font-semibold"
                    htmlFor="remember"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <p className="text-[#4889B8] dark:text-[#4889B8] font-semibold cursor-pointer">
                  Forgot password
                </p>
              </div>
              <button
                type="submit"
                className="font-medium text-[23.63px] text-white bg-adzado w-full rounded-lg py-2.5 mt-5"
              >
                Signin
              </button>
              <p className="text-[#4889B8] dark:text-[#4889B8] font-semibold flex gap-3 mt-5 items-center justify-center">
                {`Don’t`} have an account?{" "}
                <Link href="/signup" className="cursor-pointer !text-adzado">
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden lg:block">
            <h2 className="font-semibold text-[34.63px] text-[#242424] text-center mt-16">
              Welcome to Adzado dashboard
            </h2>
            <div className="mt-10 shadow-2xl">
              <Image
                src="/Lead_Generation.svg"
                alt="Lead_Generation"
                width={639}
                height={449.48}
              />
              {/* <Image
                src='/Home_Page_1.svg'
                alt='Home_Page_1'
                width={635}
                height={533.95}
              /> */}
            </div>
          </div>
        </section>
        <div className="container mx-auto mt-20 ml-16">
          <p className="text-center">
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default SignIn;
