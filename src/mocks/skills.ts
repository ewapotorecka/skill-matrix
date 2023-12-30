interface Level {
  id: string;
  level: string;
  description: string;
  examples: string[];
  positions: string[];
}

interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  levels: Level[];
}

export const skills: Skill[] = [
  {
    id: '1',
    name: 'Agile Working',
    description:
      'The knowledge and application of agile methodologies to enhance flexibility and deliver rapidly in evolving environments. It values iterative development, adaptability, and learning from mistakes while aligning team efforts with user needs and government objectives.',
    category: 'engineering',
    levels: [
      {
        id: '1',
        level: 'L1',
        description:
          'Begins with a foundational understanding of agile principles, expressing an openness to iterative learning and adaptability to change.',
        examples: [
          ' Agile Fundamentals: Participation in basic agile workshops to understand key concepts and terms.',
          'Adaptability: Shows a willingness to adopt new methods for process improvement.',
          ' Iteration: Demonstrates capability to adjust to feedback and modify work accordingly.',
        ],
        positions: ['JFE', 'JBE', 'JDO', 'JMD', 'JSE'],
      },
      {
        id: '2',
        level: 'Level 2',
        description: 'Description of Level 2',
        examples: ['Example 3', 'Example 4'],
        positions: ['Position 3', 'Position 4'],
      },
    ],
  },
  {
    id: '2',
    name: 'Writing Code',
    description:
      'The ability to contribute high quality code to production environments',
    category: 'engineering',
    levels: [
      {
        id: '1',
        level: 'Level 1',
        description: 'Description of Level 1',
        examples: ['Example 5', 'Example 6'],
        positions: ['Position 1', 'Position 3'],
      },
      {
        id: '2',
        level: 'Level 2',
        description: 'Description of Level 2',
        examples: ['Example 7', 'Example 8'],
        positions: ['Position 2', 'Position 4'],
      },
    ],
  },
];
