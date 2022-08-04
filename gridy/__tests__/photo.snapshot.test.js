import Photo from "../components/Photo";
import renderer from "react-test-renderer";

it("Photo renders correctly", () => {
  const photo = {
    urls: {
      medium:
        "https://images.unsplash.com/photo-1659596357498-70e7c8381b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTAxMDN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1OTYzMTg3Mg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    alt_description: "THE DESERT\nPhoto by : Pouriya Kafaei",
    height: 6630,
    width: 5304,
    user: {
      name: "pouriya kafaei",
      profile_image: {
        medium:
          "https://images.unsplash.com/profile-1605028582711-88e1234d9466image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
      },
    },
    links: { html: "https://unsplash.com/@pouriyakafaei" },
  };

  const tree = renderer.create(<Photo photo={photo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
