import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "200px",
      }}
    >
      <Link href="/">
        <a>Back Home</a>
      </Link>
      <LoginButtons />
    </div>
  );
};

export default Index;
