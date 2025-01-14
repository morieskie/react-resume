export const appUrl =
  process.env.NODE_ENV === "production"
    ? process.env.RESUME_APP_URL || "https://morieskie.github.io/react-resume"
    : "http://localhost:3000/react-resume";
export const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.RESUME_API_URL || "https://morieskie.github.io/react-resume"
    : "http://localhost:3000/react-resume";
