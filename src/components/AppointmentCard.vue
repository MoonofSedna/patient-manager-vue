<script setup lang="ts">
import { computed } from "vue";
// interfaces
import { AppointmentCardProps } from "../interfaces/appointment.interface";

const props =
  defineProps<AppointmentCardProps>();

defineEmits([
  "update-appointment",
  "delete-appointment",
]);

const isEditing = computed(() => {
  return props.editing === props.id;
});
</script>
<template>
  <div
    class="w-full p-4 bg-card-bg border border-gray-200 rounded-lg shadow sm:p-6"
  >
    <div
      class="flex items-center justify-between mb-4"
    >
      <h5
        class="text-xl font-bold leading-none text-gray-900"
      >
        ID #{{ id }}
      </h5>
    </div>
    <div class="flow-root">
      <ul
        role="list"
        class="divide-y divide-gray-300"
      >
        <li class="py-3 sm:py-4">
          <div
            class="flex justify-between space-x-4"
          >
            <h3
              class="font-semibold text-lg"
            >
              Pet
            </h3>
            <div>
              <p
                class="text-md font-medium text-gray-900 truncate"
              >
                {{ name }}
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div
            class="flex justify-between space-x-4"
          >
            <h3
              class="font-semibold text-lg"
            >
              Date
            </h3>
            <div>
              <p
                class="text-md text-right font-medium text-gray-900 truncate"
              >
                {{ time }}
              </p>
              <p
                class="text-md text-right text-gray-500 truncate"
              >
                {{ date }}
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div
            class="flex justify-between space-x-4"
          >
            <h3
              class="font-semibold text-lg"
            >
              Owner
            </h3>
            <div>
              <p
                class="text-md text-right font-medium text-gray-900 truncate"
              >
                {{ owner }}
              </p>
              <p
                class="text-md text-right text-gray-500 truncate"
              >
                {{ email }}
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div
            class="flex flex-col items-start"
          >
            <h3
              class="font-semibold text-lg"
            >
              Symptoms
            </h3>
            <p
              class="text-md text-gray-900 mt-6"
            >
              {{ symptoms }}
            </p>
          </div>
        </li>
        <div
          class="flex justify-center space-x-4 pt-8"
        >
          <button
            @click="
              $emit(
                'update-appointment',
                id
              )
            "
            class="flex-1 btn-primary"
          >
            {{
              isEditing
                ? "Editing..."
                : "Edit"
            }}
          </button>
          <button
            @click="
              $emit(
                'delete-appointment',
                id
              )
            "
            class="flex-1 btn-primary danger"
          >
            Delete
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>
