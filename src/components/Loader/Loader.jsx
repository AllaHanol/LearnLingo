import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
        ]}
      />
    </div>
  );
};

export default Loader;
