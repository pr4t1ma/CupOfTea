import Accordian from "./Accordin";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <>
      <div>
        <div className="header"></div>
        <Header />
        <div className="banner">
          <img
            className="w-full h-2/3"
            src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?cs=srgb&dl=pexels-chiecharon-1187317.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="container mx-auto my-5">
          <h3 className="text-3xl text-center my-20">
            This is Text for my Banner
          </h3>
          <p className="text-center text-2xl">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is
          </p>
        </div>
        <div className="footer container mx-auto  my-20">
          <Menu
            items={[
              { label: "Polycy", href: "./" },
              { label: "About us", href: "/service" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
        <Accordian
          heading="Apple"
          text="Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        />
      </div>
    </>
  );
}

export default App;
