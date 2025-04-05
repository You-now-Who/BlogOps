export const metadata = {
  title: "Blogify",
  description: "A simple blog template",
};

export default function LoginLayout({ children }) {
  return (
        <div className="login-layout">
          {children}
        </div>
  );
}
