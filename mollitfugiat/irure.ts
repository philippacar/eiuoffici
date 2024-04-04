// Define a student type with additional properties
type student = {
  name: string;
  age: number;
  grade: string;
  major: string;
};

// Use Pick utility type to create a personalInfo type
type personalInfo = Pick<student, 'name' | 'age'>;

// Example usage of personalInfo
const studentInfo: personalInfo = {
  name: 'Alice',
  age: 20
};
