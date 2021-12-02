import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../src/components/Layout/Layout";
import { StyledLink } from "./styles";

const Home: NextPage = () => {
  return (
    <Layout>
      Home
      <Link href="/play">
        <StyledLink>Start Playing</StyledLink>
      </Link>
    </Layout>
  );
};

export default Home;
