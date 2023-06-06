import { Appointment } from "./appointment.interface";

export interface FormField {
  name: keyof Appointment;
  label: string;
  type: string;
  placeholder?: string;
  min?: string;
}
