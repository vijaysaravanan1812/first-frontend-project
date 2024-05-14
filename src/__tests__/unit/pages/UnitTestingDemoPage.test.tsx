// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange -- Let's arrange the necessary tools for testing the comp 
import { render, screen } from "@testing-library/react"; // importing from RTL
import UnitTestingDemoPage from "../../../pages/UnitTestingDemoPage/UnitTestingDemoPage";

// Act 
// Let's write the test cases / test specs / tests  
it("has Heading with 'Unit Testing Demo Page!'", () => {
  render(<UnitTestingDemoPage/>);
  const headingElement = screen.getByText("Unit Testing Demo Page");
  // Assert -- MUST
  expect(headingElement).toBeInTheDocument();
});

// it, test, expect, toBeInTheDocument are from jest
// toBeInTheDocument is known as matcher