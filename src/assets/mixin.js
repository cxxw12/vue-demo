const myMixin = {
    data() {
        return {
            mixinNum: 1,
        }
    },
    created() {
        this.hello();
    },
    methods: {
        hello() {
            console.log('hello from mixin')
        }
    }
}
export default myMixin