<template>
    <div class="containerChips">
        <span>{{ returnNames }}</span>
    </div>
</template>

<script>
import Api from './countryReturn'
export default {
    props: {
        countryName: {
            type: String,
            required: true,
            default: 'undefined'
        }
    },
    data() {
        return {
            returnedName: ''
        }
    },
    computed: {
        returnNames(){
            Api.services(this.countryName)
                .then((response) => {
                    this.returnedName = response.data[0].name.common
                });
                return this.returnedName
        }
    }
}
</script>

<style lang="scss" scoped>
.containerChips{
    background-color: #2b3743;
    color: #fff;
    width: 150px;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
}
</style>