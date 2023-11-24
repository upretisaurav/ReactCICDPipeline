import { render, screen } from '@testing-library/react';
import LearningComponent from './LearningComponent';

test('renders learning messages', () => {
  render(<LearningComponent />);
  expect(screen.getByText("We're learning CI/CD here.")).toBeInTheDocument();
  expect(screen.getByText("This is my first React project!")).toBeInTheDocument();
  expect(screen.getByText("Loving React so far!")).toBeInTheDocument();
  expect(screen.getByText("- Saurav Upreti")).toBeInTheDocument();
});
