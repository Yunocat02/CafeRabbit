import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* eslint-disable @next/next/no-img-element -- ImageResponse requires a plain image element. */

export const alt = "The Rabbit Cafe: a quiet creative space";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "Logo_main2.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          background: "#fff8f6",
          color: "#00242e",
          padding: "66px 78px",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          style={{
            width: "430px",
            height: "430px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 26px 65px rgba(0, 36, 46, 0.2)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "58px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#b73865",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            The official home of caferabbit.com
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontFamily: "serif",
              fontSize: "80px",
              lineHeight: 0.92,
              letterSpacing: "-5px",
            }}
          >
            The Rabbit Cafe
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              color: "#b73865",
              fontFamily: "serif",
              fontSize: "34px",
              fontStyle: "italic",
            }}
          >
            A quieter corner of the internet.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            right: "-110px",
            top: "-105px",
            display: "flex",
            borderRadius: "50%",
            background: "#f8dbe4",
            border: "1px solid rgba(0, 36, 46, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "78px",
            height: "78px",
            right: "74px",
            top: "52px",
            display: "flex",
            borderRadius: "50%",
            background: "#f39bb7",
          }}
        />
      </div>
    ),
    size,
  );
}
