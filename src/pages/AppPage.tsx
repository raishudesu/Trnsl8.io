import { Container } from "@mantine/core";
import PageHeader from "../components/PageHeader";
import TranslateContainer from "../components/TranslateContainer";
import PageFooter from "../components/PageFooter";

const AppPage = () => {
  return (
    <>
      <PageHeader />
      <Container h={"100vh"}>
        <TranslateContainer />
      </Container>
      <PageFooter />
    </>
  );
};

export default AppPage;
