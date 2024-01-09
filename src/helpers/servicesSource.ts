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
  {
    title: "Dynamic Customer Profiles",
    href: "/services",
    img: Consultation,
    description:
      "Create detailed customer profiles that integrate seamlessly with Amazon Connect, enabling personalized and effective customer interactions",
  },
  {
    title: "Customized Contact Control Panel (CCP) for Amazon Connect",
    href: "/services",
    img: ControlPanel,
    description:
      "Develop a tailored CCP for Amazon Connect, aligning with specific operational needs and improving agent interface",
  },
  {
    title: "Amazon Connect Data and Analytics Solutions",
    href: "/services",
    img: Statistics,
    description:
      "Leverage data and analytics to gain meaningful insights from your contact center data, driving strategic decisions and improving service efficiency",
  },
  {
    title: "Multi-Factor Authentication (MFA) for Secure Access",
    href: "/services",
    img: Encrypted,
    description:
      "Implement MFA in your Amazon Connect environment to add an extra layer of security and protect sensitive customer data",
  },
  {
    title: "Contact Center System Assessment",
    href: "/services",
    img: Call,
    description:
      "Conduct comprehensive assessments of existing contact center systems to identify improvement areas and integration opportunities with Amazon Connect",
  },
];
