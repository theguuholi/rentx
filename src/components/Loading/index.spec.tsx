import { render } from "@testing-library/react-native";
import Loading from ".";

describe("Loading", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("loading")).toBeTruthy();
  });
});