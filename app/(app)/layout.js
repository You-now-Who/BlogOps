import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
