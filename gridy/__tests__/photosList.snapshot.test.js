import PhotosList from "../components/PhotosList";
import renderer from "react-test-renderer";

it("PhotosList renders correctly", () => {
  const tree = renderer.create(<PhotosList />).toJSON();
  expect(tree).toMatchSnapshot();
});
