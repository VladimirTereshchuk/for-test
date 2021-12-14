import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <a style={{ marginBottom: 30 }}>Back Home</a>
      </Link>
      <LoginButtons />
    </div>
  );
};

export default Index;
