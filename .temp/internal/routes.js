/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "K:\\Study\\VSCode\\StarNight Engine Doc\\node_modules\\.pnpm\\registry.npmmirror.com+@vuepress+core@1.9.7\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-0c1a5bd9",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0c1a5bd9").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-7fd2ee88",
    path: "/extend/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7fd2ee88").then(next)
    },
  },
  {
    path: "/extend/index.html",
    redirect: "/extend/"
  },
  {
    name: "v-7716948f",
    path: "/extend/command.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7716948f").then(next)
    },
  },
  {
    name: "v-399cd322",
    path: "/extend/ui.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-399cd322").then(next)
    },
  },
  {
    name: "v-455631ec",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-455631ec").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-fc9f918e",
    path: "/guide/assetzip.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-fc9f918e").then(next)
    },
  },
  {
    name: "v-0b94e857",
    path: "/guide/config.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b94e857").then(next)
    },
  },
  {
    name: "v-079b6e96",
    path: "/guide/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-079b6e96").then(next)
    },
  },
  {
    name: "v-5187b2d5",
    path: "/guide/problem.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5187b2d5").then(next)
    },
  },
  {
    name: "v-576b5a85",
    path: "/guide/script.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-576b5a85").then(next)
    },
  },
  {
    name: "v-9b8f5588",
    path: "/info/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9b8f5588").then(next)
    },
  },
  {
    path: "/info/index.html",
    redirect: "/info/"
  },
  {
    name: "v-8e2ca3da",
    path: "/info/fix.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8e2ca3da").then(next)
    },
  },
  {
    name: "v-24df6e6f",
    path: "/info/todo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-24df6e6f").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]