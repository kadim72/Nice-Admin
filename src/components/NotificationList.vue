<template>
    <li class="noti-message">
        <font-awesome-icon :icon="['fas', iconN]" />
        <div class="text">
            <h4>{{ title }}</h4>
            <p>{{ body }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "notificationList",
    props: ["iconN", "title", "body"],
};
</script>
