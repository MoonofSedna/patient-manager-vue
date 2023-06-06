<script setup lang="ts">
import {
  computed,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { uid } from "uid";
// components
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import AppointmentCard from "./components/AppointmentCard.vue";
// interfaces
import { Appointment } from "./interfaces/appointment.interface";

const appointment = reactive({
  id: null,
  name: "",
  owner: "",
  email: "",
  date: "",
  time: "",
  symptoms: "",
});

const appointments = ref<Appointment[]>(
  []
);

const addAppointment = () => {
  if (appointment.id) {
    const { id } = appointment;

    const appointmentIndex =
      appointments.value.findIndex(
        (appointment) =>
          appointment.id === id
      );

    appointments.value[
      appointmentIndex
    ] = { ...appointment };
  } else {
    appointments.value.push({
      ...appointment,
      id: uid(15),
    });
  }

  Object.assign(appointment, {
    id: null,
    name: "",
    owner: "",
    email: "",
    date: "",
    time: "",
    symptoms: "",
  });
};

const updateAppointment = (
  id: string
) => {
  const appointmentToUpdate =
    appointments.value.find(
      (appointment) =>
        appointment.id === id
    );

  if (!appointmentToUpdate) return;

  Object.assign(
    appointment,
    appointmentToUpdate
  );
};

const deleteAppointment = (
  id: string
) => {
  appointments.value =
    appointments.value.filter(
      (appointment) =>
        appointment.id !== id
    );
};

onMounted(() => {
  const appointmentsLS =
    localStorage.getItem(
      "appointments"
    );

  if (appointmentsLS) {
    appointments.value = JSON.parse(
      appointmentsLS
    );
  }
});

watch(
  appointments,
  () => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments.value)
    );
  },
  {
    deep: true,
  }
);

const editing = computed(() => {
  return appointment.id;
});
</script>

<template>
  <div
    class="w-full flex direction- pt-9 flex-col items-center justify-center"
  >
    <Header />
    <div
      class="container mt-12 flex max-md:flex-col gap-10 p-4"
    >
      <Form
        :id="appointment.id"
        v-model:name="appointment.name"
        v-model:owner="
          appointment.owner
        "
        v-model:email="
          appointment.email
        "
        v-model:date="appointment.date"
        v-model:time="appointment.time"
        v-model:symptoms="
          appointment.symptoms
        "
        @add-appointment="
          addAppointment
        "
      />
      <div class="md:w-1/2">
        <div
          class="w-full bg-cyan-500 p-6 rounded-md mb-6 text-white text-center uppercase font-bold md:text-xl sm:text-md"
        >
          <h2>Appointments</h2>
        </div>

        <div
          v-if="appointments.length > 0"
          class="flex flex-col gap-4 max-h-[74vh] overflow-y-auto scroll pr-2"
        >
          <AppointmentCard
            v-for="appointment in appointments"
            :id="appointment.id"
            :name="appointment.name"
            :owner="appointment.owner"
            :email="appointment.email"
            :date="appointment.date"
            :time="appointment.time"
            :symptoms="
              appointment.symptoms
            "
            :editing="editing"
            @update-appointment="
              updateAppointment
            "
            @delete-appointment="
              deleteAppointment
            "
          />
        </div>

        <p
          v-else
          class="text-center text-2xl font-semibold"
        >
          There are no appointments yet.
        </p>
      </div>
    </div>
  </div>
</template>
