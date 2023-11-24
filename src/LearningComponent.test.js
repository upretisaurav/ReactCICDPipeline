import { render, screen } from '@testing-library/react';
import LearningComponent from './LearningComponent';

test('renders learning messages', () => {
  render(<LearningComponent />);
  expect(screen.getByText("Welcome to My Learning Journey!")).toBeInTheDocument();
  expect(screen.getByText("I started this project to dive deep into CI/CD and React.")).toBeInTheDocument();
  expect(screen.getByText("Exploring React has been an amazing experience!")).toBeInTheDocument();
  expect(screen.getByText("Every step in this journey adds to my skills and knowledge.")).toBeInTheDocument();
  expect(screen.getByText("- Saurav Upreti")).toBeInTheDocument();
});
