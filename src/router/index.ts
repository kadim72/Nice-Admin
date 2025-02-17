import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import AlertView from "../views/AlertView.vue";
import AccordionView from "../views/AccordionView.vue";
import BadgesView from "../views/BadgesView.vue";
import BreadcrumbsView from "../views/BreadcrumbsView.vue";
import ButtonsView from "../views/ButtonsView.vue";
import CardsView from "../views/CardsView.vue";
import CarouselView from "../views/CarouselView.vue";
import ListGroupView from "../views/ListGroupView.vue";
import ModalView from "../views/ModalView.vue";
import TapsView from "../views/TapsView.vue";
import PaginationView from "../views/PaginationView.vue";
import ProgressView from "../views/ProgressView.vue";
import SpinnerView from "../views/SpinnerView.vue";
import TooltipsView from "../views/TooltipsView.vue";
import FormElement from "@/views/FormElementView.vue";
import FormLayout from "@/views/FormLayoutView.vue";
import FormValidation from "@/views/FormValidationView.vue";
import GeneralTablesView from "@/views/GeneralTablesView.vue";
import DataTablesView from "../views/DataTablesView.vue";
import ChartView from "../views/ChartView.vue";
import BlanksView from "@/views/BlanksView.vue";
import ErrorView from "../views/404ErrorView.vue";
import ContactView from "@/views/ContactView.vue";
import ApexChartView from "@/views/ApexChartView.vue";
import ProfileView from "@/views/ProfileView.vue";
import HomeView from "@/navigation/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/home/dashboard" },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: ErrorView,
    },
    {
        path: "/home",
        component: HomeView,
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: DashboardView,
            },
            {
                path: "alert",
                name: "alert",
                component: AlertView,
            },
            {
                path: "accordion",
                name: "accordion",
                component: AccordionView,
            },
            {
                path: "badges",
                name: "badges",
                component: BadgesView,
            },
            {
                path: "breadcrumbs",
                name: "breadcrumbs",
                component: BreadcrumbsView,
            },
            {
                path: "buttons",
                name: "buttons",
                component: ButtonsView,
            },
            {
                path: "cards",
                name: "cards",
                component: CardsView,
            },
            {
                path: "carousel",
                name: "carousel",
                component: CarouselView,
            },
            {
                path: "list-group",
                name: "list-group",
                component: ListGroupView,
            },
            {
                path: "modal",
                name: "modal",
                component: ModalView,
            },
            {
                path: "taps",
                name: "taps",
                component: TapsView,
            },
            {
                path: "pagination",
                name: "pagination",
                component: PaginationView,
            },
            {
                path: "progress",
                name: "progress",
                component: ProgressView,
            },
            {
                path: "spinner",
                name: "spinner",
                component: SpinnerView,
            },
            {
                path: "tooltips",
                name: "tooltips",
                component: TooltipsView,
            },
            {
                path: "form-element",
                name: "form-element",
                component: FormElement,
            },
            {
                path: "form-layout",
                name: "form-layout",
                component: FormLayout,
            },
            {
                path: "form-validation",
                name: "form-validation",
                component: FormValidation,
            },
            {
                path: "general-tables",
                name: "general-tables",
                component: GeneralTablesView,
            },
            {
                path: "data-tables",
                name: "data-tables",
                component: DataTablesView,
            },
            {
                path: "chart",
                name: "chart",
                component: ChartView,
            },
            {
                path: "apex-chart",
                name: "apex-chart",
                component: ApexChartView,
            },
            {
                path: "profile",
                name: "profile",
                component: ProfileView,
            },
            {
                path: "contact",
                name: "contact",
                component: ContactView,
            },
            {
                path: "blanks",
                name: "blanks",
                component: BlanksView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
