import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

const Index = (props) => {
  return (
    <>
      <Link href="/">
        <a>Back Home</a>
      </Link>
      <LoginButtons />
    </>
  );
};

export default Index;
