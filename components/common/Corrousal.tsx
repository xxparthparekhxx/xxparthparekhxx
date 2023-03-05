import React, { useState } from "react";
import { ProjectMedia } from "../../src/models";
export const Corrousal = ({ medias }: { medias: ProjectMedia[] }) => {
  const [activeStep, setindex] = useState(0);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "800px",
          backgroundColor: "black",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {medias[activeStep].is_image ? (
            <img
              style={{ borderRadius: 10, height: "700px" }}
              src={medias[activeStep].img!}
            />
          ) : (
            <video
              src={medias[activeStep].video!}
              controls
              autoPlay
              style={{
                maxHeight: "700px",
              }}
            ></video>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`${activeStep + 1} of ${medias.length}`}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setindex(activeStep - 1)}
            disabled={activeStep === 0}
          >
            {"<"}
            Back
          </button>
          <button
            onClick={() => setindex(activeStep + 1)}
            disabled={activeStep === medias.length - 1}
          >
            Next
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
