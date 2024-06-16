import Footer from "../Footer";
import MainContainer from "../MainContainer";
import NavigationBar from "../NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}
