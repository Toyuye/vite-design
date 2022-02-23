<template>
    <div>
        <DesignEditor></DesignEditor>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DesignEditor from '@/packages/design-sdk-packages/create-design-editor/src/index.vue';
export default defineComponent({
    name: 'Home',
    components: {
        DesignEditor
    },
    setup() {

    }
})
</script>

<style>

</style>
