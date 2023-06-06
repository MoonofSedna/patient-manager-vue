<script setup lang="ts">
import {
  reactive,
  computed,
} from "vue";
// components
import Alert from "./Alert.vue";
// interfaces
import { Appointment } from "../interfaces/appointment.interface";
// utils
import { formFields } from "../utils/form-fields";

const error = reactive({
  type: "",
  message: "",
});

const emit = defineEmits([
  "update:name",
  "update:owner",
  "update:email",
  "update:date",
  "update:time",
  "update:symptoms",
  "add-appointment",
]);

const props =
  defineProps<Appointment>();

const onValidate = () => {
  if (
    Object.values(props).includes("")
  ) {
    error.type = "error";
    error.message =
      "All fields are required!";
    return;
  } else {
    error.type = "success";
    error.message = props.id
      ? "Appointment updated successfully!"
      : "Appointment created successfully!";

    emit("add-appointment");

    setTimeout(() => {
      error.type = "";
      error.message = "";
    }, 3000);
  }
};

const editing = computed(() => {
  return props.id !== null;
});
</script>

<template>
  <div class="md:w-1/2">
    <div
      class="w-full bg-cyan-500 p-6 rounded-md mb-6 text-white text-center uppercase font-bold md:text-xl sm:text-md"
    >
      <h2>
        {{
          editing
            ? `Edit appointment #${props.id}`
            : "Create an appointment"
        }}
      </h2>
    </div>
    <Alert
      :alert="error"
      v-if="error.message"
    />
    <form
      class="form"
      @submit.prevent="onValidate"
    >
      <template
        v-for="field in formFields"
      >
        <label :for="field.name">{{
          field.label
        }}</label>
        <template
          v-if="
            field.type !== 'textarea'
          "
        >
          <input
            :type="field.type"
            :id="field.name"
            :placeholder="
              field.placeholder
            "
            :value="props[field.name]"
            :min="field.min"
            class="form-field"
            @input="
              $emit(
                'update:' + field.name,
                (
                  $event.target as HTMLInputElement
                ).value
              )
            "
          />
        </template>
        <template v-else>
          <textarea
            :type="field.type"
            :id="field.name"
            :placeholder="
              field.placeholder
            "
            :value="
              props[field.name] || ''
            "
            @input="
              $emit(
                'update:' + field.name,
                (
                  $event.target as HTMLInputElement
                ).value
              )
            "
            class="form-field"
          ></textarea>
        </template>
      </template>

      <button
        type="submit"
        class="btn-primary"
      >
        {{
          editing
            ? "Update appointment"
            : "Create appointment"
        }}
      </button>
    </form>
  </div>
</template>
