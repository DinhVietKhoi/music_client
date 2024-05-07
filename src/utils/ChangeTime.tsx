/** @format */

export const formatSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60); // Số phút
  const remainingSeconds = Math.floor(seconds % 60); // Số giây còn lại

  const formattedMinutes = minutes.toString().padStart(2, "0"); // Định dạng số phút
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0"); // Định dạng số giây

  return `${formattedMinutes}:${formattedSeconds}`;
};
