import NoticeFaq from "./components/NoticeFaq.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-noticefaq", NoticeFaq);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

NoticeFaq.install = install;

export default NoticeFaq;

