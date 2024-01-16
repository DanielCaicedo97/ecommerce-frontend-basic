import { useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/axios";

import Alert from "../../components/Alert";

import RegistrationImage from "../../assets/registration-image.png";
import CardboardBox from "../../assets/cardboard-box.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [web, setWeb] = useState("");

  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password, repeatedPassword].includes("")) {
      setAlert({ msg: "There are empty fields", error: true });
      return;
    }

    if (password !== repeatedPassword) {
      setAlert({ msg: "Passwords do not match", error: true });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "Password is too short, minimum 6 characters required",
        error: true,
      });
      return;
    }

    setAlert({});

    try {
      const { data } = await clientAxios.post("/users", {
        name,
        email,
        password,
        phone,
        address,
        web,
      });

      console.log(data);

      setAlert({
        msg: "Account created successfully, check your email",
        error: false,
      });

      setName("");
      setEmail("");
      setPassword("");
      setRepeatedPassword("");
      setPhone("");
      setAddress("");
      setWeb("");
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row ">
        <img
          src={CardboardBox}
          alt="image"
          className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"
        />
        <div>
          <h1 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto mt-24">
            Register and enjoy the{" "}
            <span className="text-sky-700">products</span>
          </h1>
          {msg && <Alert alert={alert} />}
          <form
            onSubmit={handleSubmit}
            className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md"
          >
            <div className="mb-5">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="e.g., Juan David Ariza Torres"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="e.g., email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="e.g., 300123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="e.g., Street 12 #34-56"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="web" className="font-medium">
                Web
              </label>
              <input
                type="text"
                id="web"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="https://github.com/IvanCastroRuiz"
                value={web}
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="repeatedPassword" className="font-medium">
                Repeat your Password
              </label>
              <input
                type="password"
                id="repeatedPassword"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="*********"
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Create Account"
              className="uppercase bg-sky-700 text-white p-2 rounded-md w-full"
            />

            <div className="flex justify-between px-4 mt-5 text-slate-500 ">
              <Link to="/" className="">
                Already have an account.
              </Link>
              <Link to="/forgot-password">Forgot my password.</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full hidden lg:block lg:w-full">
        <img
          src={RegistrationImage}
          alt="image login"
          className="h-screen w-screen"
        />
      </div>
    </div>
  );
};

export default Register;
