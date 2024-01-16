import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alert from "../../components/Alert";
import clientAxios from "../../config/axios";
import ConfirmationImage from "../../assets/confirmation-image.png";

const Confirm = () => {
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { id } = params;
  let token = id;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/users/confirm/${token}`;
        const { data } = await clientAxios(url);
        setAccountConfirmed(true);
        setAlert({
          msg: data.msg,
        });
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setLoading(false);
    };

    confirmAccount();
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col justify-center items-center lg:w-2/4 md:flex-row mx-auto">
        <h1 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto">
          Confirm your account and start enjoying{" "}
          <span className="text-sky-700">our products</span>
        </h1>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          {!loading && <Alert alert={alert} />}
          {accountConfirmed && (
            <Link className="block text-center my-5 text-gray-500" to="/">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
