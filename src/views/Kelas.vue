<script setup>
import Loading from '@/components/Loading.vue'
import api from '@/services/api'
import { onMounted, ref } from 'vue'

const kelas = ref([])
const open = ref(false)
const isEdit = ref(false)
const isLoading = ref(false)
const kelasData = ref({
  name: '',
  description: ''
})

onMounted(() => {
  getData()
})

const getData = () => {
  isLoading.value = true
  api.get('/kelas').then((response) => {
    const { data } = response.data
    kelas.value = data
  }).finally(() => {
    isLoading.value = false
  })
}

const onSubmit = () => {
  if (isEdit.value) {
    api.put(`/kelas/${kelasData.value.id}`, kelasData.value).then((response) => {
      open.value = false
      kelasData.value = {
        name: '',
        description: ''
      }
      getData()
    })

    isEdit.value = false
  } else {
    api.post('/kelas', kelasData.value).then((response) => {
      open.value = false
      kelasData.value = {
        name: '',
        description: ''
      }
      getData()
    })
  }

}

const onDelete = (kelasData) => {
  api.delete(`/kelas/${kelasData.id}`).then((response) => {
    getData()
  })
}

const onEdit = (mP) => {
  open.value = true
  isEdit.value = true
  kelasData.value = mP
}
const onAdd = () => {
  open.value = true
  isEdit.value = false
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-3xl font-medium text-gray-700">
        Kelas
      </h3>

      <div>
        <button @click="onAdd"
          class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
          Tambah Data
        </button>
      </div>
    </div>

    <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
      <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="open = false" />

      <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">

        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">
              {{ isEdit ? 'Edit' : 'Tambah' }} Data Kelas
            </p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <div>

            <div>
              <label class="text-xs">Name</label>
              <input type="text" class="w-full p-2 border bg-white border-gray-200 rounded-md"
                v-model="kelasData.name" />
            </div>

            <div class="mt-2">
              <label class="text-xs">Description</label>
              <textarea class="w-full p-2 border bg-white border-gray-200 rounded-md"
                v-model="kelasData.description"></textarea>
            </div>

          </div>


          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <button
              class="p-2 px-4 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              @click="open = false">
              Close
            </button>
            <button
              class="px-4 py-2 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="onSubmit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="isLoading" />

    <div v-else class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Description
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in kelas" :key="index">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ u.name }}
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ u.description }}
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <span
                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                      u.status }}</span>
                </td>

                <td class="px-6 py-4 text-sm font-medium text-right border-b border-gray-200">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3" @click="onEdit(u)">Edit</a>
                  <a href="#" class="text-red-600 hover:text-red-900" @click="onDelete(u)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
