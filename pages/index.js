import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

const Index = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link href="/profile">
        <a style={{ marginBottom: 30 }}>ProfilePage</a>
      </Link>

      <img
        width="320px"
        src="https://res.cloudinary.com/dplxivpqj/image/upload/c_scale,q_auto:eco,w_100/v1639316717/EngTests/tt-future-simple/2e7b4d7114_gl0x1i.jpg"
        alt=""
      />
    </div>
  );
};

export default Index;
