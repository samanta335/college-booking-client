import { useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <section>
      <div className="error-container  text-center">
        <img
          className="w-1/2 mx-auto mt-32"
          src="https://nickfinder.woxikon.co.nz/font/error.jpg"
          alt=""
        />
        <h2>
          <span>Error</span> {status || 404}
        </h2>
        <p>{error?.message}</p>
      </div>
    </section>
  );
};

export default Error;
