

<template>
  <div class="live2d-model-container" v-show="isLoaded">
    <canvas
      id="vuepress-live2d-model"
      :width="style.width"
      :height="style.height"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
  import live2dJSString from "./live2d";

  export default {
    name: "live2d-model",
    data() {
      return {
        isLoaded: true,
        model: {
          // pio: "https://qqlcx5.oss-cn-shanghai.aliyuncs.com/live2d-model/pio/model.json",
          // rem: "https://qqlcx5.oss-cn-shanghai.aliyuncs.com/live2d-model/rem/model.json",
          // sagiri: "https://qqlcx5.oss-cn-shanghai.aliyuncs.com/live2d-model/sagiri/sagiri.model.json",
          xiaomai: "https://qqlcx5.oss-cn-shanghai.aliyuncs.com/live2d-model/xiaomai/xiaomai.model.json"
        },
        style: {
          width: 300,
          height: 500
        }
      };
    },
    mounted() {
      this.initModel();

      this.$router.afterEach((to, from) => {
        if (to.path !== from.path) {
          this.initModel();
        }
      });
    },
    methods: {
      initModel() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
        if (isMobile) {
          this.isLoaded = false;
          return console.log("mobile do not load model");
        }

        if (!window.loadlive2d) {
          const script = document.createElement("script");
          script.innerHTML = live2dJSString;
          document.body.appendChild(script);
        }

        this.style = {
          width: (150 / 1424) * document.body.clientWidth,
          height: ((150 / 1424) * document.body.clientWidth) / 0.65
        };
        console.log(this.style);
        // 随机 model
        const themeArr = Object.keys(this.model)
        let themeName = null
        if(themeArr && themeArr.length > 1){
          let random = Math.floor(Math.random() * (themeArr.length + 1))
          themeName = themeArr[random]
        }
        setTimeout(() => {
          window.loadlive2d(
            "vuepress-live2d-model",
            themeName ? this.model[themeName] : this.model[themeArr[0]]
          );
        });
      }
    }
  };
</script>
<style scoped>
  .live2d-model-container {
    position: fixed;
    right: 30px;
    top: 60px;
    color: #00adb5;
    /* width: 100px;
    height: 100px;
    background-color: #333; */
  }
  .live2d-model-container #vuepress-live2d-model {
    position: fixed;
    opacity: 0.86;
    right: 0px;
    top: 15px;
    z-index: 99999;
    pointer-events: none;
  }
</style>
