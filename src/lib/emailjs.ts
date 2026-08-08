// EmailJS configuration
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail), copy its "Service ID"
// 3. Create an Email Template with variables: {{from_name}}, {{phone}}, {{email}}, {{project_name}}, {{message}}
//    copy its "Template ID"
// 4. Go to Account → General to find your "Public Key"
// 5. Add all three as environment variables (see .env.local.example)
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const isEmailjsConfigured =
  emailjsConfig.serviceId !== "" && emailjsConfig.templateId !== "" && emailjsConfig.publicKey !== "";
