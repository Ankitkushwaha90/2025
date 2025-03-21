import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for content schema
interface Content {
  id: string;
  title: string;
  description: string;
  body: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const contentSchema: Content[] = [
    {
      id: "tantra",
      title: "तंत्र",
      description: "तंत्र का अर्थ है ऊर्जा और चेतना का सामंजस्य।",
      body: "तंत्र योग और ध्यान के माध्यम से आत्मज्ञान प्राप्त करने का मार्ग है।"
    },
    {
      id: "mantra",
      title: "मंत्र",
      description: "मंत्र का उच्चारण मानसिक शुद्धि और आध्यात्मिक उन्नति का साधन है।",
      body: "वेदों में मंत्रों को अत्यधिक महत्व दिया गया है।"
    },
    {
      id: "stotras",
      title: "स्तोत्र",
      description: "स्तोत्र भगवान की स्तुति में गाए गए मंत्र हैं।",
      body: "प्रत्येक देवता के लिए विशिष्ट स्तोत्र होते हैं, जैसे शिव स्तोत्र, विष्णु स्तोत्र।"
    }
  ];

  res.status(200).json(contentSchema);
}
