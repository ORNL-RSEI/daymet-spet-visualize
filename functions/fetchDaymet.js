export const fetchDaymet = async (props) => {
  const { coordinates, setDaymetData, startDate } = props;
  const rawData = await fetch(
    `https://daymet.ornl.gov/single-pixel/api/data?lat=${coordinates.lat}&lon=${coordinates.lng}&vars=dayl,prcp,srad,swe,tmax,tmin,vp&start=${startDate}&end=1991-01-01&format=json`
  );
  const formattedData = await rawData.json();
  console.log("formattedData", { formattedData });
  setDaymetData(formattedData);
};
