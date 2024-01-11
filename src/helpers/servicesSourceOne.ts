import { Chat, Consultation, ControlPanel, Encrypted, Salesforce, Statistics, VoiceMessage, VoiceRecognition, Workspace } from "@/constants/img";
import { Call } from "@/constants/svg";

export const servicesSource = [
  {
    title: "Salesforce CTI Connector with Amazon Connect",
    href: "/services",
    img: Salesforce,
    description:
      "Enhance Salesforce CRM by integrating with Amazon Connect, allowing efficient call management and personalized customer interactions",
  },
  {
    title: "Amazon Q-Generative AI Powered Assistant",
    href: "/services",
    img: Chat,
    description:
      "Utilize Amazon Q to boost business productivity. It can answer questions, generate content, and provide insights by connecting to your company’s data and systems",
  },
  {
    title: "Amazon Connect Voicemail System",
    href: "/services",
    img: VoiceMessage,
    description:
      "Implement a sophisticated voicemail system within Amazon Connect, ensuring that every customer call is acknowledged with customizable greeting options",
  },
  {
    title: "Voice Biometrics Authentication",
    href: "/services",
    img: VoiceRecognition,
    description:
      "Use voice biometrics for secure and efficient customer authentication, enhancing both security and user experience within your Amazon Connect contact center.",
  },
  {
    title: "Optimized Agent Workspace for Amazon Connect",
    href: "/services",
    img: Workspace,
    description:
      "Provide agents with an enhanced workspace, equipped with necessary tools and interfaces, to boost productivity and customer service quality.",
  },
  
];
