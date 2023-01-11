// Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Layout
import Layout from "../../components/@core/layouts/Layout";
import { useAuth } from "../hooks/useAuth";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const { login } = useAuth();
  const handleSignup = async (e) => {
    e.preventDefault();
    // login(name, email, password);
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
            <h2 className="font-semibold text-[43.29px] text-[#242424] mt-16">
              Get Started
            </h2>
            <form onSubmit={handleSignup}>
              <div className="mt-3">
                <label
                  className="text-[#242424] font-semibold text-[19.68px] block"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData(e.target.value)}
                  className="block w-full !max-w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2"
                  placeholder="Enter your name"
                />
              </div>
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
                  onChange={(e) => setData(e.target.value)}
                  className="block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2"
                  placeholder="Enter your email"
                />
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
                  onChange={(e) => setData(e.target.value)}
                  className="block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="font-medium text-[23.63px] text-white bg-adzado w-full rounded-lg py-2.5 mt-5"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-6 text-center">or</p>
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
            <p className="text-[#4889B8] dark:text-[#4889B8] font-semibold flex gap-3 mt-5 items-center justify-center">
              Already have an account?{" "}
              <Link href="/signin" className="cursor-pointer !text-adzado">
                Log In
              </Link>
            </p>
          </div>

          <div className="hidden lg:block">
            <h2 className="font-semibold text-[34.63px] text-[#242424] text-center mt-16">
              Performance Lead Generation Platform
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

export default SignUp;
