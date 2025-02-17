<template>
    <header>
        <nav class="navbar w-100">
            <aside
                class="d-flex justify-content-between align-items-center me-1"
            >
                <a href="#" class="logo d-flex align-items-center me-md-5">
                    <img src="@/assets/Images/logo.png" alt="logo" />
                    <h1>NiceAdmin</h1>
                </a>
                <font-awesome-icon
                    :icon="['fas', 'bars']"
                    id="bar-nav"
                    @click="applyClass($refs.sideBarMain, 'show')"
                />
            </aside>
            <div class="header-nav">
                <div class="search-bar">
                    <input
                        type="text"
                        name="search"
                        id="search-nav"
                        ref="searchNav"
                        placeholder="Search"
                    />
                    <font-awesome-icon
                        :icon="['fas', 'search']"
                        id="search-nav-icon"
                        @click="applyClass($refs.searchNav, 'show')"
                    />
                </div>
                <div
                    class="icon"
                    id="bell-nav"
                    @click="applyClass($refs.notificationList, 'show')"
                >
                    <font-awesome-icon :icon="['fas', 'bell']" />
                    <div class="box" ref="notificationList">
                        <div class="header-box">
                            <p>You have 4 new notifications</p>
                            <button type="button">View all</button>
                        </div>
                        <ul class="m-0 p-0">
                            <notification-list
                                v-for="noti in notiList"
                                :key="noti.id"
                                :iconN="noti.sympol"
                                :title="noti.title"
                                :body="noti.body"
                            />
                        </ul>
                        <span class="show-all">Show All Notifications</span>
                    </div>
                </div>
                <div
                    class="icon"
                    id="message-nav"
                    @click="applyClass($refs.messageList, 'show')"
                >
                    <font-awesome-icon :icon="['fas', 'message']" />
                    <div class="box" ref="messageList">
                        <div class="header-box">
                            <p>You have 4 new notifications</p>
                            <button type="button">View all</button>
                        </div>
                        <ul class="m-0 p-0">
                            <message-list
                                v-for="msg in msgList"
                                :key="msg.id"
                                :title="msg.title"
                                :body="msg.body"
                            >
                                <img
                                    :src="
                                        require(`../assets/Images/messages-${msg.id}.jpg`)
                                    "
                                    alt="profile"
                                />
                            </message-list>
                        </ul>
                        <span class="show-all">Show All Notifications</span>
                    </div>
                </div>
                <div class="avatar position-relative" id="profile-nav">
                    <img src="@/assets/Images/profile-img.jpg" alt="avatar" />
                    <span
                        class="avatar-name d-none d-md-inline-block"
                        @click="applyClass($refs.floating, 'active')"
                        >K.Anderson
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </span>
                    <div class="floating-window" ref="floating">
                        <div class="card border-0">
                            <div class="card-body">
                                <div class="text-center">
                                    <h5>Kevin Anderson</h5>
                                    <p>Web Designer</p>
                                </div>
                                <ul class="p-0">
                                    <li>
                                        <router-link to="/profile">
                                            <font-awesome-icon
                                                :icon="['fas', 'user']"
                                            />
                                            My Profile
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/profile">
                                            <font-awesome-icon
                                                :icon="['fas', 'gear']"
                                            />
                                            Settings
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact">
                                            <font-awesome-icon
                                                :icon="[
                                                    'fas',
                                                    'circle-question',
                                                ]"
                                            />
                                            Need Help ?
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/login">
                                            <font-awesome-icon
                                                :icon="[
                                                    'fas',
                                                    'arrow-right-from-bracket',
                                                ]"
                                            />
                                            Sign Out
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <aside class="sidebar" ref="sideBarMain">
        <ul class="sidebar-nav restart">
            <li class="nav-item">
                <router-link class="link router" to="./dashboard">
                    <font-awesome-icon :icon="['fas', 'border-all']" />
                    Dashboard
                </router-link>
            </li>
            <li class="nav-item">
                <button
                    type="button"
                    class="router link-container"
                    @click="activeLinksContainer"
                >
                    <font-awesome-icon :icon="['fas', 'bars-progress']" />
                    components
                    <font-awesome-icon
                        class="arrow"
                        :icon="['fas', 'angle-down']"
                    />
                </button>
                <ul>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./alert"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Alert
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./accordion"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Accordion
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./badges"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Badges
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./breadcrumbs"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Breadcrumbs
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./buttons"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Buttons
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./cards"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Cards
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./carousel"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Carousel
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./list-group"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            List Group
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./modal"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Modal
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./taps"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Tabs
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./pagination"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Pagination
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./progress"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Progress
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./spinner"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Spinner
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./tooltips"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Tooltips
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <button
                    type="button"
                    class="router link-container"
                    @click="activeLinksContainer"
                >
                    <font-awesome-icon :icon="['fas', 'newspaper']" />
                    Forms
                    <font-awesome-icon
                        class="arrow"
                        :icon="['fas', 'angle-down']"
                    />
                </button>
                <ul>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./form-element"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Form Element
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./form-layout"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Form Layout
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./form-validation"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Form Validation
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <button
                    type="button"
                    class="router link-container"
                    @click="activeLinksContainer"
                >
                    <font-awesome-icon :icon="['fas', 'table-list']" />
                    Tables
                    <font-awesome-icon
                        class="arrow"
                        :icon="['fas', 'angle-down']"
                    />
                </button>
                <ul>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./general-tables"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            General Tables
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./data-tables"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Data Tables
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <button
                    type="button"
                    class="router link-container"
                    @click="activeLinksContainer"
                >
                    <font-awesome-icon :icon="['fas', 'chart-line']" />
                    Charts
                    <font-awesome-icon
                        class="arrow"
                        :icon="['fas', 'angle-down']"
                    />
                </button>
                <ul>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./chart"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Chart.js
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="link router inner-router"
                            to="./apex-chart"
                        >
                            <font-awesome-icon :icon="['fas', 'circle']" />
                            Apex Chart
                        </router-link>
                    </li>
                </ul>
            </li>
            <span class="title-nav">Pages</span>
            <li class="nav-item">
                <router-link class="link router" to="./profile">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    Profile
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="link router" to="./contact">
                    <font-awesome-icon :icon="['fas', 'question-circle']" />
                    Contact
                </router-link>
            </li>
            <li class="nav-item">
                <router-link replace class="link router" to="/register">
                    <font-awesome-icon :icon="['fas', 'id-card']" />
                    Register
                </router-link>
            </li>
            <li class="nav-item">
                <router-link replace class="link router" to="/login">
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-from-bracket']"
                    />
                    Login
                </router-link>
            </li>
            <li class="nav-item">
                <router-link replace class="link router" to="./err">
                    <font-awesome-icon :icon="['fas', 'ban']" />
                    Error 404
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="link router" to="./blanks">
                    <font-awesome-icon :icon="['fas', 'folder']" />
                    Blank
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import dataNotifications from "../../data/notifications.json";
import dataMessage from "../../data/messages.json";
import NotificationList from "../components/NotificationList";
import MessageList from "../components/MessagesList";

export default {
    name: "NavSection",
    data: () => {
        return {
            notiList: dataNotifications,
            msgList: dataMessage,
        };
    },
    methods: {
        applyClass(element, className) {
            element.classList.toggle(className);
        },
        activeLinksContainer(ev) {
            const statue = ev.target.classList.contains("active");

            document
                .querySelectorAll(".sidebar .link-container")
                .forEach((e) => e.classList.remove("active"));

            if (!statue) ev.target.classList.add("active");
        },
    },
    components: {
        NotificationList,
        MessageList,
    },
};
</script>
