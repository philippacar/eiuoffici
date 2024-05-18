function createGreetingMessages(names: string[]): string[] {
  return names.map(name => `Hello, ${name}! How are you?`);
}

const names: string[] = ["Alice", "Bob", "Charlie", "Diana"];
const greetingMessages: string[] = createGreetingMessages(names);

console.log(greetingMessages);
