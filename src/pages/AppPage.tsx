import { Container } from "@mantine/core";
import PageHeader from "../components/PageHeader";
import TranslateContainer from "../components/TranslateContainer";

const AppPage = () => {
  return (
    <>
      <PageHeader />
      <Container h={"100vh"}>
        <TranslateContainer />
      </Container>
    </>
  );
};

export default AppPage;
