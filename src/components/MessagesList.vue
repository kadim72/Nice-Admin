<template>
    <li class="message-item">
        <slot></slot>
        <div class="text">
            <h4>{{ title }}</h4>
            <p>{{ body }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "MessageList",
    props: ["title", "body", "child"],
};
</script>
