import React, { useState } from "react";
import { ProjectMedia } from "../../src/models";
export const Corrousal = ({ medias }: { medias: ProjectMedia[] }) => {
  const [activeStep, setindex] = useState(1);
  const buttonStyle = {
    padding: "20px",
    margin: "10px",
    color: "white",
    fontSize: "15px",
    backgroundColor: "black",
    boxShadow: "0px 0px 7px #00ff41",
    transition: "box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };
  console.log(activeStep)
  return (
    <div
      style={{
        transition: "all 1s cubic-bezier(.175,.885,.32,1.275)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",

          width: "1000px",
          backgroundColor: "black",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height:"700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {medias[activeStep].is_image ? (
            <img
              style={{ borderRadius: 10, maxWidth:"80%", maxHeight:"700px" }}
              src={medias[activeStep].img!}
              alt={medias[activeStep].description_for_alt}
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
            margin:"10px",
          }}
        >
          <button
            style={buttonStyle}
            onClick={() => setindex(activeStep - 1)}
            disabled={activeStep === 0}
          >
            {"< "}
          </button>
          {medias.map((e, i) =>  !e.is_logo &&i < activeStep+3 && i > activeStep -1 && (

            <div
            key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {medias[activeStep].is_image ? (
                <img
                onClick={()=>setindex(i)}
                  style={{
                    borderRadius: 10,
                    height: "100px",
                    margin:
                      i == activeStep
                        ? "5px 10px 10px 5px"
                        : "8px 13px 13px 8px",
                    transition: "all .5s cubic-bezier(.175,.885,.32,1.275)",

                    border: i == activeStep ? "solid 3px #00ff41" : undefined,
                  }}
                  src={e.img!}
                  alt={e.description_for_alt}
                />
              ) : (
               <>
               </>
              )}
            </div>
          ))}
          <button
            style={buttonStyle}
            onClick={() => {
              if (activeStep < medias.length-1) {
                setindex(activeStep + 1);
              } else {
                setindex(1);
              }
            }}
          >
            {  ">"  }
          </button>
        </div>
      </div>
    </div>
  );
};
