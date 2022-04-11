export const fetchDaymet = async (props) => {
  const { lat, lon, setDaymetData } = props;
  console.log("fetchlat", { lat }, "fetchlon", { lon });
  const rawData = await fetch(
    `https://daymet.ornl.gov/single-pixel/api/data?lat=${lat}&lon=${lon}&vars=dayl,prcp,srad,swe,tmax,tmin,vp&start=1990-01-01&end=1990-01-01&format=json`
  );
  const formattedData = await rawData.json();
  console.log("formattedData", { formattedData });
  setDaymetData(formattedData);
};
