export interface SkillDetailedData {
  id: string;
  name: string;
  description: string;
  category: string;
  l1_description: string;
  l1_examples: string[];
  l2_description: string;
  l2_examples: string[];
  l3_description: string;
  l3_examples: string[];
  l4_description: string;
  l4_examples: string[];
  l5_description: string;
  l5_examples: string[];
}

export const skills: SkillDetailedData[] = [
  {
    id: '1',
    name: 'Agile Working',
    description:
      'The knowledge and application of agile methodologies to enhance flexibility and deliver rapidly in evolving environments. It values iterative development, adaptability, and learning from mistakes while aligning team efforts with user needs and government objectives.',
    category: 'engineering',
    l1_description:
      'Begins with a foundational understanding of agile principles, expressing an openness to iterative learning and adaptability to change.',
    l1_examples: [
      ' Agile Fundamentals: Participation in basic agile workshops to understand key concepts and terms.',
    ],

    l2_description: 'dada',
    l2_examples: ['dada'],
    l3_description: 'dada',
    l3_examples: ['dada'],
    l4_description: 'dada',
    l4_examples: ['dada'],
    l5_description: 'dada',
    l5_examples: ['dada'],
  },
  {
    id: '2',
    name: 'Writing Code',
    description:
      'The ability to contribute high quality code to production environments',
    category: 'engineering',
    l1_description:
      'Begins with a foundational understanding of agile principles, expressing an openness to iterative learning and adaptability to change.',
    l1_examples: [
      ' Agile Fundamentals: Participation in basic agile workshops to understand key concepts and terms.',
    ],

    l2_description: 'dada',
    l2_examples: ['dada'],
    l3_description: 'dada',
    l3_examples: ['dada'],
    l4_description: 'dada',
    l4_examples: ['dada'],
    l5_description: 'dada',
    l5_examples: ['dada'],
  },
];
