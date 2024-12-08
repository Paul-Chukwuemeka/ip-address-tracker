import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

let info = null;
function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [result, setResult] = useState(null);
  const apiKey =
    "at_WdHFxk0MfhURjtsOD2o52dzi9IgX8";

  // const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(async (res) => await res.json())
  //     .then(async (data) => {
  //       await setResult(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   info = result;
  // }, [result]);

  return (
    <>
      <div className="app w-[100vw] h-[100vh]">
        <div className="top ">
          <h1 className="text-4xl font-bold text-white text-center pt-6">
            IP Address Tracker
          </h1>
          <div className="input rounded-lg  flex justify-center mt-6">
            <input
              type="number"
              className="bg-white p-2.5 w-[450px] rounded-tl-lg rounded-bl-lg"
            />
            <button className="bg-[#2b2b2b] text-white px-4 rounded-tr-lg rounded-br-lg">
              <FontAwesomeIcon
                icon={faGreaterThan}
              />
            </button>
          </div>
          <div className="info rounded-lg bg-white w-[80%] py-14 h-[50px] border p-3 m-auto mt-11 flex justify-around items-center">
            <div>
              <h2>IP Address</h2>
              <h1>{info ? info.ip : " "}</h1>
            </div>
            <hr />
            <div>
              <h2>Location</h2>
              <h1>
                {info
                  ? info.location.region
                  : " "}
              </h1>
            </div>
            <hr />
            <div>
              <h2>Timezone</h2>
              <h1>
                {`UTC ${
                  info
                    ? info.location.timezone
                    : " "
                }`}
              </h1>
            </div>
            <hr />
            <div>
              <h2>ISP</h2>
              <h1>{info ? info.isp : ""}</h1>
            </div>
          </div>
        </div>

        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily
              customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default App;
