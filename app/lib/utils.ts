export function getEndCountdownTime() {
  const currentDate = new Date();
  const targetDate = new Date(2024, 2, 8, 0, 0, 0, 0);

  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
