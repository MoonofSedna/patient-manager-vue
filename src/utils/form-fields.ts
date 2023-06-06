import { FormField } from "../interfaces/form.interface";

export const formFields: FormField[] = [
  {
    name: "name",
    label: "Pet Name",
    type: "text",
    placeholder: "Enter pet name",
  },
  {
    name: "owner",
    label: "Owner Name",
    type: "text",
    placeholder: "Enter owner name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    min: new Date()
      .toISOString()
      .split("T")[0],
    placeholder: "Enter date",
  },
  {
    name: "time",
    label: "Time",
    type: "time",
    min: "09:00",
  },
  {
    name: "symptoms",
    label: "Symptoms",
    type: "textarea",
    placeholder: "Enter symptoms",
  },
];
