export const generateMathProblem = (): { question: string; answer: number } => {
  const operations = ['multiplication', 'division', 'fractions', 'money'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  switch (operation) {
    case 'multiplication': {
      const num1 = Math.floor(Math.random() * 90) + 10;
      const num2 = Math.floor(Math.random() * 90) + 10;
      return {
        question: `${num1} × ${num2} = ?`,
        answer: num1 * num2
      };
    }
    case 'division': {
      const divisor = Math.floor(Math.random() * 12) + 1;
      const answer = Math.floor(Math.random() * 10) + 1;
      const dividend = divisor * answer;
      return {
        question: `${dividend} ÷ ${divisor} = ?`,
        answer: answer
      };
    }
    case 'fractions': {
      const num1 = Math.floor(Math.random() * 5) + 1;
      const den1 = Math.floor(Math.random() * 5) + 2;
      return {
        question: `What is ${num1}/${den1} as a decimal? (Round to 2 decimal places)`,
        answer: Number((num1 / den1).toFixed(2))
      };
    }
    default: {
      const dollars = Math.floor(Math.random() * 90) + 10;
      const cents = Math.floor(Math.random() * 90) + 10;
      return {
        question: `Convert $${dollars}.${cents} to cents`,
        answer: dollars * 100 + cents
      };
    }
  }
};