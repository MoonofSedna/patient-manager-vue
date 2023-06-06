export interface Appointment {
  id: string | null;
  name: string;
  owner: string;
  email: string;
  date: string;
  time: string;
  symptoms: string;
}

export interface AppointmentCardProps
  extends Appointment {
  editing: string | null;
}
