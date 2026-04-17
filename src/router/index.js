import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Card from "../views/Card.vue";
import Blank from "../views/Blank.vue";
import MataPelajaran from "@/views/MataPelajaran.vue";
import Kelas from "@/views/Kelas.vue";
import JadwalPelajaran from "@/views/JadwalPelajaran.vue";
import PengumumanSekolah from "@/views/PengumumanSekolah.vue";
import Guru from "@/views/Guru.vue";
import GuruPiket from "@/views/GuruPiket.vue";
import AgendaKegiatan from "@/views/AgendaKegiatan.vue";
import NotifikasiDarurat from "@/views/NotifikasiDarurat.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  {
    path: "/mata-pelajaran",
    name: "MataPelajaran",
    component: MataPelajaran,
  },
  {
    path: "/kelas",
    name: "Kelas",
    component: Kelas,
  },
  {
    path: "/jadwal-pelajaran",
    name: "JadwalPelajaran",
    component: JadwalPelajaran,
  },
  {
    path: "/pengumuman-sekolah",
    name: "PengumumanSekolah",
    component: PengumumanSekolah,
  },
  {
    path: "/guru",
    name: "Guru",
    component: Guru,
  },
  {
    path: "/guru-piket",
    name: "GuruPiket",
    component: GuruPiket,
  },
  {
    path: "/agenda-kegiatan",
    name: "AgendaKegiatan",
    component: AgendaKegiatan,
  },
  {
    path: "/notifikasi-darurat",
    name: "NotifikasiDarurat",
    component: NotifikasiDarurat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
