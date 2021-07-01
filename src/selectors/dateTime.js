const dateTime = () => {
  const now = new Date();
  const hour = now.getHours();
  let minute = now.getMinutes();
  minute = minute > 9 ? minute : `0${minute}`;
  const timeCurrent = `${hour}h${minute}`;

  return timeCurrent;
};

export default dateTime;
